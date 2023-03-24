for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0 && i % 3 !== 0) {
        console.log("Fiz");
    } else if (i % 2 !== 0 && i % 3 !== 0) {
        console.log("Buz");
    } else if (i % 3 === 0) {
        console.log("FizBuz");
    }
}