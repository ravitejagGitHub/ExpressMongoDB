const express = require("express");
const router = express.Router();

const EmployeeController = require("../controllers/EmployeeController");

router.get('/', EmployeeController.getAll);
router.post('/show', EmployeeController.getEmployeeById);
router.post('/add', EmployeeController.add);
router.put('/update', EmployeeController.update);
router.delete('/delete', EmployeeController.remove);

module.exports = router;