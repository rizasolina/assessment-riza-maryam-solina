const DbQuery = require('../config/db-query');
const PositionDto = require('../model/dto/position.dto');

const PositionRepository = (db) => {
    const create = async (payload) => {
        try {
            const result = await db.query(
                DbQuery().INSERT_POSITION,
                [
                    payload.name,
                    payload.salary,
                    payload.meal_allowance,
                    payload.transport_allowance,
                    payload.family_allowance
                ]
            );
            return PositionDto(result);
        } catch (err) {
            return err.message;
        }
    }

    const list = async (keyword) => {
        try {
            const positions = [];
            const result = await db.query(DbQuery().SELECT_POSITION);
            for (let i = 0; i < result.rows.length; i++) {
                positions.push(PositionDto(result, i));
            }
            return positions;
        } catch (err) {
            return err.message;
        }
    }

    const getById = async (id) => {
        try {
            const result = await db.query(DbQuery().SELECT_POSITION_ID, [id]);
            if (result.rowCount > 0) return PositionDto(result);
        } catch (err) {
            return err.message;
        }
    }

    const update = async (payload) => {
        try {
            const idx = await getById(payload.id);
            if (!idx) return 'error';
            const result = await db.query(
                DbQuery().UPDATE_POSITION, [
                    payload.name,
                    payload.salary,
                    payload.meal_allowance,
                    payload.transport_allowance,
                    payload.family_allowance,
                    payload.id
                ]
            );
            return PositionDto(result);
        } catch (err) {
            return err.message;
        }
    }

    const remove = async (id) => {
        try {
            const idx = await getById(id);
            if (!idx) return 'error';
            await db.query(DbQuery().DELETE_POSITION, [id]);
            return `Position with value ID ${id} success deleted!`;
        } catch (err) {
            return err.message;
        }
    }
    
    return {
        create, list, getById, update, remove
    }
}

module.exports = PositionRepository;