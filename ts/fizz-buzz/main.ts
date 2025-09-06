import inquirer = require("inquirer");

async function addNumber(){
    const {num} = await inquirer.default.prompt([
        {
            type:"number",
            name:"num",
            message:"Sonni kiriting: "
        }
    ]);
    let result:string="";
    if(num%3===0 && num%5===0){
        result="FizzBuzz";
    } else if(num%3===0){
        result="Fizz";
    } else if(num%5===0){
        result="Buzz";
    }else{
        result="Bu son FizzBuzz son emas."
    }
    console.log(result);
}


async function main(){
    const actions=await inquirer.default.prompt([
        {
            type:"list",
            name:"action",
            message:"Ro'yhat",
            choices:["Son kiritish","Chiqish"]
        }
    ]);
    switch(actions.action){
        case "Son kiritish":
            await addNumber();
            break;
        case "Chiqish":
            break;
    }
}
main();