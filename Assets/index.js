//create command app
const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require ("mysql2")

function menu() {
    

inquirer
  .prompt([
  
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'choice',
      choices: ['view department', 'view roles', 'view employees', "add department", "add role", "add employee", "update employee role"],
    },
  ])
  .then((data) => {
   if (data.choice === "view department") {
    view_department()
   }else if (data.choice === "view roles") {
    view_roles()
   }else if (data.choice === "view employees") {
    view_employees()
   }else if (data.choice === "add department") {
    add_department()
   }else if (data.choice == "add role") {
    add_role()
   }else if (data.choice === "add employee") {
    add_employee()
   }else if (data.choice === "update employee role") {
    
   }
  })};
function view_department() {
  db.query("SELECT*FROM department",function(error,data){
    console.log(error)
    console.table(data)
    menu()
  })  
}
function view_roles() {
    db.query("SELECT*FROM role",function(error,data){
      console.log(error)
      console.table(data)
      menu()
    })  
  }
  function view_employees() {
    db.query("SELECT*FROM employee",function(error,data){
      console.log(error)
      console.table(data)
      menu()
    })  
  }
  function add_department() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is thre department name?',
            name: 'department',
           
          }, 
    ])
    .then((data) => {
        db.query("INSERT INTO department (name) VALUES (?)",[data.department],function(error,data){
            console.log(error)
            console.table(data)
            menu()
          })    
    })
  }
  function add_role() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the role title?',
            name: 'title',
           
          }, 
          {
            type: 'input',
            message: 'What is the role salary?',
            name: 'salary',
           
          },
          {
            type: 'input',
            message: 'What is your department id does the role belong to?',
            name: 'id',
           
          },
    ])
    .then((data) => {
        db.query("INSERT INTO role (title,salary,department_id) VALUES (?,?,?)",[data.title,data.salary,data.id],function(error,data){
            console.log(error)
            console.table(data)
            menu()
          })    
    })
  }
  function add_employee() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: 'Who are you?',
        name: 'employee',
      }
      .then((data) => {
        db.query("INSERT INTO employee (fir) VALUES (?,?,?)",[data.title,data.salary,data.id],function(error,data){
            console.log(error)
            console.table(data)
            menu()
          })    
    })

    ])
  }

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'password',
      database: 'manage_db'
    },
    console.log(`Connected to the  database.`)
  );
  menu()