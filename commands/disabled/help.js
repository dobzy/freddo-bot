const Discord = require("discord.js")
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args) => {
    let cEmbed = new Discord.RichEmbed()
            .setColor(0x007289DA)
            .setTitle(":white_check_mark: **Check https://hastebin.com/terolanuza.sql for a list of commands**")

            message.channel.send({embed: cEmbed});
}
          

module.exports.config = {
    name: "help",
    aliases: ["", ""]
} 
