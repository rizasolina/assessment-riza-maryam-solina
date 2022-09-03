const express = require('express');
const router = express.Router();

const EmployeeRoute = (employeeController) => {
    const { createEmployee, listEmployee, getEmployeeById, updateEmployee, removeEmployee } = employeeController();

    router.post('/', createEmployee);
    router.get('/', listEmployee);
    router.get('/:id', getEmployeeById);
    router.put('/', updateEmployee);
    router.delete('/:id', removeEmployee);
    return router;
}

module.exports = EmployeeRoute;