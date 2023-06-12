const inquirer = require('inquirer');
const mysql = require('mysql2');

require('dotenv').config();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password:'',
        database: 'employee_db',
    },
    console.log(`Connected to the employee database`)
);