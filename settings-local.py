title = 'The Art of Baskerville'
output_dir = '/home/ice/public_html/output/'
home = 'http://localhost/~ice/output'
items_per_page = 64

custom_filters = {}

def css_compat(name, value):
    return '\n'.join(['{}{}{}'.format(prefix, name, value) for prefix in ['-webkit-', '-moz-', '-ms-', '-o-', '']])

custom_filters['css_compat'] = css_compat
