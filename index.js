const Discord = require("discord.js");
const PREFIX = "!";
const YTDL = require("ytdl-core");
const antispam = require("discord-anti-spam");
const db = require("quick.db")
const economy = require("discord-eco")
const YouTube = require("simple-youtube-api")
const superagent = require("superagent")
const moment = require("moment")
const fs = require("fs")
var Jimp = require("jimp");
var request = require('request');

const fortnite = require("fortnite.js")
const joueur = new fortnite("249fcf34-1945-43c6-91ce-7232f81958be")

var bot = new Discord.Client();

bot.mutes = require("./mutes.json")

const modrole = "PermsBot";

var client = new Discord.Client();

const youtube = new YouTube("AIzaSyDE684AY4Th50yKvN7lZ9GroJiFvF5yjy8");

const queue = new Map();

function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function roll() {
   return Math.floor(Math.random() * 99999) + 1;
}

var roll = Math.floor(Math.random() * 99999) + 1;

var fortunes = [
    "Oui.",
    "Non.",
    "Sûrment.",
    "Je ne pense pas.",
    "T'es malade ou quoi ? Jamais mec.",
    "Aspèrge",
    "Je sais pas.",
    "Pourquoi tu me demandes ça ?"
];


var servers = {};

bot.on("ready", function () {
        bot.user.setActivity("!help", {url:"https://www.twitch.tv/zelkibot", type: "WATCHING"})
    console.log("Je suis prêt à me rendre sur " + bot.guilds.size + " serveur(s) ! Sous le pseudo de " + bot.user.username + " !");
});

bot.on("guildMemberAdd", (member) => {
    member.guild.channels.find("name", "welcome").send(`Hi ${member.toString()}, and welcome to the Fortnite Community Discord Server ! Have a great time and don't forget to read the rules !`)
    member.addRole(member.guild.roles.find("name", "Member"));
})

bot.on("message", async function(message) {

    if (message.author.equals(bot.user)) return;

    if (message.type === "link") return message.delete()

    if (message.content == "A quoi sert le Sonic Bot ?") {
        message.channel.send("J'ai été créé par Azecko car il s'ennuyait, tu peux faire _help pour savoir à quoi je sers.");
    }

    if (!message.content.startsWith(PREFIX)) return;
    
    if (message.channel.type === "dm") return message.reply("Salut " + message.author.username + ", je suis désolé mais je ne peux pas répondre en MP.");

    var args = message.content.substring(PREFIX.length).split (" ");

    var args2 = message.content.split(" ").slice(1);

    var suffix = args2.join(" ");

    var reason = args2.slice(1).join(" ");

    var user = message.mentions.users.first();

    var guild = message.guild;

    var member = message.member;

    var rolemodo = member.guild.roles.find("name", "Modérateur")

    var rolehelper = member.guild.roles.find("name", "Helper")

    var roleyoutube = member.guild.roles.find("name", "YOUTUBE")
    
    var rolefriend = member.guild.roles.find("name", "AMIGO")

    var rolemute = member.guild.roles.find("name", "Muted")

    var modlog = member.guild.channels.find("name", "mod-log")

    var midlemanrole = member.guild.roles.find("name", "Midleman")

    var regleschannel = member.guild.channels.find("name", "regles")

    var cont = message.content.slice(PREFIX.length).split(" ");

    var args3 = cont.slice(1);
    
    const serverQueue = queue.get(message.guild.id);

    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    switch (args[0].toLowerCase()) {
case "france":
        if (message.channel.id != "432286940092694538") return message.delete();
        if (message.member.roles.find("name", "France")) {
            member.removeRole(member.guild.roles.find("name", "France"))
            member.send("I remove your France role.")
            message.react("❌")
        return;
        }
            member.addRole(member.guild.roles.find("name", "France"))
            message.author.send("You got the France role.");
            message.react("✅")
            break;
            case "belgia":
            if (message.channel.id != "432286940092694538") return message.delete();
            if (message.member.roles.find("name", "Belgia")) {
                member.removeRole(member.guild.roles.find("name", "Belgia"))
                member.send("I remove your Belgia role.")
                message.react("❌")
            return;
            }
            member.addRole(member.guild.roles.find("name", "Belgia"))
            message.author.send("You got the Belgia role.");
            message.react("✅")
            break;
            case "switzerland":
            if (message.channel.id != "432286940092694538") return message.delete();
            if (message.member.roles.find("name", "Switzerland")) {
                member.removeRole(member.guild.roles.find("name", "Switzerland"))
                member.send("I remove your Switzerland role.")
                message.react("❌")
            return;
            }
            member.addRole(member.guild.roles.find("name", "Switzerland"))
            message.author.send("You got the Switzerland role.");
            message.react("✅")
            break;
            case "russia":
            if (message.channel.id != "432286940092694538") return message.delete();
            if (message.member.roles.find("name", "Russia")) {
                member.removeRole(member.guild.roles.find("name", "Russia"))
                member.send("I remove your Russia role.")
                message.react("❌")
            return;
            }
            member.addRole(member.guild.roles.find("name", "Russia"))
            message.author.send("You got the Russia role.");
            message.react("✅")
            break;
            case "germany":
            if (message.channel.id != "432286940092694538") return message.delete();
            if (message.member.roles.find("name", "Germany")) {
                member.removeRole(member.guild.roles.find("name", "Germany"))
                member.send("I remove your Germany role.")
                message.react("❌")
            return;
            }
            member.addRole(member.guild.roles.find("name", "Germany"))
            message.author.send("You got the Germany role.");
            message.react("✅")
            break;
            case "australia":
            if (message.channel.id != "432286940092694538") return message.delete();
            if (message.member.roles.find("name", "Australia")) {
                member.removeRole(member.guild.roles.find("name", "Australia"))
                member.send("I remove your Australia role.")
                message.react("❌")
            return;
            }
            member.addRole(member.guild.roles.find("name", "Australia"))
            message.author.send("You got the Australia role.");
            message.react("✅")
            break;
            case "spain":
            if (message.channel.id != "432286940092694538") return message.delete();
            if (message.member.roles.find("name", "Spain")) {
                member.removeRole(member.guild.roles.find("name", "Spain"))
                member.send("I remove your Spain role.")
                message.react("❌")
            return;
            }
            member.addRole(member.guild.roles.find("name", "Spain"))
            message.author.send("You got the Spain role.");
            message.react("✅")
            break;
            case "brazil":
            if (message.channel.id != "432286940092694538") return message.delete();
            if (message.member.roles.find("name", "Brazil")) {
                member.removeRole(member.guild.roles.find("name", "Brazil"))
                member.send("I remove your Brazil role.")
                message.react("❌")
            return;
            }
            member.addRole(member.guild.roles.find("name", "Brazil"))
            message.author.send("You got the Brazil role.");
            message.react("✅")
            break;
            case "canada":
            if (message.channel.id != "432286940092694538") return message.delete();
            if (message.member.roles.find("name", "Canada")) {
                member.removeRole(member.guild.roles.find("name", "Canada"))
                member.send("I remove your Canada role.")
                message.react("❌")
            return;
            }
            member.addRole(member.guild.roles.find("name", "Canada"))
            message.author.send("You got the Canada role.");
            message.react("✅")
            break;
            case "italia":
            if (message.channel.id != "432286940092694538") return message.delete();
            if (message.member.roles.find("name", "Italia")) {
                member.removeRole(member.guild.roles.find("name", "Italia"))
                member.send("I remove your Italia role.")
                message.react("❌")
            return;
            }
            member.addRole(member.guild.roles.find("name", "Italia"))
            message.author.send("You got the Italia role.");
            message.react("✅")
            break;
        case "unmute":
        if (!message.member.roles.find("name", modrole)) {
                    message.channel.send("You need the `" + modrole + "` role to do this command.");
                return;
                }
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("You don't specify a user to unmute.")
        if (reason.length < 1) return message.reply("You forget the reason.");
        member.removeRole(rolemute)
        message.channel.send("I mute him succefuly.")
        break;
        case "mute":
        if (!message.member.roles.find("name", modrole)) {
            message.channel.send("You need the `" + modrole + "` role to do this command.");
        return;
        }
var member = message.mentions.members.first();
if(!rolemute) return message.channel.send("I dont find a `Muted` role.")
if (message.mentions.users.size < 1) return message.reply("You don't specify a user to mute.")
if (reason.length < 1) return message.reply("You forget the reason.");
member.addRole(rolemute)
        break;
        case "help":
            member.send(`
__***Commands on the bot.***__

__**General**__

**help** : The message you see right now.

__**Fortnite**__
**stats** See a player stats. How to use : !stats <name>
**shop** See the Fortnite shop.

__**Moderation**__
**ban** : Ban a user. How to use : !ban @user <reason>
**kick** : Kick a user. How to use : !kick @user <reason>
**mute** : Mute a user. How to use : !mute @user <time in minute(s)> <reason>
**unmute** : Unmute a user. How to use : !unmute @user
**purge** : Delete some messages. How to use : !purge <number of messages (minimum 2 amd maximum 100).>
            `)
            message.react("✅")
            message.channel.send(member.toString() + " I send you the commands in private !")
            break;
        case "kick":
        if (!message.member.roles.find("name", modrole)) {
            message.channel.send("You need the `" + modrole + "` role to do this command.");
        return;
        }
            if (message.mentions.users.size < 1) return message.reply("You don't specify a user to kick.")
            if (reason.length < 1) return message.reply("You forget the reason.");
            message.guild.member(user).kick();
            break;
        case "ban":
        if (!message.member.roles.find("name", modrole)) {
            message.channel.send("You need the `" + modrole + "` role to do this command.");
        return;
        }
            if (message.mentions.users.size < 1) return message.reply("You don't specify a user to ban.")
            if (reason.length < 1) return message.reply("You forget the reason.");
            message.guild.ban(user, 2);
            break;
        case "purge":
        if (!message.member.roles.find("name", modrole)) {
            message.channel.send("You need the `" + modrole + "` role to do this command.");
        return;
        }
            var messagecount = parseInt(args2.join(" "));
            if (!messagecount) return message.channel.send("Please specify a number.")
            message.channel.bulkDelete(messagecount);
            break;
        case "stats":
        if (!args2.join(" ")) return message.channel.send("Please specify a username.")
        var playerName = args2.join(" ");
        var options = {
            method: "GET",
            url: `https://fortnite.y3n.co/v2/player/${playerName}`,
            headers: {
              'User-Agent': 'nodejs request',
              'X-Key': "aFHHPJr6K2de8pAIARnJ"
            }
          }
          request(options, (error, response, body) => {
            if (!error && response.statusCode == 200) {
              var stats = JSON.parse(body);
              message.channel.send(`Stas of **${playerName}** :

__**General**__

KD : ${stats.br.stats.pc.all.kpd}
Wins : ${stats.br.stats.pc.all.wins}
Kills : ${stats.br.stats.pc.all.kills}
Matchs : ${stats.br.stats.pc.all.matchesPlayed}
Wins pourcent : ${stats.br.stats.pc.all.winRate}
Minutes playing : ${stats.br.stats.pc.all.minutesPlayed}

__**Solos**__

KD : ${stats.br.stats.pc.solo.kpd}
Wins : ${stats.br.stats.pc.solo.wins}
Kills : ${stats.br.stats.pc.solo.kills}
Matchs : ${stats.br.stats.pc.solo.matchesPlayed}
Wins pourcent : ${stats.br.stats.pc.solo.winRate}
Last match : ${stats.br.stats.pc.solo.lastMatch}
Minutes playing : ${stats.br.stats.pc.solo.minutesPlayed}

__**Duos**__

KD : ${stats.br.stats.pc.duo.kpd}
Wins : ${stats.br.stats.pc.duo.wins}
Kills : ${stats.br.stats.pc.duo.kills}
Matchs : ${stats.br.stats.pc.duo.matchesPlayed}
Wins pourcent : ${stats.br.stats.pc.duo.winRate}
Last match : ${stats.br.stats.pc.duo.lastMatch}
Minutes playing : ${stats.br.stats.pc.duo.minutesPlayed}

__**Squads**__

KD : ${stats.br.stats.pc.squad.kpd}
Wins : ${stats.br.stats.pc.squad.wins}
Kills : ${stats.br.stats.pc.squad.kills}
Matchs : ${stats.br.stats.pc.squad.matchesPlayed}
Wins pourcent : ${stats.br.stats.pc.squad.winRate}
Last match : ${stats.br.stats.pc.squad.lastMatch}
Minutes playing : ${stats.br.stats.pc.squad.minutesPlayed}
              `)   
            }
          })
        break;
        case "shop":
        var options = {
            method: "GET",
            url: `https://fortnite.y3n.co/v2/shop`,
            headers: {
              'User-Agent': 'nodejs request',
              'X-Key': "aFHHPJr6K2de8pAIARnJ"
            }
          }
          request(options, (error, response, shop) => {
            if (!error && response.statusCode == 200) {
              shop = JSON.parse(shop);
            }
            message.channel.send("Daily shop :")
            var array1 = shop.br.daily
            array1.forEach(function(element) {
                var embed = new Discord.MessageEmbed()
                .setImage(element.imgURL.split(' ').join('%20'));
                message.channel.send(embed)
            })
            message.channel.send("Weekly shop :")
            var array2 = shop.br.weekly
            array2.forEach(function(element) {
                var embed = new Discord.MessageEmbed()
                .setImage(element.imgURL.split(' ').join('%20'));
                message.channel.send(embed)
            });
        })
        break;
            default:
            message.channel.send("Invalid command.")
    }
});

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.playStream(YTDL(song.url))
    .on('end', () => {
        console.log("End of the song !");
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
    })
    .on('error', error => console.error(error));
dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

var embed = new Discord.MessageEmbed()
.setTimestamp()
.addField("Playing song :", `[${song.title}](${song.url})`)
.setImage(song.thumbnail)
.setColor("0x00ff00")
serverQueue.textChannel.send(embed)
}

bot.login(process.env.TOKEN);
