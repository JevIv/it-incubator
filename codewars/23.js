function number2words(n){
    const baseNumbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
        1000: 'thousand'
    };

    const first = (n, i) => String.prototype.substring.call(n, 0, i);
    const rest = (n, i) => String.prototype.substring.call(n, i);

    const calculate = (n, acceptZero = true) => {
        console.log('calculate', n);
        if (n === 0 && !acceptZero) return '';
        if (n < 100 && baseNumbers[n]) return baseNumbers[n];

        switch (String(n).length) {
            case 2: return tens(n);
            case 3: return aboveOneHundred(n, 1, 100);
            case 4: return aboveOneHundred(n, 1, 1000);
            case 5: return aboveOneHundred(n, 2, 1000);
            case 6: return aboveOneHundred(n, 3, 1000);
        }
    }

    const tens = (n) => {
        const v = parseInt(n, 10);
        return [
            calculate(first(v, 1)*10),
            calculate(rest(v, 1))
        ].join('-');
    }

    const aboveOneHundred = (n, i, baseNumber) => {
        const v = parseInt(n, 10);
        const tail = parseInt(rest(v, i), 10);

        return [
            calculate(first(v, i)),
            baseNumbers[baseNumber],
            calculate(tail, false)
        ].join(' ').trim();;
    }

    return calculate(n);
}