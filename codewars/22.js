function duplicateEncode(word) {
    var str = word.toLowerCase();
    var unique = '';
    for (var i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) === str.indexOf(str[i])) {
            unique += '(';
        } else
            unique += ')';
    }
    return unique;

}