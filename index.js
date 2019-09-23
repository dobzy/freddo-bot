const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const superagent = require("superagent")
const bot = new Discord.Client({disableEveryone: true});

require("./util/eventHandler")(bot)

bot.on("ready", async () => {
    console.log('${bot.user.username} is online')
    bot.user.setActivity("Watching over Freddos", {type: "STREAMING"});
})

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)     
        });
    });        
});
bot.login(botconfig.token);