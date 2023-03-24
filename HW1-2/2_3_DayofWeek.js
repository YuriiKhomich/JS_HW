const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
function getNameOfDay(lang, day) {
    let dayName = namesOfDays[lang][day - 1];
    console.log(dayName);
}
getNameOfDay('ru', 1);
getNameOfDay('en', 3);
