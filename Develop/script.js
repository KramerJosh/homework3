// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  //
  //Initialize the array in the function, but outside of the loop
  //Will clear the array each time button is pressed
  employeesArray = [];
  
  // starts a loop that continues as long as the user doesn't hit cancel on the confirmation
  var promptOpen = true;
  while (promptOpen) {
  
  // gather employee data    
  var firstName = prompt("Enter First Name:");
  var lastName = prompt("Enter Last Name:");
  var salary = prompt("Enter Salary:");

  //check if salary is a number, if not return 0
  if (isNaN(salary)) {
    salary = 0;
  }
  //if salary is a number, convert it to type num
  else if (!isNaN(salary)) {
    salary = Number(salary);
  }
  
  // create a JSON object with each employees data
  const employee = {
    firstName : firstName,
    lastName : lastName,
    salary : salary
  }

  // add each employee object to the array
  employeesArray.push(employee);

  //confirm gives a pop up - cancel will return a false value, assigned to promptOpen
  promptOpen = confirm('Would you like to add another employee?');

  }

  console.log("You entered:", firstName);  
  console.log("You entered:", lastName); 
  console.log("You entered:", salary); 
  console.log('employeesArray', employeesArray);
  // console.log(employeesArray[0])
  // console.log(employeesArray[1])
  // console.log(employeesArray[2])

return employeesArray;
};





// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let totalSalary = 0;
  const numEmployees = employeesArray.length;

  for (const employee of employeesArray) {
    totalSalary += employee.salary;
  }

  // Calculate the average salary
  const averageSalary = totalSalary / numEmployees;
  console.log(`The average employee salary between our ${numEmployees} employee(s) is $${averageSalary.toFixed(2)}`)
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const randomEmployee =
    employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(
    `Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);