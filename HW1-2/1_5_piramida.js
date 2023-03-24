function buildPyramid(rows) {
    const symbol = '#';
    const spaces = '-';

    for (let i = 1; i <= rows; i++) {
        let pyramidRow = '';
        const spacesCount = rows - i;
        const symbolCount = (i * 2) - 1;
        for (let j = 0; j < spacesCount; j++) {
            pyramidRow += spaces;
        }
        for (let j = 0; j < symbolCount; j++) {
            pyramidRow += symbol;
        }
        for (let j = 0; j < spacesCount; j++) {
            pyramidRow += spaces;
        }
        console.log(pyramidRow);
    }
}
buildPyramid(8);
