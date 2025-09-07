import TaskItem from "./taskItem";

export default async function listTask(){
    let tasks:TaskItem[]=[];
        tasks.forEach(task=>{
            console.log(task)
        });
    
}