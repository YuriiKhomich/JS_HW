function getArray() {
    const amount = 12;
    const result = [];

    for (let i = 1; i <= amount; i += 3) {
        result.push([i, i + 1, i + 2]);
    }
    console.log(result);
}
getArray()

