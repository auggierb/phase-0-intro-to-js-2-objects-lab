// Write your solution in this file!
const employee = {
    name: '',
    streetAddress: ''
}
 function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]: value })
 }
 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
     return Object.assign(employee, {[key]: value })
    
 }
 function deleteFromEmployeeByKey(employee, key){
     const newEmployee = Object.assign({}, employee)
     delete newEmployee[key]
     return newEmployee
 }
 function destructivelyDeleteFromEmployeeByKey(employee, key){
    const newEmployee = Object.assign(employee)
    delete newEmployee[key]
    return newEmployee
 }
      
    
 