import inquirer = require("inquirer");
let state:boolean=false;
async function todoList() {
    
    const tasks = await inquirer.default.prompt([
        {
            type:"list",
            name:"todo",
            message:"Vazifalar",
            choices:["Vazifa qo'shish","Vazifalar"]
        },
    ]);

    const addTask = await inquirer.default.prompt([
        {
            type:"input",
            name:"add",
            message:"Vazifani kiriting: "
        }
    ])

    const taskList = await inquirer.default.prompt([
        {
            type:"list",
            name:"Tasks",
            message:"Vazifalar",
            choices:[result]
        }
    ]);


    let result:string="";

    switch(tasks.todo){
        case "Vazifa qo'shish":
            state=true;
            result=addTask.add;
            break;
        case "Vazifalar":
            return arrayList.length;
            break;
        default:
            console.log("Xatolik yuzaga keldi.")
            break;
    }
    arrayList.push(result);
    arrayList.map(choice=>{
        console.log(choice)
    })
}

todoList();