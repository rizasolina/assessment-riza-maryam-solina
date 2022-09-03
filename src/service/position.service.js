const PositionService = (positionRepository) => {
    const { create, list, getById, update, remove } = positionRepository;
    
    const registerPosition = async (newPosition) => {
        try {
            return await create(newPosition);
        } catch (err) {
            return err.message;
        }
    }

    const findAllPosition = async (keyword) => {
        try {
            return await list(keyword);
        } catch (err) {
            return err.message;
        }
    }

    const findPositionById = async (id) => {
        try {
            return await getById(id);
        } catch (err) {
            return err.message;
        }
    }

    const updatePosition = async (newPosition) => {
        try {
            return await update(newPosition);
        } catch (err) {
            return err.message;
        }
    }

    const removePosition = async (id) => {
        try {
            return await remove(id);
        } catch (err) {
            return err.message;
        }
    }

    return {
        registerPosition, findAllPosition, findPositionById, updatePosition, removePosition
    }
}

module.exports = PositionService;