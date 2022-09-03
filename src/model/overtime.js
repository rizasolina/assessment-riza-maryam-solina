const Overtime = (
    id,
    date,
    start_time,
    end_time,
    employee_id,
    created_at,
    updated_at
) => {
    return { id, date, start_time, end_time, employee_id, created_at, updated_at }
}

module.exports = Overtime;