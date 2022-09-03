const express = require('express');
const router = express.Router();

const PayrollRoute = (payrollController) => {
    const { createPayroll, listPayroll, getPayrollById, updatePayroll, removePayroll } = payrollController();

    router.post('/', createPayroll);
    router.get('/', listPayroll);
    router.get('/:id', getPayrollById);
    router.put('/', updatePayroll);
    router.delete('/:id', removePayroll);
    return router;
}

module.exports = PayrollRoute;