const db = require("./db/connection");
const express = require("express");
const inquirer = require("inquirer");

const PORT = process.env.PORT || 3001;
const app = express();


// Express middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Starting Questions 
function startQuestions(){
    inquirer.prompt([{
        type: 'list',
        message: 'choose the operations from below', 
        name: 'options_selected',
        choices: ['view all employees', 'view all departments']
    }]).then(answer => {
        console.log(answer);
        switch_actions(answer.options_selected)
    })
}

// Executing function according to user selection
function switch_actions(option){
    switch(option){
        case 'view all employees':
        console.log(option);
        console.log("inside view all employee option");
        getAllEmployees();
        break;

        case 'view all departments':
        getAllDepartments();
        break;
    }
}


 function getAllEmployees(){

    let employee_details = db.query("select * from employee",(data)=>{
        console.log(data)
    }) // query the database
    // console.log(employee_details)
}

startQuestions()


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})