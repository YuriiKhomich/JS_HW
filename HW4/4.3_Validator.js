class Validator {
    checkIsEmail(str) {
        const emailRegex = /\S+@\S+\.[a-z]{3,3}$/;
        return emailRegex.test(str);
    }

    checkIsDomain(str) {
        const domainRegex = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,3}$/;
        return domainRegex.test(str);
    }

    checkIsDate(str) {
        const dateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
        if (!dateRegex.test(str)) {
            return false;
        }
        const [day, month, year] = str.split(".");
        const date = new Date(year, month - 1, day);
        return (
            date.getFullYear() == year &&
            date.getMonth() == month - 1 &&
            date.getDate() == day
        );
    }

    checkIsPhone(str) {
        const phoneRegex = /^\+38\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
        return phoneRegex.test(str);
    }
}

const validator = new Validator();

console.log(validator.checkIsEmail("vasyapupkin@gmail.com"));
console.log(validator.checkIsDomain("google.com"));
console.log(validator.checkIsDate("30.11.2011"));
console.log(validator.checkIsPhone("+38 (044) 937-99-92"))