class Student {
    static listOfStudents = [];
    static budgetStudents = [];
    static nonBudgetStudents = [];

    static getNextId() {
        return this.listOfStudents.length + 1;
    }

    static updateStudentStatus() {
        const sortedStudents = this.listOfStudents.sort(
            (a, b) => b.ratingPoint - a.ratingPoint
        );

        this.budgetStudents = sortedStudents
            .filter((s, i) => i < 5 && s.ratingPoint >= 800)
            .sort((a, b) => b.schoolPoint - a.schoolPoint);

        this.nonBudgetStudents = sortedStudents
            .filter((s, i) => i >= 5 || s.ratingPoint < 800)
            .sort((a, b) => b.ratingPoint - a.ratingPoint);

        for (let i = 0; i < this.nonBudgetStudents.length; i++) {
            const student = this.nonBudgetStudents[i];
            if (
                this.budgetStudents.length < 5 &&
                student.ratingPoint >= this.budgetStudents[this.budgetStudents.length - 1]?.ratingPoint
            ) {
                student.isSelfPayment = false;
                this.budgetStudents.push(student);
                this.nonBudgetStudents.splice(i, 1);
                i--;
            } else {
                student.isSelfPayment = true;
            }
        }
    }

    constructor(enrollee) {
        const { name, surname, ratingPoint, schoolPoint } = enrollee;
        this.id = Student.getNextId();
        this.name = name;
        this.surname = surname;
        this.ratingPoint = ratingPoint;
        this.schoolPoint = schoolPoint;
        this.isSelfPayment = true;

        Student.listOfStudents.push(this);
        Student.updateStudentStatus();
    }
}

const studentArr = [{
    name: 'Сергей',
    surname: 'Войлов',
    ratingPoint: 1000,
    schoolPoint: 1000,
    course: 2,
},
    {
        name: 'Татьяна',
        surname: 'Коваленко',
        ratingPoint: 880,
        schoolPoint: 700,
        course: 1,
    },
    {
        name: 'Анна',
        surname: 'Кугир',
        ratingPoint: 1430,
        schoolPoint: 1200,
        course: 3,
    },
    {
        name: 'Станислав',
        surname: 'Щелоков',
        ratingPoint: 1130,
        schoolPoint: 1060,
        course: 2,
    },
    {
        name: 'Денис',
        surname: 'Хрущ',
        ratingPoint: 1000,
        schoolPoint: 990,
        course: 4,
    },
    {
        name: 'Татьяна',
        surname: 'Капустник',
        ratingPoint: 650,
        schoolPoint: 500,
        course: 3,
    },
    {
        name: 'Максим',
        surname: 'Меженский',
        ratingPoint: 990,
        schoolPoint: 1100,
        course: 1,
    },
    {
        name: 'Денис',
        surname: 'Марченко',
        ratingPoint: 570,
        schoolPoint: 1300,
        course: 4,
    },
    {
        name: 'Антон',
        surname: 'Завадский',
        ratingPoint: 1090,
        schoolPoint: 1010,
        course: 3
    },
    {
        name: 'Игорь',
        surname: 'Куштым',
        ratingPoint: 870,
        schoolPoint: 790,
        course: 1,
    },
    {
        name: 'Инна',
        surname: 'Скакунова',
        ratingPoint: 1560,
        schoolPoint: 200,
        course: 2,
    },
];

studentArr.forEach((enrollee) => new Student(enrollee));
console.log(Student.listOfStudents);
console.log(`Бюджетники: `)
console.log(Student.budgetStudents);
console.log((`Неудачники: `))
console.log(Student.nonBudgetStudents);
