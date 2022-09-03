const express = require('express');
const router = express.Router();

const PositionRoute = (positionController) => {
    const { createPosition, listPosition, getPositionById, updatePosition, removePosition } = positionController();

    router.post('/', createPosition);
    router.get('/', listPosition);
    router.get('/:id', getPositionById);
    router.put('/', updatePosition);
    router.delete('/:id', removePosition);
    return router;
}

module.exports = PositionRoute;