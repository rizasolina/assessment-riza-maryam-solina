const OvertimeService = (overtimeRepository) => {
    const { create, list, getById, update, remove } = overtimeRepository;
    
    const registerOvertime = async (newOvertime) => {
        try {
            return await create(newOvertime);
        } catch (err) {
            return err.message;
        }
    }

    const findAllOvertime = async (keyword) => {
        try {
            return await list(keyword);
        } catch (err) {
            return err.message;
        }
    }

    const findOvertimeById = async (id) => {
        try {
            return await getById(id);
        } catch (err) {
            return err.message;
        }
    }

    const updateOvertime = async (newOvertime) => {
        try {
            return await update(newOvertime);
        } catch (err) {
            return err.message;
        }
    }

    const removeOvertime = async (id) => {
        try {
            return await remove(id);
        } catch (err) {
            return err.message;
        }
    }

    return {
        registerOvertime, findAllOvertime, findOvertimeById, updateOvertime, removeOvertime
    }
}

module.exports = OvertimeService;