import inquirer = require("inquirer");
import axios = require("axios");

const getWeather = async ()=>{

    const {weather} = await inquirer.default.prompt([
        {
            type:"input",
            name:"weather",
            message:"Hududni kiriting: "
        }
    ]);

        try {
            const {data} = await axios.get("https://api.openweathermap.org/data/2.5/weather",{
            params:{
                q:weather,
                appid:"d8d12e2f7eacca10f7badb58ddb76089",
                units:"metric"
            }
        });
        console.log(`Country: ${data.sys.country} - City: ${data.name}`);
        console.log(`Temperatura: ${data.main.temp}🌡`);
        console.log(`Condition: ${data.weather[0].main}`);
        //console.log(data)
        } catch (error) {
            console.log(error);
        }
}
 getWeather();