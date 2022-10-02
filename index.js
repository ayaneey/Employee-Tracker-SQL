const db = require("./db/connection");
const express = require("express");
const inquirer = require("inquirer");

const consoletable = require("console.table");
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Starting Questions
function startQuestions() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "choose the operations from below",
        name: "options_selected",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "Add a department",
          "Add a role",
         "Add an employee",

        ],
      },
    ])
    .then((answer) => {
      console.log(answer);
      switch_actions(answer.options_selected);
    });
}

// Executing function according to user selection
function switch_actions(option) {
  switch (option) {
    case "view all departments":
      getAllDepartments();
      break;

    case "view all roles":
      console.log(option);
      console.log("view all role options");
      getAllRoles();
      break;

    case "view all employees":
      console.log(option);
      console.log("view all employees");
      getAllEmployees();
      break;

    case "Add a department":
      departmentQuestion();
      break;

    case "Add a role":
      roleQuestions();
      break;

    case "Add an employee":
      employeeQuestions();
      break;
  }
}

// Generating user input for department
function departmentQuestion() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Add the name of the department",
        name: "department_name",
      },
    ])
    .then((answer) => {
      addDepartment(answer.department_name);
    });
}

// Function is inserting data into the department table
function addDepartment(dept_name) {
console.log(dept_name);
  db.query(
    `INSERT INTO department (name) VALUES ("${dept_name}")`, // added "" so it returns a string instead
    (err, data) => {
    if(err) console.log(err);
      console.log(data);
      startQuestions();
    }
  );
}

// Generating user input for employee
function employeeQuestions(){
    inquirer.prompt([
        {
            type: "input",
            message: "Add the first name of the employee",
            name: "emp_firstName",
        },
        {
            type: "input",
            message: "Add the last name of the employee",
            name: "emp_lastName",
        },
        {
            type: "input",
            message: "Add the role of the employee",
            name: "emp_role",
        },
        {
            type: "input",
            message: "Add the manager id of the employee",
            name: "emp_manager",
        }
    ]).then((answer) => {
        addEmployee(answer.emp_firstName, answer.emp_lastName, answer.emp_role, answer.emp_manager);
    })
}

// Function inserting data into the employee table
function addEmployee(first_name, last_name, role_id, manager_id){
db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${first_name}", "${last_name}", ${role_id}, ${manager_id})`,(err, data) => {
    if(err) console.log(err);
    console.log(data);
    startQuestions();
}
);
}

// Generating user input for role
function roleQuestions(){
inquirer.prompt([
    {
        type: "input",
        message: "Add the name of the role",
        name: "role_name",
    },
    {
        type: "input",
        message: "Add the salary",
        name: "role_salary",
    },
    {
        type: "input",
        message: "Add the department id",
        name: "department_id",
    }
]).then((answer) => {
    addRole(answer.role_name, answer.role_salary, answer.department_id);
}
)}

// Function inserting data into the role table
function addRole(title, salary, department_id){
    db.query(`INSERT INTO role (title, salary, department_id) VALUES ("${title}", ${salary}, ${department_id})`, (err, data) => {
        if(err) console.log(err);
        console.log(data);
        startQuestions();
    });
}

/* ---------------- retrieving department data ---------------- */
function getAllDepartments() {
  let department_details = db.query("select * from department", (err, data) => {
    console.log(data);
    console.table(data);
    startQuestions();
  }); // query the database
}

/* ---------------- retrieving role data ---------------- */
function getAllRoles() {
  let role_details = db.query("select * from role", (err, data) => {
    console.log(data);
    console.table(data);
    startQuestions();
  }); // query the database
}

/* ---------------- retrieving employee data ---------------- */
function getAllEmployees() {
  let employee_details = db.query("select * from employee", (err, data) => {
    // console.log(table)
    console.table(data);
    startQuestions(); // recalling the same function
  }); // query the database
  // console.log(employee_details)
}

startQuestions();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
