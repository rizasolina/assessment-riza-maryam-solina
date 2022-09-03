const Position = require('../position');

const PositionDto = (result, index=0) => {
    return Position(
        result.rows[index].id,
        result.rows[index].name,
        result.rows[index].salary,
        result.rows[index].meal_allowance,
        result.rows[index].transport_allowance,
        result.rows[index].family_allowance,
        result.rows[index].created_at,
        result.rows[index].updated_at
    )
}

module.exports = PositionDto;