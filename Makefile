all: extra assets others items

items:
	stoic

others:
	stoic -c

extra:
	JINJA_FILTERS_DIR=jinja_filters trtpl -p -c color_schemes/light_scheme.yaml extra/

assets:
	find site/assets -maxdepth 2 -mindepth 2 -type f -print0 | xargs -0 stoic -a

.PHONY: all items others extra assets
