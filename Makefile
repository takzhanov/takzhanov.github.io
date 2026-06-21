LATEXMK ?= latexmk
CV_DIR := cv
CV_BUILD_DIR := $(CV_DIR)/.build
PAGES_DIR := me
PAGES_CV_DIR := $(PAGES_DIR)/cv
CV_PDFFILES := $(PAGES_CV_DIR)/cv-en.pdf $(PAGES_CV_DIR)/cv-ru.pdf
TEXMFVAR := $(CURDIR)/.texmf-var

.PHONY: cv cv-clean

cv: $(CV_PDFFILES)

$(CV_BUILD_DIR) $(PAGES_CV_DIR):
	mkdir -p $@

$(PAGES_CV_DIR)/cv-en.pdf: $(CV_DIR)/cv-en.tex $(CV_DIR)/template.tex $(CV_DIR)/content/en.tex | $(CV_BUILD_DIR) $(PAGES_CV_DIR)
	TEXMFVAR=$(TEXMFVAR) cd $(CV_DIR) && $(LATEXMK) -pdf -interaction=nonstopmode -halt-on-error -output-directory=.build cv-en.tex
	cp $(CV_BUILD_DIR)/cv-en.pdf $@

$(PAGES_CV_DIR)/cv-ru.pdf: $(CV_DIR)/cv-ru.tex $(CV_DIR)/template.tex $(CV_DIR)/content/ru.tex | $(CV_BUILD_DIR) $(PAGES_CV_DIR)
	TEXMFVAR=$(TEXMFVAR) cd $(CV_DIR) && $(LATEXMK) -pdf -interaction=nonstopmode -halt-on-error -output-directory=.build cv-ru.tex
	cp $(CV_BUILD_DIR)/cv-ru.pdf $@

cv-clean:
	TEXMFVAR=$(TEXMFVAR) cd $(CV_DIR) && $(LATEXMK) -C -output-directory=.build cv-en.tex
	TEXMFVAR=$(TEXMFVAR) cd $(CV_DIR) && $(LATEXMK) -C -output-directory=.build cv-ru.tex
	rm -f $(PAGES_CV_DIR)/cv-en.pdf $(PAGES_CV_DIR)/cv-ru.pdf

start-pages:
	./scripts/serve-pages.sh
