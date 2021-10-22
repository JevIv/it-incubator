function createPhoneNumber(number) {
    let mask = '(xxx) xxx-xxxx';

    number.forEach(item => {
        mask = mask.replace('x', item);
    });

    return mask;
}