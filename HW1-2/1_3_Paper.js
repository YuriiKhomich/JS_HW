const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
let totalpaper = consumptionPerWeek * weeksAmount;
let packs = 0
while (totalpaper > 0) {
    totalpaper -= sheetsInReamPaper;
    packs++;
}
console.log(`На ${weeksAmount} недель, понадобиться ${packs} пачек бумаг.`)