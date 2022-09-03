const Position = (
    id,
    name,
    salary,
    meal_allowance,
    transport_allowance,
    family_allowance,
    created_at,
    updated_at
) => {
    return { id, name, salary, meal_allowance, transport_allowance, family_allowance, created_at, updated_at }
}

module.exports = Position;