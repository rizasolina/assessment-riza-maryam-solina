const Employee = require('../employee');

const EmployeeDto = (result, index=0) => {
    let gender = result.rows[index].gender;
    if (gender == true) {
        gender = 'P'
    } else {
        gender = 'L'
    }

    return Employee(
        result.rows[index].id,
        result.rows[index].nip,
        result.rows[index].name,
        gender,
        result.rows[index].pob,
        result.rows[index].dob,
        result.rows[index].email,
        result.rows[index].is_married,
        result.rows[index].address,
        result.rows[index].position_id,
        result.rows[index].created_at,
        result.rows[index].updated_at
    )
}

module.exports = EmployeeDto;