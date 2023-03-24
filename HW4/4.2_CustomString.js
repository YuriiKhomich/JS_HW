//Реализуйте класс CustomString, который будет иметь следующие методы: метод reverse(),
// который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
// который параметром принимает строку, а возвращает эту же строку,
// сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной
// первую букву каждого слова этой строки.

class CustomString {
    reverse(str) {
        return str.split("").reverse().join("");
    }

    ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    ucWords(str) {
        return str
            .split(" ")
            .map((word) => this.ucFirst(word))
            .join(" ");
    }
}

const myString = new CustomString();

console.log(myString.reverse("Hasta la vista, baby!"));
console.log(myString.ucFirst("hasta la vista, baby!"));
console.log(myString.ucWords("hasta la vista, baby!"));