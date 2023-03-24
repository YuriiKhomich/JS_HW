//Создать новый массив на основе emplyeeArr в котором будут содержаться
// те же обьекты, но созданные функцией - конструктором Emploee.
// Новый массив должен содержать имя emplyeeConstructArr.




const employeeArr = [
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
function Employee(employeeArr) {
    this.id = employeeArr.id;
    this.name = employeeArr.name;
    this.surname = employeeArr.surname;
    this.salary = employeeArr.salary;
    this.workExperience = employeeArr.workExperience;
    this.isPrivileges = employeeArr.isPrivileges;
    this.gender = employeeArr.gender;
}

Employee.prototype.getFullInfo = function() {
    let info = '';
    for (const prop in this) {
        if (this.hasOwnProperty(prop)) {
            info += `${prop} - ${this[prop]}, `;
        }
    }
    return info.slice(0, -2);
};

Employee.prototype.setFullInfo = function(obj) {
    for (const prop in obj) {
        if (this.hasOwnProperty(prop)) {
            this[prop] = obj[prop];
        }
    }
};

const employeeObj = new Employee(employeeArr[0]);

console.log(employeeObj.getFullInfo());

employeeObj.setFullInfo({name: 'Вася', salary: 9000});
console.log(employeeObj.getFullInfo());

employeeObj.setFullInfo({name: 'Вася', salary: 9000, email: 'ex@mail.ua'});
console.log(employeeObj.getFullInfo());