# takzhanov.github.io

Персональный репозиторий для GitHub Pages: визитка, CV (EN/RU) и статические мини-проекты.

## Структура проекта

```text
github-page/
├─ site/                       # Публикуемая часть (GitHub Pages source)
│  ├─ index.html               # Главная страница сайта
│  ├─ cv/
│  │  ├─ cv-en.pdf             # Готовое CV EN (публикуется)
│  │  └─ cv-ru.pdf             # Готовое CV RU (публикуется)
│  ├─ playground/index.html    # Отдельный вход в каталог поделок
│  └─ labs/
│     ├─ snake/index.html      # Статическая поделка 1
│     └─ debt/index.html       # Статическая поделка 2
├─ cv/                         # Исходники CV
│  ├─ template.tex             # Общий шаблон оформления
│  ├─ content/
│  │  ├─ en.tex                # Текст EN
│  │  └─ ru.tex                # Текст RU
│  ├─ cv-en.tex                # Обертка EN (переменные)
│  └─ cv-ru.tex                # Обертка RU (переменные)
├─ .github/workflows/build-cv.yml
├─ Makefile
└─ index.html                  # Локальный редирект в ./site/
```

## Как публикуется GitHub Pages

1. Запушить репозиторий на GitHub.
2. В `Settings -> Pages` выбрать:
   - `Source: Deploy from a branch`
   - `Branch: master` (или `main`, если переименуешь ветку)
   - `Folder: /site`
3. После деплоя сайт будет доступен по URL вида:
   - `https://<username>.github.io/<repo>/`

Важно: GitHub Pages публикует именно ту ветку, которая выбрана в `Settings -> Pages`.
Сейчас локально рабочая ветка: `master`.

## Локальная работа

### 1) Предпросмотр сайта

```bash
python3 -m http.server 8080
```

Открыть: [http://localhost:8080/site/](http://localhost:8080/site/)

### 2) Сборка CV

```bash
make cv
```

Команда берет тексты из `cv/content/*`, общий шаблон из `cv/template.tex` и публикуемые PDF кладет в `site/cv/`.

### 3) Симуляция GitHub Pages URL (с префиксом репозитория)

```bash
./scripts/serve-pages.sh github-page 8787
```

Открыть:
- `http://localhost:8787/github-page/`
- `http://localhost:8787/github-page/cv/cv-en.pdf`
- `http://localhost:8787/github-page/playground/`

Где:
- `github-page` - имя репозитория (первый параметр скрипта)
- `8787` - порт (второй параметр скрипта)

## Куда класть новые материалы

### Статические "поделки"

Класть в `site/labs/<slug>/index.html`.

Пример:
- файл: `site/labs/my-demo/index.html`
- URL: `/labs/my-demo/`
- общий вход: `/playground/` (`site/playground/index.html`)
- на основной визитке (`site/index.html`) ссылки на labs не обязаны отображаться

### Блог (статический)

Базовый вариант без движка:
- `site/blog/index.html`
- `site/blog/<post-slug>/index.html`

Дальше можно перейти на генератор (например, Hugo/Jekyll) с output в `site/`.

## Важно про "скрытый URL"

- Технически можно сделать страницу без ссылки с главной, но она остается публичной, если URL известен.
- Для действительно непубличных материалов нужен другой канал: private repo, отдельный хостинг с auth, VPN и т.д.

## GitHub Actions: Upload CV artifacts

Шаг `Upload CV artifacts` в workflow прикладывает собранные PDF к конкретному запуску Actions как временные артефакты.

- Это удобно для проверки сборки.
- Это **не** хранилище сайта и не постоянная ссылка для Pages.
- Для публикации на сайте PDF должны лежать в `site/cv/` в репозитории (или деплоиться в Pages отдельным пайплайном).
