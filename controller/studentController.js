const Student = require("../model/student");

let controller = {
    getStudents: function (req, res, next) {
        res.status(200).json(Student.getAll());
    },
    getStudentById: function (req, res, next) {
        let id = parseInt(req.params.id);
        let student = Student.getById(id);
        if (student) {
            res.status(200).json(student);
        }
        else {
            res.status(404).json({ message: "student not found." });
        }
    },
    createStudent: function (req, res, next) {
        let { id, name, program } = req.body;
        if (id && name && program) {
            let newStudent = new Student(parseInt(id), name, program);
            newStudent.create();
            res.status(201).json(newStudent);
        } else {
            res.status(400).json({ message: "provide all data." });
        }
    },
    deleteStudent: function (req, res, next) {
        let id = parseInt(req.params.id);
        console.log(id, typeof id);
        let deletedStudent = Student.removebyId(id);
        if (!deletedStudent) {
            res.status(404).json({ message: "student not found" });
        }
        else {
            res.status(200).json(deletedStudent);
        }
    },
    updateStudent: function (req, res, next) {
        let { id, name, program } = req.body;
        let newID = id;
        console.log(newID );
        if (newID || name || program ) {
            let id = parseInt(req.params.id);
            let updatedStudent = Student.update(id, name, program, newID);

            if (updatedStudent){
                res.status(200).json(updatedStudent);
            }
            else{
                res.status(404).json({message: "Student not found!"});
            }
        } else {
            res.status(400).json({ message: "provide some data for update!" });
        }
     },
    filterByProgram: function (req, res, next) {
        const program = req.query.program;
        let stByProg = Student.filterByProgram(program);
        if (program){
            if (stByProg && stByProg.length >=1){
                res.status(200).json(stByProg);
            }
            else{
                res.status(400).json({message: `Unable to find any student assigned to ${program} program`})
            }
        }
        else{
            res.status(400).json({message:"Please provide a program"})
        }
     },
};

module.exports = controller;