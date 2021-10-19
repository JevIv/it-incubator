function validatePIN(str) {
    if (str.length !== 4 && str.length !== 6) {
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] < '0' || str[i] > '9') {
            return false;
        }
    }
    return true;
}