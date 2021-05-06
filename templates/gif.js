const animaction = require("animaction");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", async message => {
  /* Solo el gif, en este caso un gif de Wag */
  if (message.content === "comun") {
    const wag = animaction.wag();
    message.channel.send(wag);
  }
  /* En un embed (Discord.JS Version 12) en este caso un gif de Dance */
  if (message.content === "embed") {
    const dance = animaction.dance();
    const animaction_embed = new Discord.MessageEmbed()
        .setTitle('Vamos a bailar!!')
        .setImage(dance)
        .setFooter('Potenciado por animaction');
    message.channel.send(animaction_embed);
  }
});

client.login("BOT_TOKEN");