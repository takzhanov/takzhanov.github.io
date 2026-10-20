(function () {
  "use strict";

  const core = window.SnakeCore;
  const canvas = document.getElementById("gameCanvas");
  const context = canvas.getContext("2d");
  const elements = Object.fromEntries([
    "score", "best", "bestLabel", "speed", "mode", "status", "overlay", "overlayIcon", "overlayTitle", "overlayText",
    "startButton", "pauseButton", "restartButton", "autopilotButton", "muteButton", "storageNotice",
  ].map((name) => [name, document.getElementById(name)]));
  const cellSize = canvas.width / core.size;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const arrows = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right" };
  const memoryRecords = { walls: 0, wrap: 0, obstacles: 0 };
  let state = core.createGame();
  let autopilot = false;
  let demoRun = false;
  let muted = false;
  let audio = null;
  let particles = [];
  let inputQueue = [];
  let previousTime = null;
  let accumulated = 0;
  let best = 0;
  let bestMode = null;
  let storageAvailable = true;

  function loadBest() {
    bestMode = state.mode;
    best = memoryRecords[state.mode];
    try {
      const stored = Number(localStorage.getItem(`snake-best-${state.mode}`));
      if (Number.isFinite(stored) && stored >= 0) best = Math.max(best, Math.floor(stored));
    } catch {
      storageAvailable = false;
    }
    elements.storageNotice.hidden = storageAvailable;
  }

  function updateBest() {
    if (demoRun || state.score <= best) return;
    best = state.score;
    memoryRecords[state.mode] = best;
    try { localStorage.setItem(`snake-best-${state.mode}`, String(best)); }
    catch { storageAvailable = false; elements.storageNotice.hidden = false; }
  }

  function unlockAudio() {
    if (muted) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      audio = audio || new AudioContext();
      if (audio.state === "suspended") audio.resume().catch(() => {});
    } catch { audio = null; }
  }

  function sound(kind) {
    if (muted || !audio || audio.state !== "running") return;
    try {
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();
      const duration = kind === "eat" ? .12 : .35;
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(kind === "eat" ? 520 : 180, audio.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(kind === "eat" ? 900 : 55, audio.currentTime + duration);
      gain.gain.setValueAtTime(.035, audio.currentTime);
      gain.gain.exponentialRampToValueAtTime(.001, audio.currentTime + duration);
      oscillator.connect(gain);
      gain.connect(audio.destination);
      oscillator.start();
      oscillator.stop(audio.currentTime + duration);
    } catch {}
  }

  function interval() { return Math.max(65, 180 - Math.floor(state.score / 5) * 15); }

  function syncUI() {
    elements.score.textContent = state.score;
    elements.best.textContent = best;
    elements.bestLabel.textContent = demoRun ? "Рекорд игрока" : "Рекорд";
    elements.speed.textContent = `${(180 / interval()).toFixed(1).replace(".", ",")}×`;
    elements.autopilotButton.setAttribute("aria-pressed", String(autopilot));
    elements.autopilotButton.textContent = autopilot ? "Играть самому ↗" : "Показать, как надо играть ↗";
    elements.pauseButton.disabled = !["running", "paused"].includes(state.phase);
    elements.pauseButton.textContent = state.phase === "paused" ? "Продолжить" : "Пауза";
    elements.status.textContent = state.phase === "paused" ? "Пауза" : autopilot ? "Играет компьютер" : demoRun ? "Твой ход · после демо" : "Твой ход";
    elements.overlay.hidden = state.phase === "running";
    const overlays = {
      ready: ["✦", "Ну что, за яблоками?", "Нажми стрелку, свайпни или начни кнопкой.", "Начать игру"],
      paused: ["Ⅱ", "Можно выдохнуть", "Продолжи кнопкой или нажми пробел.", "Продолжить"],
      over: ["↺", "Ещё одно яблоко?", `Счёт: ${state.score}. ${demoRun ? "Демо не меняет твой рекорд." : `Рекорд в этом режиме: ${best}.`}`, autopilot ? "Повторить демо" : "Сыграть ещё"],
      won: ["✦", "Поле съедено!", `Все свободные клетки заняты. Счёт: ${state.score}.`, "Ещё раз"],
    };
    if (overlays[state.phase]) {
      const [icon, title, text, button] = overlays[state.phase];
      elements.overlayIcon.textContent = icon;
      elements.overlayTitle.textContent = title;
      elements.overlayText.textContent = text;
      elements.startButton.textContent = button;
    }
  }

  function reset(computer = false, direction = "right", start = false) {
    state = core.createGame(elements.mode.value, direction);
    state.phase = start ? "running" : "ready";
    autopilot = computer;
    demoRun = computer;
    inputQueue = [];
    particles = [];
    accumulated = 0;
    previousTime = null;
    if (bestMode !== state.mode) loadBest();
    syncUI();
  }

  function takeControl(direction) {
    unlockAudio();
    if (["ready", "over", "won"].includes(state.phase)) {
      reset(false, direction, true);
      return;
    }
    if (autopilot) {
      autopilot = false;
      inputQueue = [];
      syncUI();
    }
    if (state.phase !== "running") return;
    const previous = inputQueue[inputQueue.length - 1] || state.direction;
    if (direction !== previous && !core.reverse(previous, direction) && inputQueue.length < 2) inputQueue.push(direction);
  }

  function togglePause() {
    if (!["running", "paused"].includes(state.phase)) return;
    unlockAudio();
    state.phase = state.phase === "running" ? "paused" : "running";
    accumulated = 0;
    previousTime = null;
    syncUI();
  }

  function burst(cell) {
    if (reducedMotion) return;
    for (let index = 0; index < 14; index++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = 45 + Math.random() * 85;
      particles.push({ x: (cell.x + .5) * cellSize, y: (cell.y + .5) * cellSize, vx: Math.cos(angle) * velocity, vy: Math.sin(angle) * velocity, life: .45 });
    }
  }

  function tick() {
    const eaten = state.food;
    const direction = autopilot ? core.chooseAutopilotDirection(state) : inputQueue.shift() || state.direction;
    const result = core.advance(state, direction);
    state = result.state;
    if (result.ate) { burst(eaten); sound("eat"); updateBest(); }
    if (state.phase === "over") sound("over");
    syncUI();
  }

  function roundedCell(cell, inset, radius, fill) {
    context.fillStyle = fill;
    context.beginPath();
    context.roundRect(cell.x * cellSize + inset, cell.y * cellSize + inset, cellSize - inset * 2, cellSize - inset * 2, radius);
    context.fill();
  }

  function render(time, elapsed) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let row = 0; row < core.size; row++) {
      for (let column = 0; column < core.size; column++) {
        context.fillStyle = (row + column) % 2 ? "#1b3022" : "#1d3324";
        context.fillRect(column * cellSize, row * cellSize, cellSize, cellSize);
      }
    }
    for (const obstacle of state.obstacles) {
      roundedCell(obstacle, 2, 5, "#53644f");
      context.fillStyle = "#849078";
      context.fillRect(obstacle.x * cellSize + 7, obstacle.y * cellSize + 6, 12, 3);
    }
    if (state.food) {
      const pulse = reducedMotion || state.phase !== "running" ? 1 : 1 + Math.sin(time / 210) * .08;
      context.save();
      context.translate((state.food.x + .5) * cellSize, (state.food.y + .5) * cellSize);
      context.scale(pulse, pulse);
      context.fillStyle = "#f07763";
      context.beginPath();
      context.moveTo(0, -7);
      context.bezierCurveTo(-16, -16, -15, 11, -4, 12);
      context.bezierCurveTo(0, 10, 1, 11, 5, 12);
      context.bezierCurveTo(16, 9, 15, -16, 0, -7);
      context.fill();
      context.strokeStyle = "#c2ab7f";
      context.lineWidth = 2;
      context.beginPath(); context.moveTo(0, -7); context.lineTo(2, -13); context.stroke();
      context.fillStyle = "#cced7c";
      context.beginPath(); context.ellipse(6, -11, 5, 2.5, -.4, 0, Math.PI * 2); context.fill();
      context.fillStyle = "#ffd0a7";
      context.beginPath(); context.ellipse(-6, -3, 2, 4, .4, 0, Math.PI * 2); context.fill();
      context.restore();
    }
    for (let index = state.snake.length - 1; index >= 0; index--) {
      const fraction = index / Math.max(1, state.snake.length - 1);
      roundedCell(state.snake[index], 1.5, index === 0 ? 10 : 7, `hsl(${86 + fraction * 40} 55% ${70 - fraction * 33}%)`);
    }
    const head = state.snake[0];
    const delta = core.directions[state.direction];
    const headX = (head.x + .5) * cellSize;
    const headY = (head.y + .5) * cellSize;
    for (const side of [-1, 1]) {
      const eyeX = headX + delta.x * 6 - delta.y * side * 6;
      const eyeY = headY + delta.y * 6 + delta.x * side * 6;
      context.fillStyle = "#f8ffe2";
      context.beginPath(); context.arc(eyeX, eyeY, 4, 0, Math.PI * 2); context.fill();
      context.fillStyle = "#213421";
      context.beginPath(); context.arc(eyeX + delta.x * 1.5, eyeY + delta.y * 1.5, 2, 0, Math.PI * 2); context.fill();
    }
    if (state.phase !== "paused") {
      for (const particle of particles) {
        particle.life -= elapsed;
        particle.x += particle.vx * elapsed;
        particle.y += particle.vy * elapsed;
      }
      particles = particles.filter((particle) => particle.life > 0);
    }
    for (const particle of particles) {
      context.globalAlpha = Math.max(0, particle.life / .45);
      context.fillStyle = "#f6c17b";
      context.beginPath(); context.arc(particle.x, particle.y, 3, 0, Math.PI * 2); context.fill();
    }
    context.globalAlpha = 1;
  }

  function frame(time) {
    const elapsed = previousTime === null ? 0 : Math.min(time - previousTime, 250);
    previousTime = time;
    if (state.phase === "running") {
      accumulated += elapsed;
      while (state.phase === "running" && accumulated >= interval()) {
        accumulated -= interval();
        tick();
      }
    }
    render(time, elapsed / 1000);
    window.requestAnimationFrame(frame);
  }

  elements.startButton.addEventListener("click", () => {
    unlockAudio();
    if (state.phase === "paused") togglePause();
    else reset(autopilot, "right", true);
  });
  elements.restartButton.addEventListener("click", () => reset());
  elements.pauseButton.addEventListener("click", togglePause);
  elements.mode.addEventListener("change", () => reset());
  elements.autopilotButton.addEventListener("click", () => {
    unlockAudio();
    if (autopilot) { autopilot = false; inputQueue = []; syncUI(); }
    else reset(true, "right", true);
  });
  elements.muteButton.addEventListener("click", () => {
    muted = !muted;
    if (!muted) unlockAudio();
    if (audio && muted) audio.suspend().catch(() => {});
    elements.muteButton.textContent = muted ? "Звук: выкл." : "Звук: вкл.";
    elements.muteButton.setAttribute("aria-pressed", String(muted));
    elements.muteButton.setAttribute("aria-label", muted ? "Включить звук" : "Выключить звук");
  });
  document.addEventListener("keydown", (event) => {
    if (event.target instanceof Element && event.target.closest("select, input, textarea, [contenteditable]")) return;
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    if (arrows[event.key]) { event.preventDefault(); takeControl(arrows[event.key]); }
    if (event.code === "Space") {
      event.preventDefault();
      if (!event.repeat) togglePause();
    }
  });
  document.querySelectorAll("[data-direction]").forEach((button) => {
    button.addEventListener("click", () => takeControl(button.dataset.direction));
  });
  let pointerStart = null;
  canvas.addEventListener("pointerdown", (event) => {
    pointerStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
    canvas.setPointerCapture(event.pointerId);
    canvas.focus({ preventScroll: true });
    unlockAudio();
  });
  canvas.addEventListener("pointerup", (event) => {
    if (!pointerStart || pointerStart.id !== event.pointerId) return;
    const horizontal = event.clientX - pointerStart.x;
    const vertical = event.clientY - pointerStart.y;
    pointerStart = null;
    if (Math.max(Math.abs(horizontal), Math.abs(vertical)) < 15) return;
    takeControl(Math.abs(horizontal) > Math.abs(vertical) ? horizontal > 0 ? "right" : "left" : vertical > 0 ? "down" : "up");
  });
  canvas.addEventListener("pointercancel", () => { pointerStart = null; });
  document.addEventListener("visibilitychange", () => { if (document.hidden && state.phase === "running") togglePause(); });
  loadBest();
  syncUI();
  window.requestAnimationFrame(frame);
})();
