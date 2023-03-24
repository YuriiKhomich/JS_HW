const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};

const result = [];

for (const city in citiesAndCountries) {
    result.push(`${city} - это ${citiesAndCountries[city]}`);
}

console.log(result);

// Второй вариант
const result1 = Object.entries(citiesAndCountries).map(([city, country]) => `${city} - это ${country}`);

console.log(result1);