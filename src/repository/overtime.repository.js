const DbQuery = require('../config/db-query');
const OvertimeDto = require('../model/dto/overtime.dto');

const OvertimeRepository = (db) => {
    const create = async (payload) => {
        try {
            const result = await db.query(
                DbQuery().INSERT_OVERTIME,
                [
                    payload.date,
                    payload.start_time,
                    payload.end_time,
                    payload.employee_id
                ]
            );
            return OvertimeDto(result);
        } catch (err) {
            return err.message;
        }
    }

    const list = async (keyword) => {
        try {
            const overtimes = [];
            const result = await db.query(DbQuery().SELECT_OVERTIME);
            for (let i = 0; i < result.rows.length; i++) {
                overtimes.push(OvertimeDto(result, i));
            }
            return overtimes;
        } catch (err) {
            return err.message;
        }
    }

    const getById = async (id) => {
        try {
            const result = await db.query(DbQuery().SELECT_OVERTIME_ID, [id]);
            if (result.rowCount > 0) return OvertimeDto(result);
        } catch (err) {
            return err.message;
        }
    }

    const update = async (payload) => {
        try {
            const idx = await getById(payload.id);
            if (!idx) return 'error';
            const result = await db.query(
                DbQuery().UPDATE_OVERTIME, [
                    payload.date,
                    payload.amount,
                    payload.employee_id,
                    payload.id
                ]
            );
            return OvertimeDto(result);
        } catch (err) {
            return err.message;
        }
    }

    const remove = async (id) => {
        try {
            const idx = await getById(id);
            if (!idx) return 'error';
            await db.query(DbQuery().DELETE_OVERTIME, [id]);
            return `Overtime with value ID ${id} success deleted!`;
        } catch (err) {
            return err.message;
        }
    }
    
    return {
        create, list, getById, update, remove
    }
}

module.exports = OvertimeRepository;