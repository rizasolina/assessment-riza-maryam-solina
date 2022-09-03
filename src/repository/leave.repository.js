const DbQuery = require('../config/db-query');
const LeaveDto = require('../model/dto/leave.dto');

const LeaveRepository = (db) => {
    const create = async (payload) => {
        try {
            const result = await db.query(
                DbQuery().INSERT_LEAVE,
                [
                    payload.start_date,
                    payload.end_date,
                    payload.employee_id
                ]
            );
            return LeaveDto(result);
        } catch (err) {
            return err.message;
        }
    }

    const list = async (keyword) => {
        try {
            const leaves = [];
            const result = await db.query(DbQuery().SELECT_LEAVE);
            for (let i = 0; i < result.rows.length; i++) {
                leaves.push(LeaveDto(result, i));
            }
            return leaves;
        } catch (err) {
            return err.message;
        }
    }

    const getById = async (id) => {
        try {
            const result = await db.query(DbQuery().SELECT_LEAVE_ID, [id]);
            if (result.rowCount > 0) return LeaveDto(result);
        } catch (err) {
            return err.message;
        }
    }

    const update = async (payload) => {
        try {
            const idx = await getById(payload.id);
            if (!idx) return 'error';
            const result = await db.query(
                DbQuery().UPDATE_LEAVE, [
                    payload.date,
                    payload.amount,
                    payload.employee_id,
                    payload.id
                ]
            );
            return LeaveDto(result);
        } catch (err) {
            return err.message;
        }
    }

    const remove = async (id) => {
        try {
            const idx = await getById(id);
            if (!idx) return 'error';
            await db.query(DbQuery().DELETE_LEAVE, [id]);
            return `Leave with value ID ${id} success deleted!`;
        } catch (err) {
            return err.message;
        }
    }
    
    return {
        create, list, getById, update, remove
    }
}

module.exports = LeaveRepository;