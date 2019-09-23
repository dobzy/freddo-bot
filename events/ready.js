const Discord = require("discord.js")


module.exports = bot => { 
    console.log(`${bot.user.username} is ready`)
    bot.user.setActivity(`+help || Music Coming Soon! || Version: 1.3.1`, {type: "STREAMING", url:"https://www.twitch.tv/realdobzy"});
}