all: settings extra assets others items

items:
	stoic -o output_dir

others:
	stoic -o output_dir -c

extra:
	JINJA_FILTERS_DIR=jinja_filters trtpl -p -o output_dir -c color_schemes/light_scheme.yaml -c settings.yaml extra/

assets:
	find site/assets -maxdepth 2 -mindepth 2 -type f -print0 | xargs -0 stoic -o output_dir -a

settings:
	sed 's/ *= */: /' settings.py > settings.yaml


.PHONY: all items others extra assets settings
