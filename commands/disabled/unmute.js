const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {
// check if the command caller has permission to use the command
if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.reply("*You do not have permission to use this command*");

if(!message.guild.me.hasPermission(["MANAGE_ROLES", "MANAGE_MESSAGES"])) return message.reply("You have not gave me the right permissions to do this :cry:")

//define the reason and unmutee
let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!mutee) return message.reply("**Please specify a user to unmute!**");

let reason = args.slice(1).join(" ");
if(!reason) reason = "*No reason given.*"

//define mute role and if mute role doesnt exist then send a message
let muterole = message.guild.roles.find(x => x.name === "Muted")
if(!muterole) return message.channel.send("He is not muted though!")

//remove role to the mentioned user and also send the user a dm explaining why they were unmuted
mutee.removeRole(muterole.id).then(() => {
    message.delete()
    message.channel.send(`**${mutee.user.username}** *has been unmuted!*`)
})

//send an embed to the logs channel
let embed = new Discord.RichEmbed()
.setColor(0x007289DA)
.setAuthor(`${message.guild.name} Logs`, message.guild.IconURL)
.addField("Action:", "Unmute", true)
.addField("Staff:", message.author.username, true)
.addField("User:", mutee.user.username, true)
.setTimestamp()
.setFooter("Freddo", `${bot.user.displayAvatarURL}`)

let sChannel = message.guild.channels.find(c => c.name === `logs`)
sChannel.send(embed)
}


module.exports.config = {
    name: "unmute",
    description: "Unmutes a member in the Discord",
    usage: "!unmute <user> <reason>",
    accessableby: "Helpers",
    aliases: ["", ""]
}