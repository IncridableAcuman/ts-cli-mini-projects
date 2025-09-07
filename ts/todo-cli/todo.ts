import  TaskItem  from './taskItem';
import inquirer from "inquirer";

let tasks:TaskItem[]=[];
let counterId:number=1;
 class Todo{
    // vazifa qo'shish | add task
    async addTask(){
        const {task} = await inquirer.prompt([
            {
                type:"input",
                name:"task",
                message:"Vazifa qo'shish"
            }
        ]);
        tasks.push({id:counterId++,task});
        console.log("✅ Qo'shildi.");
    } 
    // list tasks
     listTask(){
        tasks.forEach(task=>{
            console.log(`${task.id} ${task.task}`);
        })
    }
    // remove task
    removeTask(){
        console.log(tasks.filter(task=>task.id!==counterId));
    }
}
export default new Todo();