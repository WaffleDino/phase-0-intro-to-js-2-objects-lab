// Write your solution in this file!
let employee = {
    name: 'Jesse',
    streetAddress: '123 Four Street'
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = Object.assign({}, employee, {name: 'Sam', streetAddress: '11 Broadway'});
    return newEmployee;
}
 
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    Object.assign(employee, {name: 'Sam', streetAddress: '12 Broadway'});
    return employee;
}

function deleteFromEmployeeByKey(obj, key, value) {
    const newEmployee = Object.assign({}, employee);
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    delete employee.name;
    return employee;
}