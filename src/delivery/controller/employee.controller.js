const Response = require('../../utils/response');

const EmployeeController = () => {
    const createEmployee = async (req, res) => {
        try {
            const payload = req.body;
            const newEmployee = await req.service.registerEmployee(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newEmployee));
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const listEmployee = async (req, res) => {
        try {
            const keyword = req.query.q;
            const employees = await req.service.findAllEmployee(keyword);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', employees));
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const getEmployeeById = async (req, res) => {
        try {
            const id = req.params.id;
            const employee = await req.service.findEmployeeById(id);
            if (employee) {
                res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee));
            } else {
                res.json(Response().errorMessage('XX', `Employee with value ID ${id} not found`));
            }
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const updateEmployee = async (req, res) => {
        try {
            const payload = req.body;
            const newEmployee = await req.service.updateEmployee(payload);
            if (newEmployee != 'error') {
                res.json(Response().successMessage(res.statusCode, 'SUCCESS', newEmployee));
            } else {
                res.json(Response().errorMessage('XX', `Employee with value ID ${payload.id} not found`));
            }
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const removeEmployee = async (req, res) => {
        try {
            const id = req.params.id;
            const employee = await req.service.removeEmployee(id);
            if (employee != 'error') {
                res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee));
            } else {
                res.json(Response().errorMessage('XX', `Employee with value ID ${id} not found!`));
            }
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    return {
        createEmployee, listEmployee, getEmployeeById, updateEmployee, removeEmployee
    }
}

module.exports = EmployeeController;