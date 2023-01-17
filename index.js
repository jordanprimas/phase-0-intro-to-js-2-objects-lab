const employee = {
    name: "Jordan", 
    streetAdress: "southWestStreet",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({},employee,{[key]: value})
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
return employee
}

function deleteFromEmployeeByKey(employee, key, value) {
    var newEmp =  Object.assign({},employee)
  delete newEmp[key]
  return newEmp
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
        delete employee[key]
        return employee
}
