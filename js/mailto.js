function insert_mailto() {
    var link = document.getElementById('contact');
    var url = 'gpngabP02%Q5%ryyvierxfnoO5%=gprwohf?zbp.yvnzt@yyvuyvuva:bgyvnz';

    if (link != null)
        link.href = url.split('').reverse().map(rot_thirteen).join('');
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
