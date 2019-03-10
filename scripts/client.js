$(document).ready( onReady);

let employeeList = [];

class Employee {
  constructor(firstName, lastName, idNumber, jobTitle, annualSalary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.jobTitle = jobTitle;
    this.annualSalary = annualSalary;
    // this.caclulation = methodForCalculation();
  }

  // Methods go here

}


function onReady() {
  console.log('jq');
  $('#submitFormButton').on('click', handleSubmit)
}

function createNewObject() {
  console.log('button works');

  let employee = new Employee (
    $('#firstName').val(),
    $('#lastName').val(),
    $('#idNumber').val(),
    $('#jobTitle').val(),
    $('#annualSalary').val(),
  )
}

function handleSubmit(event) {
  event.preventDefault(); // prevent page refresh
  createNewObject();
}
