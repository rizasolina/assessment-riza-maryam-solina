const Response = require('../../utils/response');

const PositionController = () => {
    const createPosition = async (req, res) => {
        try {
            const payload = req.body;
            const newPosition = await req.service.registerPosition(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newPosition));
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const listPosition = async (req, res) => {
        try {
            const keyword = req.query.q;
            const positions = await req.service.findAllPosition(keyword);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', positions));
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const getPositionById = async (req, res) => {
        try {
            const id = req.params.id;
            const position = await req.service.findPositionById(id);
            if (position) {
                res.json(Response().successMessage(res.statusCode, 'SUCCESS', position));
            } else {
                res.json(Response().errorMessage('XX', `Position with value ID ${id} not found`));
            }
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const updatePosition = async (req, res) => {
        try {
            const payload = req.body;
            const newPosition = await req.service.updatePosition(payload);
            if (newPosition != 'error') {
                res.json(Response().successMessage(res.statusCode, 'SUCCESS', newPosition));
            } else {
                res.json(Response().errorMessage('XX', `Position with value ID ${payload.id} not found`));
            }
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const removePosition = async (req, res) => {
        try {
            const id = req.params.id;
            const position = await req.service.removePosition(id);
            if (position != 'error') {
                res.json(Response().successMessage(res.statusCode, 'SUCCESS', position));
            } else {
                res.json(Response().errorMessage('XX', `Position with value ID ${id} not found!`));
            }
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    return {
        createPosition, listPosition, getPositionById, updatePosition, removePosition
    }
}

module.exports = PositionController;