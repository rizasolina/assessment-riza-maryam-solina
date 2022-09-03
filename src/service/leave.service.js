const LeaveService = (leaveRepository) => {
    const { create, list, getById, update, remove } = leaveRepository;
    
    const registerLeave = async (newLeave) => {
        try {
            return await create(newLeave);
        } catch (err) {
            return err.message;
        }
    }

    const findAllLeave = async (keyword) => {
        try {
            return await list(keyword);
        } catch (err) {
            return err.message;
        }
    }

    const findLeaveById = async (id) => {
        try {
            return await getById(id);
        } catch (err) {
            return err.message;
        }
    }

    const updateLeave = async (newLeave) => {
        try {
            return await update(newLeave);
        } catch (err) {
            return err.message;
        }
    }

    const removeLeave = async (id) => {
        try {
            return await remove(id);
        } catch (err) {
            return err.message;
        }
    }

    return {
        registerLeave, findAllLeave, findLeaveById, updateLeave, removeLeave
    }
}

module.exports = LeaveService;