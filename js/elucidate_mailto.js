function elucidate_mailto() {
    var link = document.getElementById('contact');
    var prefix = 'mailto:';
    if (link != null && link.href.indexOf(prefix) == 0) {
        link.href = prefix + link.href.slice(prefix.length).split('').reverse().map(rot_thirteen).join('');
    }
}

function rot_thirteen(c) {
    if (!c.match(/[A-Za-z]/)) {
        return c;
    } else {
        var code = c.charCodeAt(0);
        var minval = 97;
        if (code < minval)
            minval = 65;
        code = minval + ((code - minval) + 13) % 26;
        return String.fromCharCode(code);
    }
}
