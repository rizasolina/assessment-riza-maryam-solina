const PayrollService = (payrollRepository) => {
    const { create, list, getById, update, remove } = payrollRepository;
    
    const registerPayroll = async (newPayroll) => {
        try {
            return await create(newPayroll);
        } catch (err) {
            return err.message;
        }
    }

    const findAllPayroll = async (keyword) => {
        try {
            return await list(keyword);
        } catch (err) {
            return err.message;
        }
    }

    const findPayrollById = async (id) => {
        try {
            return await getById(id);
        } catch (err) {
            return err.message;
        }
    }

    const updatePayroll = async (newPayroll) => {
        try {
            return await update(newPayroll);
        } catch (err) {
            return err.message;
        }
    }

    const removePayroll = async (id) => {
        try {
            return await remove(id);
        } catch (err) {
            return err.message;
        }
    }

    return {
        registerPayroll, findAllPayroll, findPayrollById, updatePayroll, removePayroll
    }
}

module.exports = PayrollService;