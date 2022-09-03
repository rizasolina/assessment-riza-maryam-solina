const express = require('express');
const router = express.Router();

const LeaveRoute = (leaveController) => {
    const { createLeave, listLeave, getLeaveById, updateLeave, removeLeave } = leaveController();

    router.post('/', createLeave);
    router.get('/', listLeave);
    router.get('/:id', getLeaveById);
    router.put('/', updateLeave);
    router.delete('/:id', removeLeave);
    return router;
}

module.exports = LeaveRoute;