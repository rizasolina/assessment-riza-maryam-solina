const Response = require('../../utils/response');

const LeaveController = () => {
    const createLeave = async (req, res) => {
        try {
            const payload = req.body;
            const newLeave= await req.service.registerLeave(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newLeave));
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const listLeave = async (req, res) => {
        try {
            const keyword = req.query.q;
            const leaves = await req.service.findAllLeave(keyword);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', leaves));
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const getLeaveById = async (req, res) => {
        try {
            const id = req.params.id;
            const leave = await req.service.findLeaveById(id);
            if (leave) {
                res.json(Response().successMessage(res.statusCode, 'SUCCESS', leave));
            } else {
                res.json(Response().errorMessage('XX', `Leave with value ID ${id} not found`));
            }
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const updateLeave = async (req, res) => {
        try {
            const payload = req.body;
            const newLeave = await req.service.updateLeave(payload);
            if (newLeave != 'error') {
                res.json(Response().successMessage(res.statusCode, 'SUCCESS', newLeave));
            } else {
                res.json(Response().errorMessage('XX', `Leave with value ID ${payload.id} not found`));
            }
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const removeLeave = async (req, res) => {
        try {
            const id = req.params.id;
            const leave = await req.service.removeLeave(id);
            if (leave != 'error') {
                res.json(Response().successMessage(res.statusCode, 'SUCCESS', leave));
            } else {
                res.json(Response().errorMessage('XX', `Leave with value ID ${id} not found!`));
            }
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    return {
        createLeave, listLeave, getLeaveById, updateLeave, removeLeave
    }
}

module.exports = LeaveController;