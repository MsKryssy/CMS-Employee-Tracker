// dependency requirements - no dotenv needed because I do not have a password set up.
const inquirer = require('inquirer');
const mysql = require('mysql2');

// the employee tracker logo that's needed and acquired from the package.json file
const logo = require('asciiart-logo');
const config = require('./package.json');
console.log(logo(config).render());

// needed to connect to the sql databases
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employee_db',
}, 
() => {
  console.log('Connected to the employee database');
});

// questions needed to navigate thru the database for the user, placed into an array
const questions = [{
  type: 'list',
  name: 'what',
  message: 'What Would You Like To Do?',
  choices: [
    'View All Roles',
    'View All Departments',
    'View All Employees',
    'Add New Department',
    'Add New Role',
    'Add New Employee',
    'Update Employee Role',
    'Update Manager',
    'Remove Employee',
    'Exit',
  ],
}];

// functionality to start the Employee Tracker application using switch statements to make the code a little cleaner
function runEmployeeTracker() {
// this prompts the user with its list of questions 
  inquirer.prompt(questions).then((answer) => {
    switch (answer.what) {
      case 'View All Roles':
        viewAllRoles();
        break;
      case 'View All Departments':
        viewAllDepartments();
        break;
      case 'View All Employees':
        viewAllEmployees();
        break;
      case 'Add New Department':
        addDepartment();
        break;
      case 'Add New Role':
        addRole();
        break;
      case 'Add New Employee':
        addEmployee();
        break;
      case 'Update Employee Role':
        updateRole();
        break;
      case 'Update Manager':
        updateManager();
        break;
      case 'Remove Employee':
        removeEmployee();
        break;
      case 'Exit':
        console.log('You have exited Employee Tracker, goodbye!');
        process.exit();
      default:
        console.log('Invalid option. Please try again.');
        runEmployeeTracker();
        break;
    }
  });
}

// this function executes the sql query and results handling
function performQuery(sql, successMessage, errorMessage) {
  connection.query(sql, (err, results) => {
    if (err) {
      console.log(errorMessage);
// Prints the error message for further debugging if needed.
      console.log(err); 
    } else {
      console.table(results);
      console.log(successMessage);
    }
    runEmployeeTracker();
  });
}

// function used for viewing all of the departments
function viewAllDepartments() {
  const sql = 'SELECT * FROM departments';
  performQuery(sql, 'Viewing All Departments', 'Failed to View Departments');
}

// function used for viewing all roles
function viewAllRoles() {
  const sql = `SELECT role.id, role.title, role.salary, department.name AS department 
              FROM role
              JOIN department ON role.department_id = department.id`;
  performQuery(sql, 'Viewing All Roles', 'Failed to View Roles');
}

// function used to view all of the employees
function viewAllEmployees() {
  const sql = `SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name,
              CONCAT(e.first_name, ' ', e.last_name) AS Manager
              FROM employee
              INNER JOIN role ON role.id = employee.role_id
              INNER JOIN department ON department.id = role.department_id
              LEFT JOIN employee e ON employee.manager_id = e.id;`;
  performQuery(sql, 'Viewing All Employees', 'Failed to View Employees');
}

runEmployeeTracker();