const Discord = require("discord.js")
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args) => {
        let sEmbed = new Discord.RichEmbed()
        .setColor(0x007289DA)
        .setTitle("Server Info")
        .setThumbnail(message.guild.iconURL)
        .addField("**Guild Name:**", `${message.guild.name}`, true)
        .addField("**Guild Owner:**", `${message.guild.owner}`, true)
        .addField("**Member Count**", `${message.guild.memberCount}`, true)
        .addField("**Role Count**", `${message.guild.roles.size}`, true)
        .setTimestamp()
        .setFooter(`Freddo`, bot.user.displayAvatarURL);
        message.channel.send({embed: sEmbed});
}


module.exports.config = {
    name: "serverinfo",
    aliases: ["", ""]
}    
