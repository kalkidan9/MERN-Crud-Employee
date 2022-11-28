//employee routes

const express = require("express");

const router = express.Router();

const {
  listEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controller/employeeController");

router.get("/", listEmployee);

router.post("/", createEmployee);

router.put("/:id", updateEmployee);

router.delete("/:id", deleteEmployee);

module.exports = router;
