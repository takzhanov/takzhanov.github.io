# takzhanov.github.io

Персональный репозиторий для GitHub Pages: визитка, CV (EN/RU) и статические мини-проекты.

## Структура проекта

```text
github-page/
├─ me/                         # Основная страница по адресу /me/
│  ├─ index.html               # Главная страница сайта
│  ├─ cv/
│  │  ├─ cv-en.pdf             # Готовое CV EN (публикуется)
│  │  └─ cv-ru.pdf             # Готовое CV RU (публикуется)
│  └─ playground/index.html    # Редирект со старого адреса на /labs/
├─ labs/
│  ├─ index.html               # Скрытый от основной страницы каталог поделок
│  ├─ snake/index.html         # Статическая поделка 1
│  └─ debt/index.html          # Статическая поделка 2
├─ cv/                         # Исходники CV
│  ├─ template.tex             # Общий шаблон оформления
│  ├─ content/
│  │  ├─ en.tex                # Текст EN
│  │  └─ ru.tex                # Текст RU
│  ├─ cv-en.tex                # Обертка EN (переменные)
│  └─ cv-ru.tex                # Обертка RU (переменные)
├─ .github/workflows/build-cv.yml
├─ Makefile
└─ index.html                  # Редирект с корня в ./me/
```

## Как публикуется GitHub Pages

1. Запушить репозиторий на GitHub.
2. В `Settings -> Pages` выбрать:
   - `Source: Deploy from a branch`
   - `Branch: master` (или `main`, если переименуешь ветку)
   - `Folder: /(root)`
3. После деплоя сайт будет доступен по URL вида:
   - `https://<username>.github.io/<repo>/`

Важно: GitHub Pages публикует именно ту ветку, которая выбрана в `Settings -> Pages`.
Сейчас локально рабочая ветка: `master`.

## Локальная работа

### 1) Предпросмотр сайта

```bash
python3 -m http.server 8080
```

Открыть: [http://localhost:8080/me/](http://localhost:8080/me/)

### 2) Сборка CV

```bash
make cv
```

Команда берет тексты из `cv/content/*`, общий шаблон из `cv/template.tex` и публикуемые PDF кладет в `me/cv/`.

### 3) Симуляция GitHub Pages URL (с префиксом репозитория)

```bash
./scripts/serve-pages.sh github-page 8787
```

Открыть:
- `http://localhost:8787/github-page/` (редирект на `/github-page/me/`)
- `http://localhost:8787/github-page/me/`
- `http://localhost:8787/github-page/me/cv/cv-en.pdf`
- `http://localhost:8787/github-page/labs/`

Где:
- `github-page` - имя репозитория (первый параметр скрипта)
- `8787` - порт (второй параметр скрипта)

## Куда класть новые материалы

### Статические "поделки"

Класть в `labs/<slug>/index.html`.

Пример:
- файл: `labs/my-demo/index.html`
- URL: `/labs/my-demo/`
- общий вход: `/labs/` (`labs/index.html`)
- старый `/me/playground/` перенаправляет на `/labs/`
- на основной визитке (`me/index.html`) ссылки на labs не обязаны отображаться

### Блог (статический)

Базовый вариант без движка:
- `me/blog/index.html`
- `me/blog/<post-slug>/index.html`

Дальше можно перейти на генератор (например, Hugo/Jekyll) с output в `me/`.

## Важно про "скрытый URL"

- `/labs/` не связан с основной страницей `/me/`, но остается публичным, если URL известен.
- Для действительно непубличных материалов нужен другой канал: private repo, отдельный хостинг с auth, VPN и т.д.

## GitHub Actions: Upload CV artifacts

Шаг `Upload CV artifacts` в workflow прикладывает собранные PDF к конкретному запуску Actions как временные артефакты.

- Это удобно для проверки сборки.
- Это **не** хранилище сайта и не постоянная ссылка для Pages.
- Для публикации на сайте PDF должны лежать в `me/cv/` в репозитории (или деплоиться в Pages отдельным пайплайном).
