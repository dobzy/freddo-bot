const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating...");

            let {body} = await superagent
            .get(`https://api-to.get-a.life/meme`)
    

            if(!{body}) return message.channel.send("i stupid i not work i nto verry good english")

            let cEmbed = new Discord.RichEmbed()
            .setColor(0x007289DA)
            .setAuthor(`Freddo MEMES!!`, bot.user.displayAvatarURL)
            .setImage(body.url)
            .setTimestamp()
            .setFooter(`Freddo`, bot.user.displayAvatarURL)

            message.channel.send({embed: cEmbed});

            msg.delete();
}


module.exports.config = {
    name: "meme",
    aliases: ["", ""]
}    
