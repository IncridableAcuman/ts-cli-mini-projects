import inquirer = require("inquirer");
import Todo from "./todo";

async function main() {
    const answers = await inquirer.default.prompt([
        {
            type:"list",
            name:"action",
            message:"Nima qilishni xohlaysiz?",
            choices:["Qo'shish","O'chirish","Barchasi","Chiqish"]
        }
    ]);

    switch(answers.action){
        case "Qo'shish":
            await Todo.addTask();
            break;
        case "O'chirish":
            Todo.removeTask()
            break;
        case "Barchasi":
             Todo.listTask();
            break;
        case "Chiqish":
            break;
        default:
            console.log("❌ Xatolik yuz berdi.")
    }
}

main();