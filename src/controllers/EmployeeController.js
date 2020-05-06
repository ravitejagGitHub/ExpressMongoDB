const Employee = require('../models/Employee');

const getAll = (req, res, next) => {
    Employee.find()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured!'
            })
        });
};

const getEmployeeById = (req, res, next) => {
    const empId = req.body.employeeID;

    Employee.findById(empId)
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured!'
            })
        });
};

//add new employee
const add = (req, res, next) => {
    const employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })

    employee.save()
        .then(response => {
            res.json({
                message: 'Employee Added Successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured!'
            })
        });
};


//update employee
const update = (req, res, next) => {
    const employeeID = req.body.employeeID
    const employee = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    };

    Employee.findByIdAndUpdate(employeeID, { $set: employee })
        .then(response => {
            res.json({
                message: 'Employee Updated Successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured!'
            })
        });
};


//delete employee
const remove = (req, res, next) => {
    const employeeID = req.body.employeeID
    Employee.findByIdAndDelete(employeeID)
        .then(response => {
            console.log(response);
            res.json({
                message: 'Employee Deleted Successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured!'
            })
        });
};

module.exports = {
    getAll,
    getEmployeeById,
    add,
    update,
    remove
}