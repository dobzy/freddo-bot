const Discord = require("discord.js")
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Loading...");
    
    let rEmbed = new Discord.RichEmbed()
        .setColor(0x007289DA)
        .addField(`Avatar URL:`, "Here is your Avatar URL!")
        .setImage(`${message.author.displayAvatarURL}`)
        .setFooter(`Freddo`, bot.user.displayAvatarURL)

        message.channel.send({embed: rEmbed})

        msg.delete();
}


module.exports.config = {
    name: "avatar",
    aliases: ["pfp", ""]
}    
