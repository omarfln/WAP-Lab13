const { updateStudent } = require("../controller/studentController");

const students = [
    { id: 644518, name: "Anna Johns", program: "Compro" },
    { id: 641359, name: "Tom Jerry", program: "Compro" },
    { id: 620898, name: "Kerry Jerry", program: "MBA" },
];

class Student {
    constructor(id, name, program) {
        this.id = id;
        this.name = name;
        this.program = program;
    }
    create() {
        students.push(this);
    }

    static getById(id) {
        return students.find(s => s.id === id);
    }

    static getAll() {
        return students;
    }

    static removebyId(id) {
        id = parseInt(id);
        let index = students.findIndex(s => s.id === id);
        let deletedStudent
        if (index > -1) {
            deletedStudent = students[index];
            students.splice(index, 1);
        }
        return deletedStudent;
    }
    static update(id, name, program, newID) {
        let index = students.findIndex(s=> s.id ===id);
        let uupdatedStudent;
        if (index > -1) {
            uupdatedStudent = students[index];
            if (newID){
                students[index].id = parseInt(newID);
            }
            if (name){
                students[index].name = name;
            }
            if (program){
                students[index].program = program;
            }
        }
        return uupdatedStudent;
     }
    static filterByProgram(program) {
        let stByProg = students.filter( s=>s.program === program );
        return stByProg;
     }
}
module.exports = Student;