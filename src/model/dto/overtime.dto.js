const Overtime = require('../overtime');

const OvertimeDto = (result, index=0) => {
    return Overtime(
        result.rows[index].id,
        result.rows[index].date,
        result.rows[index].start_time,
        result.rows[index].end_time,
        result.rows[index].employee_id,
        result.rows[index].created_at,
        result.rows[index].updated_at
    )
}

module.exports = OvertimeDto;