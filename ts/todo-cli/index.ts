import inquirer = require("inquirer");
import TaskItem = require("./taskItem");
import addTask from "./addTask";
import removeTask from "./removeTask";
import listTask from "./listTask";

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
            await addTask();
            break;
        case "O'chirish":
            await removeTask();
            break;
        case "Barchasi":
            await listTask();
            break;
        case "Chiqish":
            break;
        default:
            console.log("❌ Xatolik yuz berdi.")
    }
}

main();