const Leave = require('../leave');

const LeaveDto = (result, index=0) => {
    return Leave(
        result.rows[index].id,
        result.rows[index].start_date,
        result.rows[index].end_date,
        result.rows[index].employee_id,
        result.rows[index].created_at,
        result.rows[index].updated_at
    )
}

module.exports = LeaveDto;