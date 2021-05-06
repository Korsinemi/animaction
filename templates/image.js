const animaction = require("animaction");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", async message => {
  /* Solo la imagen al azar de un anime */
  if (message.content === "comun") {
    const anime = animaction.anime();
    message.channel.send(anime);
  }
  /* En un embed (Discord.JS Version 12) devuelve la imagen al azar de un anime */
  if (message.content === "embed") {
    const anime = animaction.anime();
    const animaction_embed = new Discord.MessageEmbed()
        .setTitle('Imagen de un anime')
        .setImage(anime)
        .setFooter('Potenciado por animaction');
    message.channel.send(animaction_embed);
  }
});

client.login("BOT_TOKEN");