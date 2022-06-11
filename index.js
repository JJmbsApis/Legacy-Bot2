const aoijs = require('aoi.js');

const bot = new aoijs.Bot({
  token: process.env['token'],
  prefix: "$getServerVar[Prefix]",
  intents: "all",

    respondOnEdit: {
    commands: true,
    alwaysExecute: false,
    time: 60000,
  }
  
});

bot.status({
 text: "Versão [v0.1]",
 type: "PLAYING", 
 status: "online",
 time: 12
})

bot.status({
 text: "$allMembersCount Usuarios!",
 type: "WATCHING", 
 status: "online",
 time: 12
})

bot.status({
 text: "$allMembersCount users | /help",
 type: "WATCHING", 
 status: "online",
 time: 12
})


bot.onMessage({
  suppressAllErrors: true
})
bot.onInteractionCreate()
bot.onMessageUpdate()


bot.variables({
  Prefix: "-",
  money: "0",
  uptime: "0"
})

bot.readyCommand({
  channel: "",
  code: `$setVar[uptime;$truncate[$divide[$dateStamp;1000]]]`
})

const load = new aoijs.LoadCommands(bot);load.load(bot.cmd, `./Comandos/`)