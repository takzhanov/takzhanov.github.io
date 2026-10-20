(function (root) {
  "use strict";

  const size = 20;
  const directions = {
    right: { x: 1, y: 0 }, down: { x: 0, y: 1 },
    left: { x: -1, y: 0 }, up: { x: 0, y: -1 },
  };
  const directionNames = Object.keys(directions);
  const cellKey = (cell) => `${cell.x},${cell.y}`;
  const equal = (first, second) => first.x === second.x && first.y === second.y;
  const reverse = (first, second) => directions[first].x === -directions[second].x && directions[first].y === -directions[second].y;

  function neighbor(cell, direction, mode) {
    const delta = directions[direction];
    const next = { x: cell.x + delta.x, y: cell.y + delta.y };
    if (mode === "wrap") {
      next.x = (next.x + size) % size;
      next.y = (next.y + size) % size;
    }
    return next.x < 0 || next.y < 0 || next.x >= size || next.y >= size ? null : next;
  }

  function spawnFood(snake, obstacles, random = Math.random) {
    const blocked = new Set([...snake, ...obstacles].map(cellKey));
    const free = [];
    for (let row = 0; row < size; row++) {
      for (let column = 0; column < size; column++) {
        const cell = { x: column, y: row };
        if (!blocked.has(cellKey(cell))) free.push(cell);
      }
    }
    return free.length ? free[Math.floor(random() * free.length)] : null;
  }

  function createGame(mode = "walls", direction = "right", random = Math.random) {
    const delta = directions[direction];
    const snake = Array.from({ length: 3 }, (_, index) => ({ x: 10 - delta.x * index, y: 10 - delta.y * index }));
    const obstacles = mode === "obstacles"
      ? [4, 5, 6, 13, 14, 15].flatMap((column) => [{ x: column, y: 5 }, { x: column, y: 14 }])
      : [];
    return { snake, obstacles, food: spawnFood(snake, obstacles, random), direction, mode, score: 0, phase: "ready" };
  }

  function advance(state, requested = state.direction, random = Math.random) {
    if (state.phase !== "running") return { state, ate: false };
    const direction = state.snake.length > 1 && reverse(state.direction, requested) ? state.direction : requested;
    const next = neighbor(state.snake[0], direction, state.mode);
    const ate = Boolean(next && state.food && equal(next, state.food));
    const body = ate ? state.snake : state.snake.slice(0, -1);
    if (!next || [...body, ...state.obstacles].some((cell) => equal(cell, next))) {
      return { state: { ...state, direction, phase: "over" }, ate: false };
    }
    const snake = [next, ...state.snake];
    if (!ate) snake.pop();
    const food = ate ? spawnFood(snake, state.obstacles, random) : state.food;
    return { state: { ...state, snake, food, direction, score: state.score + Number(ate), phase: food ? "running" : "won" }, ate };
  }

  function findPath(start, goal, blocked, mode) {
    const queue = [start];
    const previous = new Map([[cellKey(start), null]]);
    for (let index = 0; index < queue.length; index++) {
      const current = queue[index];
      if (equal(current, goal)) {
        const path = [];
        let cursor = cellKey(current);
        while (previous.get(cursor)) {
          const entry = previous.get(cursor);
          path.push(entry.direction);
          cursor = entry.from;
        }
        return path.reverse();
      }
      for (const direction of directionNames) {
        const next = neighbor(current, direction, mode);
        if (!next || blocked.has(cellKey(next)) || previous.has(cellKey(next))) continue;
        previous.set(cellKey(next), { from: cellKey(current), direction });
        queue.push(next);
      }
    }
    return null;
  }

  function simulate(state, path) {
    let snake = state.snake.slice();
    let direction = state.direction;
    for (const requested of path) {
      if (snake.length > 1 && reverse(direction, requested)) return null;
      const next = neighbor(snake[0], requested, state.mode);
      const ate = next && state.food && equal(next, state.food);
      const body = ate ? snake : snake.slice(0, -1);
      if (!next || [...body, ...state.obstacles].some((cell) => equal(cell, next))) return null;
      snake = [next, ...snake];
      if (!ate) snake.pop();
      direction = requested;
    }
    return snake;
  }

  function headCanReachTail(snake, state) {
    const blocked = new Set([...snake.slice(1, -1), ...state.obstacles].map(cellKey));
    return findPath(snake[0], snake[snake.length - 1], blocked, state.mode) !== null;
  }

  function reachable(start, blocked, mode) {
    const queue = [start];
    const seen = new Set([cellKey(start)]);
    for (let index = 0; index < queue.length; index++) {
      for (const direction of directionNames) {
        const next = neighbor(queue[index], direction, mode);
        if (!next || blocked.has(cellKey(next)) || seen.has(cellKey(next))) continue;
        seen.add(cellKey(next));
        queue.push(next);
      }
    }
    return seen.size;
  }

  function chooseAutopilotDirection(state) {
    if (!state.food) return state.direction;
    const blocked = new Set([...state.snake.slice(0, -1), ...state.obstacles].map(cellKey));
    const path = findPath(state.snake[0], state.food, blocked, state.mode);
    if (path && path.length) {
      const after = simulate(state, path);
      if (after && headCanReachTail(after, state)) return path[0];
    }
    let best = null;
    let bestScore = -Infinity;
    let fallback = null;
    for (const direction of directionNames) {
      const after = simulate(state, [direction]);
      if (!after) continue;
      fallback = fallback || direction;
      if (!headCanReachTail(after, state)) continue;
      const occupied = new Set([...after.slice(1), ...state.obstacles].map(cellKey));
      let horizontal = Math.abs(after[0].x - state.food.x);
      let vertical = Math.abs(after[0].y - state.food.y);
      if (state.mode === "wrap") {
        horizontal = Math.min(horizontal, size - horizontal);
        vertical = Math.min(vertical, size - vertical);
      }
      const score = reachable(after[0], occupied, state.mode) * 1000 - horizontal - vertical;
      if (score > bestScore) {
        bestScore = score;
        best = direction;
      }
    }
    return best || fallback || state.direction;
  }

  const api = { size, directions, equal, reverse, neighbor, spawnFood, createGame, advance, chooseAutopilotDirection };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.SnakeCore = api;
})(globalThis);
