const DbQuery = require('../config/db-query');
const PayrollDto = require('../model/dto/payroll.dto');

const PayrollRepository = (db) => {
    const create = async (payload) => {
        try {
            const employees = await db.query(DbQuery().SELECT_EMPLOYEE_ID, [payload.employee_id]);
            if(employees.rowCount == 1) {

                const positions = await db.query(DbQuery().SELECT_POSITION_ID, [employees.rows[0].position_id]);           
                if(positions.rowCount == 1) {
                    let salary = Number(positions.rows[0].salary);
                    let mealAllowance = Number(positions.rows[0].meal_allowance);
                    let transportAllowance = Number(positions.rows[0].transport_allowance);
                    let familyAllowance = Number(positions.rows[0].family_allowance);
                    let isMarried = employees.rows[0].is_married;
                    if (isMarried == true) {
                        salaryAmount = salary + mealAllowance + transportAllowance + familyAllowance;
                    } else {
                        salaryAmount = salary + mealAllowance + transportAllowance;
                    }
                    
                    const overtimes = await db.query(DbQuery().SELECT_OVERTIME_EMPLOYEE, [payload.employee_id]);
                    let overtimeAmount = 0;
                    for (let i = 0; i < overtimes.rowCount; i++) {
                        let date = overtimes.rows[i].date;
                        if (date.getMonth()+1 == payload.month) {
                            let startTime = overtimes.rows[i].start_time;
                            let endTime = overtimes.rows[i].end_time;
                            
                            let arrStartTime = startTime.split(':');
                            let arrEndTime = endTime.split(':');
                            let amount = arrEndTime[0] - arrStartTime[0];
                            overtimeAmount += amount;
                        }
                    }          
                    overtimeAmount *= 50000;
                    
                    const leaves = await db.query(DbQuery().SELECT_LEAVE_EMPLOYEE, [payload.employee_id]);
                    let salaryCut = 0;
                    for (let i = 0; i < leaves.rowCount; i++) {
                        let startDate = leaves.rows[i].start_date;
                        if (startDate.getMonth()+1 == payload.month) {
                            let endDate = leaves.rows[i].end_date;
                            let arrStartDate = startDate.getDate();
                            let arrEndDate = endDate.getDate();
                            let amount = arrEndDate - arrStartDate;
                            salaryCut += amount;
                        }
                    }
                    salaryCut *= 200000;

                    const totalSalary = salaryAmount + overtimeAmount - salaryCut;

                    if (payload.month >= 1 && payload.month <=12) {
                        month = payload.month;
                    } else {
                        month = null;
                    }
                    const result = await db.query(
                        DbQuery().INSERT_PAYROLL,
                        [
                            month,
                            salaryAmount,
                            overtimeAmount,
                            salaryCut,
                            totalSalary,
                            payload.employee_id
                        ]
                    );
                    return PayrollDto(result);
                } else {
                    return err.message;
                }
            } else {
                return err.message;
            }
        } catch (err) {
            return err.message;
        }
    }

    const list = async (keyword) => {
        try {
            const payrolls = [];
            const result = await db.query(DbQuery().SELECT_PAYROLL);
            for (let i = 0; i < result.rows.length; i++) {
                payrolls.push(PayrollDto(result, i));
            }
            return payrolls;
        } catch (err) {
            return err.message;
        }
    }

    const getById = async (id) => {
        try {
            const result = await db.query(DbQuery().SELECT_PAYROLL_ID, [id]);
            if (result.rowCount > 0) return PayrollDto(result);
        } catch (err) {
            return err.message;
        }
    }

    const update = async (payload) => {
        try {
            const idx = await getById(payload.id);
            if (!idx) return 'error';
            const result = await db.query(
                DbQuery().UPDATE_PAYROLL, [
                    payload.date,
                    payload.salary_amount,
                    payload.overtime_amount,
                    payload.salary_cut,
                    payload.total_salary,
                    payload.employee_id,
                    payload.id
                ]
            );
            return PayrollDto(result);
        } catch (err) {
            return err.message;
        }
    }

    const remove = async (id) => {
        try {
            const idx = await getById(id);
            if (!idx) return 'error';
            await db.query(DbQuery().DELETE_PAYROLL, [id]);
            return `Payroll with value ID ${id} success deleted!`;
        } catch (err) {
            return err.message;
        }
    }
    
    return {
        create, list, getById, update, remove
    }
}

module.exports = PayrollRepository;