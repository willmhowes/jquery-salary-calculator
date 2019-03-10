$(document).ready( onReady);

let employeeList = [];
let showFooter = false;

class Employee {
	constructor(firstName, lastName, idNumber, jobTitle, annualSalary) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.idNumber = Number(idNumber);
	this.jobTitle = jobTitle;
	this.annualSalary = Number(annualSalary);
	}

	// Methods go here

}

function onReady() {
	console.log('jq');
	$('#submitFormButton').on('click', handleSubmit)
}

function createNewEmployee() {
	console.log('button works');

	let insertionCheck = true;

	for (let employee of employeeList) {
		if ($('#idNumber').val() == employee.idNumber) {
			alert('ID Number is already in use. Please try again.');
			insertionCheck = false;
		}
	}

	if (insertionCheck == true) {
		let newEmployee = new Employee(
			$('#firstName').val(),
			$('#lastName').val(),
			$('#idNumber').val(),
			$('#jobTitle').val(),
			$('#annualSalary').val(),
		)
		employeeList.push(newEmployee);

		$('#firstName').val('');
		$('#lastName').val('');
		$('#idNumber').val('');
		$('#jobTitle').val('');
		$('#annualSalary').val('');
		render();
	}
}

function handleSubmit(event) {
	event.preventDefault(); // prevent page refresh
	createNewEmployee();
}

function removeEmployee() {

}

function render() {
	$('#tableBody').empty();
	$('#monthlyCost').empty();

	// Shows the footer after 5 employees have been added to the array
	if (showFooter == false && employeeList.length > 4) {
		$('#footer').append(`<tr>
		<th>First Name</th>
		<th>Last Name</th>
		<th>ID Num</th>
		<th>Job Title</th>
		<th>Annual Salary</th>
		</tr>`)

		showFooter = true;
	}

	let monthlyCost = 0;
	let $employeeData;

	for (let employee of employeeList) {
		$employeeData = $(`<tr>
		<td>${employee.firstName}</td>
		<td>${employee.lastName}</td>
		<td>${employee.idNumber}</td>
		<td>${employee.jobTitle}</td>
		<td>${employee.annualSalary}</td>
		<td><button>Delete</button></td>
		</tr>`);

		if (Number.isInteger(employee.annualSalary)) {
			monthlyCost += employee.annualSalary / 12;
		}

		$('#tableBody').append($employeeData);
	}

	$('#monthlyCost').append(`Monthly Cost: $${Math.round(monthlyCost * 100) / 100}`);

	if (monthlyCost < 20000) {
		$('#monthlyCost').css('background-color', '#ffffff');
	} else if (monthlyCost > 20000) {
		$('#monthlyCost').css('background-color', 'red');
	}
}
