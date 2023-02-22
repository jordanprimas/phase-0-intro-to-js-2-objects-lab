// Write your solution in this file!
const employee = {
    name: "Cashew",
    streetAddress: "1555 SW Street",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {... employee }
    newEmployee[key] = value
    return newEmployee
    }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = {... employee}
    delete updatedEmployee [key]
    return updatedEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee [key]
    return employee
}