import  TaskItem  from './taskItem';
import inquirer from "inquirer";

export default async function addTask() {
  let tasks:TaskItem[]=[];
  let counterId:number=1;
      const {task} = await inquirer.prompt([
        {
            type:"input",
            name:"task",
            message:"Vazifa qo'shish"
        }
      ]); 
      tasks.push({
        id: counterId++, task,
      }); 
      console.log("✅ Qo'shildi.");
    }
