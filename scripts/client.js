$(document).ready( onReady);

class Employee {
  constructor(firstName, lastName, idNumber, jobTitle, annualSalary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.jobTitle = jobTitle;
    this.annualSalary = annualSalary;
  }

  addToDOM() {

  }
}


function onReady() {
  console.log('jq');
  $('#submitForm').on('click', createNewObject)
}

function createNewObject() {

}
