const DbQuery = () => {
    const INSERT_EMPLOYEE = `INSERT INTO employee (nip,name,gender,pob,dob,email,is_married,address,position_id,created_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,NOW()) RETURNING *`;
    const SELECT_EMPLOYEE = `SELECT * FROM employee ORDER BY id`;
    const SELECT_EMPLOYEE_ID = `SELECT * FROM employee WHERE id=$1`;
    const UPDATE_EMPLOYEE = `UPDATE employee SET nip=$1,name=$2,gender=$3,pob=$4,dob=$5,email=$6,is_married=$7,address=$8,position_id=$9,updated_at=NOW() WHERE id=$10 RETURNING *`;
    const DELETE_EMPLOYEE = `DELETE FROM employee WHERE id=$1`;

    const INSERT_POSITION = `INSERT INTO position (name,salary,meal_allowance,transport_allowance,family_allowance,created_at) VALUES ($1,$2,$3,$4,$5,NOW()) RETURNING *`;
    const SELECT_POSITION = `SELECT * FROM position ORDER BY id`;
    const SELECT_POSITION_ID = `SELECT * FROM position WHERE id=$1`;
    const UPDATE_POSITION = `UPDATE position SET name=$1,salary=$2,meal_allowance=$3,transport_allowance=$4,family_allowance=$5,updated_at=NOW() WHERE id=$6 RETURNING *`;
    const DELETE_POSITION = `DELETE FROM position WHERE id=$1`;

    const INSERT_OVERTIME = `INSERT INTO overtime (date,start_time,end_time,employee_id,created_at) VALUES ($1,$2,$3,$4,NOW()) RETURNING *`;
    const SELECT_OVERTIME = `SELECT * FROM overtime ORDER BY id`;
    const SELECT_OVERTIME_ID = `SELECT * FROM overtime WHERE id=$1`;
    const UPDATE_OVERTIME = `UPDATE overtime SET date=$1,start_time=$2,end_time=$3,employee_id=$4,updated_at=NOW() WHERE id=$5 RETURNING *`;
    const DELETE_OVERTIME = `DELETE FROM overtime WHERE id=$1`;
    const SELECT_OVERTIME_EMPLOYEE = `SELECT * FROM overtime WHERE employee_id=$1`;

    const INSERT_LEAVE = `INSERT INTO leave (start_date,end_date,employee_id,created_at) VALUES ($1,$2,$3,NOW()) RETURNING *`;
    const SELECT_LEAVE = `SELECT * FROM leave ORDER BY id`;
    const SELECT_LEAVE_ID = `SELECT * FROM leave WHERE id=$1`;
    const UPDATE_LEAVE = `UPDATE leave SET start_date=$1,end_date=$2,employee_id=$3,updated_at=NOW() WHERE id=$4 RETURNING *`;
    const DELETE_LEAVE = `DELETE FROM leave WHERE id=$1`;
    const SELECT_LEAVE_EMPLOYEE = `SELECT * FROM leave WHERE employee_id=$1`;

    const INSERT_PAYROLL = `INSERT INTO payroll (month,salary_amount,overtime_amount,salary_cut,total_salary,employee_id,created_at) VALUES ($1,$2,$3,$4,$5,$6,NOW()) RETURNING *`;
    const SELECT_PAYROLL = `SELECT * FROM payroll ORDER BY id`;
    const SELECT_PAYROLL_ID = `SELECT * FROM payroll WHERE id=$1`;
    const UPDATE_PAYROLL= `UPDATE payroll SET month=$1,employee_id=$2,updated_at=NOW() WHERE id=$3 RETURNING *`;
    const DELETE_PAYROLL = `DELETE FROM payroll WHERE id=$1`;

    return {
        INSERT_EMPLOYEE, SELECT_EMPLOYEE, SELECT_EMPLOYEE_ID, UPDATE_EMPLOYEE, DELETE_EMPLOYEE,
        INSERT_POSITION, SELECT_POSITION, SELECT_POSITION_ID, UPDATE_POSITION, DELETE_POSITION,
        INSERT_OVERTIME, SELECT_OVERTIME, SELECT_OVERTIME_ID, UPDATE_OVERTIME, DELETE_OVERTIME, SELECT_OVERTIME_EMPLOYEE,
        INSERT_LEAVE, SELECT_LEAVE, SELECT_LEAVE_ID, UPDATE_LEAVE, DELETE_LEAVE, SELECT_LEAVE_EMPLOYEE,
        INSERT_PAYROLL, SELECT_PAYROLL, SELECT_PAYROLL_ID, UPDATE_PAYROLL, DELETE_PAYROLL
    }
}

module.exports = DbQuery;