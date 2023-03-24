function sumSmallNum(numbers) {
    let small1 = Number.MAX_SAFE_INTEGER;
    let small2 = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < small1) {
            small2 = small1;
            small1 = numbers[i];
        } else if (numbers[i] < small2) {
            small2 = numbers[i];
        }
    }
    return small1 + small2;
}
console.log(sumSmallNum([19, 5, 42, 2, 77]));
console.log(sumSmallNum([10, 800, 3453000, 8010]));
console.log(sumSmallNum([12, 898, 899, 900]))

// второй вариант/
function sumSmallNum1(numbers) {

  const sortedNumbers = numbers.sort((a, b) => a - b);
  return sortedNumbers[0] + sortedNumbers[1];
}
console.log(sumSmallNum1([19, 5, 42, 2, 77]));
console.log(sumSmallNum1([10, 800, 3453000, 8010]));
console.log(sumSmallNum1([12, 898, 899, 900]))