const Response = require('../../utils/response');

const OvertimeController = () => {
    const createOvertime = async (req, res) => {
        try {
            const payload = req.body;
            const newOvertime = await req.service.registerOvertime(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newOvertime));
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const listOvertime = async (req, res) => {
        try {
            const keyword = req.query.q;
            const overtimes = await req.service.findAllOvertime(keyword);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', overtimes));
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const getOvertimeById = async (req, res) => {
        try {
            const id = req.params.id;
            const overtime = await req.service.findOvertimeById(id);
            if (overtime) {
                res.json(Response().successMessage(res.statusCode, 'SUCCESS', overtime));
            } else {
                res.json(Response().errorMessage('XX', `Overtime with value ID ${id} not found`));
            }        
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const updateOvertime = async (req, res) => {
        try {
            const payload = req.body;
            const newOvertime = await req.service.updateOvertime(payload);
            if (newOvertime != 'error') {
                res.json(Response().successMessage(res.statusCode, 'SUCCESS', newOvertime));
            } else {
                res.json(Response().errorMessage('XX', `Overtime with value ID ${payload.id} not found`));
            }
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const removeOvertime = async (req, res) => {
        try {
            const id = req.params.id;
            const overtime = await req.service.removeOvertime(id);
            if (overtime != 'error') {
                res.json(Response().successMessage(res.statusCode, 'SUCCESS', overtime));
            } else {
                res.json(Response().errorMessage('XX', `Overtime with value ID ${id} not found!`));
            }
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    return {
        createOvertime, listOvertime, getOvertimeById, updateOvertime, removeOvertime
    }
}

module.exports = OvertimeController;