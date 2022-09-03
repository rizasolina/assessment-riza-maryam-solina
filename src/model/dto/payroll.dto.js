const Payroll = require('../payroll');

const PayrollDto = (result, index=0) => {
    let resultMonth = result.rows[index].month;
    const arrMonth = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember'
    ]
    let month = 0;
    for (let i = 0; i < resultMonth; i++) {
        month = arrMonth[i];
    }
    return Payroll(
        result.rows[index].id,
        month,
        result.rows[index].salary_amount,
        result.rows[index].overtime_amount,
        result.rows[index].salary_cut,
        result.rows[index].total_salary,
        result.rows[index].employee_id,
        result.rows[index].created_at,
        result.rows[index].updated_at
    )
}

module.exports = PayrollDto;