// Write your solution in this file!
const employee = {
    name: "Sam",
    address: "14 Apple Blvd",
}

console.log(employee)


/*
function updateEmployeeWithKeyAndvalue (obj, key, value) {
 return{
    ...obj,
    [key] = value}


    console.log(obj)


}

updateEmployeeWithKeyAndvalue(Sam, age, "26")
*/
function updateEmployeeWithKeyAndValue ( employee, key, value) {
    return{
        ...employee,
        [key]: value}
    }
console.log(updateEmployeeWithKeyAndValue (employee, "name", "Alex"))


function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
   employee[key] = value;
   return employee;
}

function deleteFromEmployeeByKey (employee, key){
  const newInfo= {...employee};
    delete newInfo[key];
    return newInfo
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
        return employee;
  }