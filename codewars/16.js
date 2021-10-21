function twoHighest(arr) {
    return arr
        .filter((v, i, a) => a.indexOf(v) === i)  // Unique array
        .sort((a, b) => b - a)  // Sort by DESC
        .slice(0, 2);  // Get first 2 element of sorted array
};

const demoArray = [15, 20, 20, 17];
const result = twoHighest(demoArray);
console.log(result);