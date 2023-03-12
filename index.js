// Write your solution in this file!
const employee = { name: "Sam",
streetAddress: "11 Broadway"

}

function updateEmployeeWithKeyAndValue(employee,name,value){
   const newobj = {...employee};
    newobj[name]= value;
    return newobj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,name, value){
    employee[name] = value;
    return employee;
 }
 function deleteFromEmployeeByKey(employee,name,value){
    const newemp = {employee};
     newemp[name]= value;
     delete newemp.name;
     return newemp;}

function destructivelyDeleteFromEmployeeByKey(employee,name,value){
         employee[name]= value;
         delete employee.name;
         return employee}
     