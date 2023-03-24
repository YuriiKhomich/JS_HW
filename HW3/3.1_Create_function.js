// Создать функцию - конструктор, которая будет иметь внутри все свойства обьекта emplyee из массива emplyeeArr;
// const employeeObj = new Emploee(employee);
// //   {
// //     id: 0,
// //     name: 'Valeriy',
// //     surname: 'Zhmishenko',
// //     salary: 1000,
// //     workExperience: 10,
// //     isPrivileges: true,
// //     gender: 'male',
// //     }

const employeeArr = [
    {
        id: 0,
        name: 'Valeriy',
        surname: 'Zhmishenko',
        salary: 1000,
        workExperience: 10,
        isPrivileges: true,
        gender: 'male',
    }];

function Employee(employeeArr) {
    this.id = employeeArr.id;
    this.name = employeeArr.name;
    this.surname = employeeArr.surname;
    this.salary = employeeArr.salary;
    this.workExperience = employeeArr.workExperience;
    this.isPrivileges = employeeArr.isPrivileges;
    this.gender = employeeArr.gender;
}

const employeeObj = new Employee(employeeArr[0]);
console.log(employeeObj);

