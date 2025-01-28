function updateEmployee(employee, ...obj){
    employee.role=obj[0]
}
const employee = {
    name: 'John',
    role: 'Developer',
    age:20
}
updateEmployee(employee,"manager")
console.log(employee)