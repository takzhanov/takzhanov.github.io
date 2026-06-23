# CV sources

This folder stores CV sources and one shared layout template.

## Structure

- `template.tex` - shared layout/preamble for all CV versions.
- `content/en.tex` - English CV content (sections/body).
- `content/ru.tex` - Russian CV content (sections/body).
- `cv-en.tex` - EN wrapper (language + profile variables + content file).
- `cv-ru.tex` - RU wrapper (language + profile variables + content file).

## Build

Run from repository root:

```bash
make cv
```

Output PDFs are generated for GitHub Pages in:

- `me/cv/takzhanov-cv-en.pdf`
- `me/cv/takzhanov-cv-ru.pdf`

Temporary build files are kept in `cv/.build/`.

## Editing workflow

1. Change layout/typography in `template.tex`.
2. Change language-specific text in `content/en.tex` or `content/ru.tex`.
3. Change profile/contact variables in `cv-en.tex` or `cv-ru.tex`.
4. Rebuild with `make cv`.
