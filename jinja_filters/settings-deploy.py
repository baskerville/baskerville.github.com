title = 'The Art of Baskerville'
home = 'http://baskerville.github.com'
items_per_page = 64

custom_filters = {}

def css_compat(name, value):
    return '\n'.join(['{}{}{}'.format(prefix, name, value) for prefix in ['-webkit-', '-moz-', '-ms-', '-o-', '']])

custom_filters['css_compat'] = css_compat
