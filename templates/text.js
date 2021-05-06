const animaction = require("animaction");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", async message => {
  /* Devuelve una respuesta */
  if (message.content === "comun") {
    const answer = animaction.answer();
    message.channel.send(answer);
  }
  /* Devuelve la respuesta en un embed (Discord.JS Version 12)  */
  if (message.content === "embed") {
    const answer = animaction.answer();
    const animaction_embed = new Discord.MessageEmbed()
        .setTitle('Mi respuesta')
        .setDescription(answer)
        .setFooter('Potenciado por animaction');
    message.channel.send(animaction_embed);
  }
});

client.login("BOT_TOKEN");