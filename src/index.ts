import {Client, GatewayIntentBits} from "discord.js" // Cliente base principal que representa al bot, GatewayIntentbits indica qué tipo de eventos recibe el bot
import dotenv from "dotenv" //lectura del archivo .env
dotenv.config(); //Carga variables de entorno .env al entorno process.env


//Creación del cliente
const client = new Client({
    intents: [                              //Son permisos de escucha que declaras al conectar a discord
        GatewayIntentBits.Guilds,           // Escucha eventos generales del servidor (canales, roles, etc)
        GatewayIntentBits.GuildMessages,    // Recibe eventos cuando se envían mensajes en canales.
        GatewayIntentBits.MessageContent    //MessageContent puede leer el texto de los mensajes (sin esto, el bot no ve contenido)
    ]
});

client.on("messageCreate", (msg)=>{
    if(msg.content === "!ping"){
        msg.reply("Pong!")
    }
});
console.log("TOKEN:", process.env.DISCORD_TOKEN?.slice(0, 10) + "...");

client.login(process.env.DISCORD_TOKEN);