<p align="center">
  <a href="https://www.npmjs.com/package/random-anime">
    <img src="https://cdn.discordapp.com/attachments/666573321894232095/690961950527717456/random-anime.png" alt="Random Anime">
  </a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/random-anime"><img src="https://img.shields.io/npm/v/random-anime.svg?maxAge=3600" alt="NPM version" />
  </a>
  <a href="https://www.npmjs.com/package/random-anime"><img src="https://img.shields.io/npm/dt/random-anime.svg?maxAge=3600" alt="NPM downloads" />
   </a>
  </div>
</p>
<h3 align="center"><strong>Obtén imágenes, textos y gifs del tipo anime para comandos de acción, reacción y diversión o para los que quieras, además 100% en español y muy facil de usar.</strong></h3>

## Instalación ⚙
```bash
$ npm install animaction
```

## Usos ✨
### Gifs 😺
#### Verificar que funcione 🔒
```javascript
const animaction = require('animaction')
const wag = animaction.wag()
const dance = animaction.dance()

console.log(dance) /* Obtiene un gif de Wag */
console.log(wag)  /* Obtiene un gif de Dance  */
```

#### En un bot de Discord 🤖
```javascript
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
```
### Texto 😺
#### Verificar que funcione 🔒
```javascript
const animaction = require('animaction')
const answer = animaction.answer()

console.log(answer) /* Devuelve una respuesta aleatoria a una pregunta */
```

#### En un bot de Discord 🤖
```javascript
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
```
### Imagenes 😺
#### Verificar que funcione 🔒
```javascript
const animaction = require('animaction')
const anime = animaction.anime()

console.log(anime) /* Devuelve una imagen al azar de un anime */
```

#### En un bot de Discord 🤖
```javascript
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
```

## Opciones 🧰
### Gifs 😺
**Opción** | **Tipo** | **Descripción** | **Uso**
:---: | --- | --- | ---
wag | Gif | Bate la cola owo | `animaction.wag()`
dance | Gif | Bailemos!! | `animaction.dance()`
### Texto 😺
**Opción** | **Tipo** | **Descripción** | **Uso**
:---: | --- | --- | ---
answer | Texto | Responde a tu pregunta | `animaction.answer()`
### Imagenes 😺
**Opción** | **Tipo** | **Descripción** | **Uso**
:---: | --- | --- | ---
anime | Imagen | Devuelve una imagen al azar de un anime .w. | `animaction.anime()`

## Actualizaciónes ⭐
- Aqui se pondran las actualizaciones generales ^^

## Ayuda extra 🎫
- Puedes encontrar ayuda detallada en el mismo servidor de soporte de mi bot clickeando [aqui](https://discord.gg/QR6xQbTNab)
- Puedes ahorrar trabajo utilizando los archivos en la carpeta templates
- Puedes apoyarme tambien invitando a mi bot [aqui](https://discord.com/oauth2/authorize?client_id=831865259357896755&permissions=8&scope=bot)

## Licensia 🗃
[MIT](https://github.com/KitsuneCode/animaction/blob/main/LICENSE) © KitsuneCode con 🧡
