// Добавить функции - конструктору метод (помним про prototype): getFullName
// который вернет полное имя начиная с фамилии в виде строки
// employeeObj.getFullName() // 'Zhmishenko Valeriy'; //

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

Employee.prototype.getFullName = function() {
    return `${this.surname} ${this.name}`;
}

const employeeObj = new Employee(employeeArr[0]);
console.log(employeeObj.getFullName());