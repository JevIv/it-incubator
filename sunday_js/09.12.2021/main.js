//sort
//bubble sort
//

let numbers = [2,4,6,3,7,1,7,8]

let newArray = [];

function sortArray(numbers) {
    for (let i = 0; numbers.length; i++) {
        let min = Math.min(...numbers);
        let index = numbers.indexOf(min);
        newArray.push(min);
        numbers.splice(index,1)
    }
    return newArray
}

function helloSort(arr) {
    return arr.reduce((acc, el) => {
        let idx = 0;
        while (idx < acc.length && el < acc[idx]) idx++;
        acc.splice(idx, 0, el);
        return acc;
    }, []);
}

let sortArr1 = []
for (let i=0; arr.length; i++) {
    let minElement = arr.reduce((acc, el) => acc > el ? el : acc)
    sortArr1.push(minElement);
    arr = arr.filter((f, i) => i !== arr.indexOf(minElement))
}

let sortArr2 = []
while (arr.length){
    let minElement = arr[0];
    for (let i=1; 1<arr.length; i++) {
        if (arr[i] < minElement) {
            minElement = arr[i]
        }
    }
    sortArr1.push(minElement);
    arr = arr.filter((f, index) => index !== arr.indexOf(minElement))
}


console.log(sortArray(numbers))

console.log((helloSort([1,9,2,74,2,73,12,3,7,6,4,5,5])));
