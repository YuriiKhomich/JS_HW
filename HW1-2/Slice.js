function Myslice(arr, start, finish) {
   let res = []
    if (start === undefined) {
        start = 0;
    }
    if (finish === undefined) {
        finish = arr.length;
    }
    if (start < 0) {
        start = arr.length + start;
    }
    if (finish < 0) {
        finish = arr.length + finish;
    }
    arr.map((item, index) => {
        if (index >= start && index < finish) {
            res.push(item);
        }
    });
    return res;
}
let  arr = [1, 2, 3, 4, 5];
let slicedArray = Myslice(arr, 1,3);
console.log(slicedArray);

//Так проще
console.log(slicedArray2 = arr.slice(1,3))