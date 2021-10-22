function flattenAndSort(array) {
    // Good luck, brave code warrior!
    function compareNumbers(a, b) {
        return a - b;
    }
    return array.reduce(
        function(accumulator, currentValue) {
            return accumulator.concat(currentValue).sort(compareNumbers)
        },
        []);
}