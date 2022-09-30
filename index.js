const db = require("./db/connection");

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
    })
}

// Executing function according to user selection
function switch_actions(option){
    switch(option){
        case 'view all employees':
        getAllEmployees();
        break;

        case 'view all departments':
        getAllDepartments();
        break;
    }
}


async function getAllEmployees(){

    let employee_details = await db.query("select * from employees") // query the database
}

startQuestions()


app.list(PORT, () => {
    //console.log(`Server running on port ${PORT}`)
})