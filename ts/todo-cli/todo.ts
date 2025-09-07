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
        if(tasks.length===0){
             console.log("❌ Vazifa yo'q.");
             return;
        }
        console.log("\n📋 Sizning Vaizifalaringiz:");
        tasks.forEach(task=>{
            console.log(`ID -> ${task.id}. - ${task.task}`);
        })
    }
    // remove task
   async removeTask(){
      if (tasks.length === 0) {
            console.log("❌ Nothing to delete.");
            return;
  }
        const {id} = await inquirer.prompt([
            {
                type:"list",
                name:"id",
                message:"Vazifani tanlang:",
                choices:tasks.map(t=>({name:t.task,value:t.id}))
            }
        ]);
        tasks=tasks.filter((t)=>t.id!==id);
        console.log("🗑️ Vazifa o'chirildi.")
    }
}
export default new Todo();