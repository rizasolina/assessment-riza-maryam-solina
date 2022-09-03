const express = require('express');
const router = express.Router();

const OvertimeRoute = (overtimeController) => {
    const { createOvertime, listOvertime, getOvertimeById, updateOvertime, removeOvertime } = overtimeController();

    router.post('/', createOvertime);
    router.get('/', listOvertime);
    router.get('/:id', getOvertimeById);
    router.put('/', updateOvertime);
    router.delete('/:id', removeOvertime);
    return router;
}

module.exports = OvertimeRoute;