import inquirer = require("inquirer");

async function main() {
    const answers=await inquirer.default.prompt([
       {
        type:"number",
        name:"num1",
        message:"Birinchi sonni kiriting: "
       } ,
       {
        type:"list",
        name:"Amal",
        message:"Amalni tanlang: ",
        choices:["+","-","*","/"]
       },
       {
        type:"number",
        name:"num2",
        message:"Ikkinchi sonni kiriting: "
       } 
    ]);

    let result:number=0;

    switch(answers.Amal){
        case "+":
            result=answers.num1 + answers.num2;
            break;
        case "*":
            result=answers.num1 * answers.num2;
            break;
        case "-":
            result=answers.num1-answers.num2;
            break;
        case "/":
            if(answers.num2===0){
                console.log("❌ Nolga bo'lib bo'lmaydi");
                return;
            }
            result=answers.num1*1./answers.num2;
            break;
    }
    console.log(`Natija: ${answers.num1} ${answers.Amal} ${answers.num2} = ${result}`);
}
main();