//HW part 3. Task 3.2 - 3.6

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
//Создать новый массив на основе emplyeeArr в котором будут содержаться те же обьекты,
// но созданные функцией - конструктором Emploee.

function Employee(employeeArr) {
    this.id = employeeArr.id;
    this.name = employeeArr.name;
    this.surname = employeeArr.surname;
    this.salary = employeeArr.salary;
    this.workExperience = employeeArr.workExperience;
    this.isPrivileges = employeeArr.isPrivileges;
    this.gender = employeeArr.gender;
}
function createEmployeesFromArr(arr) {
    return arr.map(employeeObj => new Employee(employeeObj));
}
//Создать функцию которая вернет массив со всеми полными именами каждого employee,
// содержащегося в emplyeeConstructArr;

Employee.prototype.getFullName = function() {
    return this.surname + ' ' + this.name;
};

const emplyeeConstructArr = createEmployeesFromArr(employeeArr);
console.log(emplyeeConstructArr);

const getFullNamesFromArr = (arr) => {
    return arr.map(employee => employee.getFullName());
};
console.log(getFullNamesFromArr(emplyeeConstructArr));

//Создать функцию которая вернет среднее значение зарплаты всех employee
const getMiddleSalary = (arr) => {
    let totalSalary = 0;
    for (let i = 0; i < arr.length; i++) {
        totalSalary += arr[i].salary;
    }
    return totalSalary / arr.length;
};
let result = getMiddleSalary(emplyeeConstructArr)
console.log((`Средняя зарплата по палате: ${result}`));

//Создать функцию которая выберет наугад работника из массива

const getRandomEmployee = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};
console.log(`Случайный персонаж:`)
console.log(getRandomEmployee(emplyeeConstructArr));

