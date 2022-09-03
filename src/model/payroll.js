const Payroll = (
    id,
    month,
    salary_amount,
    overtime_amount,
    salary_cut,
    total_salary,
    employee_id,
    created_at,
    updated_at
) => {
    return { id, month, salary_amount, overtime_amount, salary_cut, total_salary, employee_id, created_at, updated_at }
}

module.exports = Payroll;