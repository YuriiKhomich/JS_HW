function Myfiltering(arr, callback) {
    let res = [];
    arr.map((item, index) => {
        if (callback(item, index, arr)) {
            res.push(item);
        }
    });
    return res;
}
let arr = [1, 2, 3, 4, 5, 64, 138];
let myfiltered = Myfiltering(arr, item => item % 2 === 0);
console.log(myfiltered);

// Так проще)
let result = arr.filter(item => item % 2 === 0);
console.log(result)





