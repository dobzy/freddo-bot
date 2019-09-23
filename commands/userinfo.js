const Discord = require("discord.js")
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args) => {
    let sEmbed = new Discord.RichEmbed()
    .setColor(0x007289DA)
    .setTitle("User Info")
    .setThumbnail(message.author.displayAvatarURL)
    .setAuthor(`${message.author.username} Info`)
    .addField("**Username:**", `${message.author.username}`, true)
    .addField("**Discriminator:**", `${message.author.discriminator}`, true)
    .addField("**ID:**", `${message.author.id}`, true)
    .addField("**Status:**", `${message.author.presence.status}`, true)
    .addField("**Created At:**", `${message.author.createdAt}`, true)
    .setTimestamp()
    .setFooter(`Freddo`, bot.user.displayAvatarURL);

    message.channel.send({embed: sEmbed});
}


module.exports.config = {
    name: "userinfo",
    aliases: ["", ""]
}    
