const Employee = (
    id,
    nip,
    name,
    gender,
    pob,
    dob,
    email,
    is_married,
    address,
    position_id,
    created_at,
    updated_at
) => {
    return { id, nip, name, gender, pob, dob, email, is_married, address, position_id, created_at, updated_at }
}

module.exports = Employee;