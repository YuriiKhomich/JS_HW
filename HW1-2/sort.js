function sortArray(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let arr = [64, 5, 4, 11, -5, 'c', 'a', 'bd'];
let MyArray = sortArray(arr);
console.log(MyArray);

let arr1 = [64, 5, 4, 11, -5];
arr1.sort((a, b) => a - b);
console.log(arr1)