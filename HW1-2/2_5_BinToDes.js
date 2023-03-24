function IntoDes(arr) {
    binstr = arr.join('');
    let res = parseInt(binstr, 2);
    return res;
}

console.log(IntoDes([1,0,0,0,1]));