import inquirer = require("inquirer");
import TaskItem = require("./taskItem");
import addTask from "./addTask";

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
            console.log("🗑 O'chirildi.")
            break;
        case "Barchasi":
            console.log("Barchasi")
            break;
        case "Chiqish":
            console.log("👋 Xayr.")
            
            break;
        default:
            console.log("❌ Xatolik yuz berdi.")
    }
    await main();
}

main();