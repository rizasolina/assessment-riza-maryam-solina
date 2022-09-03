const Response = require('../../utils/response');

const PayrollController = () => {
    const createPayroll = async (req, res) => {
        try {
            const payload = req.body;
            const newPayroll = await req.service.registerPayroll(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newPayroll));
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const listPayroll = async (req, res) => {
        try {
            const keyword = req.query.q;
            const payrolls = await req.service.findAllPayroll(keyword);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', payrolls));
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const getPayrollById = async (req, res) => {
        try {
            const id = req.params.id;
            const payroll = await req.service.findPayrollById(id);
            if (payroll) {
                res.json(Response().successMessage(res.statusCode, 'SUCCESS', payroll));
            } else {
                res.json(Response().errorMessage('XX', `Payroll with value ID ${id} not found`));
            }
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const updatePayroll = async (req, res) => {
        try {
            const payload = req.body;
            const newPayroll = await req.service.updatePayroll(payload);
            if (newPayroll != 'error') {
                res.json(Response().successMessage(res.statusCode, 'SUCCESS', newPayroll));
            } else {
                res.json(Response().errorMessage('XX', `Payroll with value ID ${payload.id} not found`));
            }
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const removePayroll = async (req, res) => {
        try {
            const id = req.params.id;
            const payroll = await req.service.removePayroll(id);
            if (payroll != 'error') {
                res.json(Response().successMessage(res.statusCode, 'SUCCESS', payroll));
            } else {
                res.json(Response().errorMessage('XX', `Payroll with value ID ${id} not found!`));
            }
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    return {
        createPayroll, listPayroll, getPayrollById, updatePayroll, removePayroll
    }
}

module.exports = PayrollController;