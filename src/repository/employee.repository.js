const DbQuery = require('../config/db-query');
const EmployeeDto = require('../model/dto/employee.dto');

const EmployeeRepository = (db) => {
    const create = async (payload) => {
        try {
            const result = await db.query(
                DbQuery().INSERT_EMPLOYEE,
                [
                    payload.nip,
                    payload.name,
                    payload.gender,
                    payload.pob,
                    payload.dob,
                    payload.email,
                    payload.is_married,
                    payload.address,
                    payload.position_id
                ]
            );
            return EmployeeDto(result);
        } catch (err) {
            return err.message;
        }
    }

    const list = async (keyword) => {
        try {
            const employees = [];
            const result = await db.query(DbQuery().SELECT_EMPLOYEE);
            for (let i = 0; i < result.rows.length; i++) {
                employees.push(EmployeeDto(result, i));
            }
            return employees;
        } catch (err) {
            return err.message;
        }
    }

    const getById = async (id) => {
        try {
            const result = await db.query(DbQuery().SELECT_EMPLOYEE_ID, [id]);
            if (result.rowCount > 0) return EmployeeDto(result);
        } catch (err) {
            return err.message;
        }
    }

    const update = async (payload) => {
        try {
            const idx = await getById(payload.id);
            if (!idx) return 'error';
            const result = await db.query(
                DbQuery().UPDATE_EMPLOYEE, [
                    payload.nip,
                    payload.name,
                    payload.gender,
                    payload.pob,
                    payload.dob,
                    payload.email,
                    payload.is_married,
                    payload.address,
                    payload.position_id,
                    payload.id
                ]
            );
            return EmployeeDto(result);
        } catch (err) {
            return err.message;
        }
    }

    const remove = async (id) => {
        try {
            const idx = await getById(id);
            if (!idx) return 'error';
            await db.query(DbQuery().DELETE_EMPLOYEE, [id]);
            return `Employee with value ID ${id} success deleted!`;
        } catch (err) {
            return err.message;
        }
    }
    
    return {
        create, list, getById, update, remove
    }
}

module.exports = EmployeeRepository;