const emplyeeArr = [
    {
        id: 1,
        name: 'Денис',
        surname: 'Хрущ',
        salary: 1010,
        workExperience: 10, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 2,
        name: 'Сергей',
        surname: 'Войлов',
        salary: 1200,
        workExperience: 12, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 3,
        name: 'Татьяна',
        surname: 'Коваленко',
        salary: 480,
        workExperience: 3, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 4,
        name: 'Анна',
        surname: 'Кугир',
        salary: 2430,
        workExperience: 20, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'female'
    },
    {
        id: 5,
        name: 'Татьяна',
        surname: 'Капустник',
        salary: 3150,
        workExperience: 30, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 6,
        name: 'Станислав',
        surname: 'Щелоков',
        salary: 1730,
        workExperience: 15, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 7,
        name: 'Денис',
        surname: 'Марченко',
        salary: 5730,
        workExperience: 45, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'male'
    },
    {
        id: 8,
        name: 'Максим',
        surname: 'Меженский',
        salary: 4190,
        workExperience: 39, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 9,
        name: 'Антон',
        surname: 'Завадский',
        salary: 790,
        workExperience: 7, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 10,
        name: 'Инна',
        surname: 'Скакунова',
        salary: 5260,
        workExperience: 49, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 11,
        name: 'Игорь',
        surname: 'Куштым',
        salary: 300,
        workExperience: 1, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
];

class Cart {
    constructor() {
        this.htmlElement = document.createElement('div')
        document.body.appendChild(this.htmlElement)
    }
}

class Emplyee {
    constructor(cart, item) {
        this.id = item.id
        this.name = item.name
        this.surname = item.surname
        this.salary = item.salary
        this.workExperience = item.workExperience
        this.isPrivileges = item.isPrivileges
        this.gender = item.gender
        this.htmlElement = document.createElement('div')
        this.htmlElementText = document.createElement('p')
        this.htmlElementText.innerText = `${this.surname} ${this.name}`
        this.htmlElement.appendChild(this.htmlElementText)
        cart.htmlElement.appendChild(this.htmlElement)
    }
}
let cart = new Cart()
//cart.emplyee = emplyeeArr.map(item => new Emplyee(cart, item))

// Фильтрация по привелегиям:
//const privilegedEmployees = emplyeeArr.filter(emp => emp.isPrivileges);
//cart.emplyee = privilegedEmployees.map(item => new Emplyee(cart, item));

//Фильтрация по salary <>:
//const SalaryEmployees = emplyeeArr.filter(emp => emp.salary >= 3000);
//cart.emplyee = SalaryEmployees.map(item => new Emplyee(cart, item));

//Фильтрация по Gender:
//const GenderEmployees = emplyeeArr.filter(emp => emp.gender === 'female');
//cart.emplyee = GenderEmployees.map(item => new Emplyee(cart, item));

//Сортировка по зарплате по возрастанию:
//const sortedBySalary = emplyeeArr.sort((a, b) => a.salary - b.salary);
//cart.emplyee = sortedBySalary.map(item => new Emplyee(cart, item));

//Сортировка по зарплате по убыванию:
//const sortedBySalary = emplyeeArr.sort((a, b) => b.salary - a.salary);
//cart.emplyee = sortedBySalary.map(item => new Emplyee(cart, item));

//Сортировка по Имени, Фамилии, Имя Фамилия:

//const sortedByName = emplyeeArr.sort((a, b) => a.name.localeCompare(b.name));
//cart.emplyee = sortedByName.map(item => new Emplyee(cart, item));

//const sortedBySurname = emplyeeArr.sort((a, b) => a.surname.localeCompare(b.surname));
//cart.emplyee = sortedBySurname.map(item => new Emplyee(cart, item));

//const sortedByNameAndSurname = emplyeeArr.sort((a, b) =>
//    (a.surname + a.name).localeCompare(b.surname + b.name));
//cart.emplyee = sortedByNameAndSurname.map(item => new Emplyee(cart, item));

//Сортировка по стажу работы (workExperience):

const sortedByExperience = emplyeeArr.sort((a, b) => b.workExperience - a.workExperience);
cart.emplyee = sortedByExperience.map(item => new Emplyee(cart, item));
