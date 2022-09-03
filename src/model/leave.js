const Leave = (
    id,
    start_date,
    end_date,
    employee_id,
    created_at,
    updated_at
) => {
    return { id, start_date, end_date, employee_id, created_at, updated_at }
}

module.exports = Leave;