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

If `latexmk` is unavailable, [Tectonic](https://tectonic-typesetting.github.io/book/latest/installation/)
can compile the same sources using the DejaVu Serif font (including Cyrillic):

```bash
mkdir -p cv/.build
tectonic --outdir cv/.build cv/cv-en.tex
tectonic --outdir cv/.build cv/cv-ru.tex
cp cv/.build/cv-en.pdf me/cv/takzhanov-cv-en.pdf
cp cv/.build/cv-ru.pdf me/cv/takzhanov-cv-ru.pdf
```

## Editing workflow

1. Change layout/typography in `template.tex`.
2. Change language-specific text in `content/en.tex` or `content/ru.tex`.
3. Change profile/contact variables in `cv-en.tex` or `cv-ru.tex`.
4. Rebuild with `make cv`.

## PDF inspection

Show PDF metadata and extract text, with and without layout preservation:

```bash
pdfinfo me/cv/takzhanov-cv-en.pdf
pdftotext me/cv/takzhanov-cv-en.pdf -
pdftotext -layout me/cv/takzhanov-cv-en.pdf -
```

## Site thumbnail

Regenerate the site's English CV thumbnail after changing the PDF:

```bash
pdftoppm -f 1 -singlefile -scale-to 700 -png me/cv/takzhanov-cv-en.pdf me/assets/img/cv-en-preview
```
