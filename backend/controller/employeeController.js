//controllers.js

const Employee = require("../models/employeeModel");

exports.createEmployee = (req, res) => {
  Employee.create(req.body)
    .then((employee) => {
      console.log({ employee });
      res.json({
        message: "Cheers!! You have successfully added employee",
        employee,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your employee list cannot be added",
        error: err.message,
      });
    });
};

exports.listEmployee = (req, res) => {
  Employee.find()
    .then((employee) => {
      console.log({ employee });
      res.json(employee);
    })
    .catch((err) => {
      res.status(404).json({
        message: "There isnt any employee available",
        error: err.message,
      });
    });
};

exports.updateEmployee = (req, res) => {
  Employee.findByIdAndUpdate(req.params.id, req.body)
    .then((employee) => {
      console.log({ employee });
      return res.json({
        message: "Cheers!! You have successfully updated employee",
        employee,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your employee list cannot be updated",
        error: err.message,
      });
    });
};

exports.deleteEmployee = (req, res) => {
  Employee.findByIdAndRemove(req.params.id, req.body)
    .then((employee) => {
      console.log({ employee });
      res.json({
        message: "Cheers!! You have successfully deleted your employee",
        employee,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: "Sorry your employee is not there",
        error: err.message,
      });
    });
};
