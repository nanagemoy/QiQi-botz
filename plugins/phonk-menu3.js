let fetch = require('node-fetch')
let moment = require('moment-timezone')
let fs = require('fs')
Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = Object.freeze({
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  });
  var replacer = [];
  xStr.map((v, i) => replacer.push({
    original: v,
    convert: yStr[style].split('')[i]
  }));
  var str = text.toLowerCase().split('');
  var output = [];
  str.map(v => {
    const find = replacer.find(x => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
let handler = async (m, { conn, usedPrefix, command, text }) => {
conn.sendMessage(m.chat, { react: { text: '🤖', key: m.key }})
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let user = global.db.data.users[who];
let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
let uptime = clockString(_uptime)
let version = require('../package.json').version
let d = new Date(new Date + 3600000) 
   let locale = 'id' 
let week = d.toLocaleDateString(locale, { weekday: 'long' }) 
let date = new Date().toLocaleDateString('en-US', {timeZone: 'Asia/Jakarta'})
let time = new Date().toLocaleTimeString('en-US', {timeZone: 'Asia/Jakarta', hour: 'numeric', minute: 'numeric', hour12: true})
let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/65c43c76b126a2e1a8409.png");
  let limit = user.premium ? '∞' : user.limit;
  let balance = user.money > 9999999999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.money;
  let level = user.level > 9999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.level;
  let status = user.owner ? 'Owner' : user.premium ? 'Premium' : 'Free User';
  let age = user.age > 4000 ? 'Unknown' : user.age;
  let exp = user.exp > 999999999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.exp;
  let premiumExpired = user.premium ? new Date(user.premiumDate).toDateString() : "Not Found";
  let pp = await (await fetch(ppUrl)).buffer();
  let name = await conn.getName(m.sender)
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let ucpn = `${ucapan()}`
    readmore: readMore
  let menyu = `
乂  *Y O U R - I N F O R M A T I O N*

◦ Name : ${name}
◦ Age : ${age}
◦ Limit : ${limit}
◦ Balance : ${balance}
◦ Exp : ${exp}
◦ Level : ${level}
◦ Status : ${status}
◦ Expired : ${premiumExpired}
◦ Date : ${week}, ${date}
◦ Time : ${time}

乂  *GAMES - MENU*

◦ .asahotak
◦ .attack
◦ .atk
◦ .casino <jumlah>
◦ .cekpoin
◦ .clanwar
◦ .delttt
◦ .hadiahspin
◦ .hunter
◦ .jackpot
◦ .judi <jumlah>
◦ .moneytopoin <jumlah uang>
◦ .pointomoney <jumlah poin>
◦ .siapakahaku
◦ .spin <total poin>
◦ .suit
◦ .suitpvp @tag
◦ .susunkata
◦ .tebakanime
◦ .tebakbendera
◦ .tebakgambar
◦ .tebakgame
◦ .tebakkimia
◦ .tebaklirik
◦ .tekateki
◦ .tictactoe <custom room>
◦ .ttt <custom room>
◦ .wibucek
◦ .ww
◦ .wwpc

乂  *ʀ ᴘ ɢ  ɢ ᴀ ᴍ ᴇ ꜱ*

◦ .ᴏᴘᴇɴ <ᴄʀᴀᴛᴇ>
◦ .ɢᴀᴄʜᴀ <ᴄʀᴀᴛᴇ>
◦ .ᴀᴅᴠᴇɴᴛᴜʀᴇ
◦ .ᴘᴜʟʟ <ᴊᴜᴍʟᴀʜ>
◦ .ᴘᴜʟʟᴀʟʟ
◦ .ᴀᴛᴍ <ᴊᴜᴍʟᴀʜ>
◦ .ᴀᴛᴍᴀʟʟ
◦ .ʙᴀɴꜱᴏꜱ
◦ .ʙᴇʀᴋᴇʙᴏɴ
◦ .ʙᴇʀᴛᴀʀᴜɴɢ @ᴜꜱᴇʀ
◦ .ꜰɪɢʜᴛ @ᴜꜱᴇʀ
◦ .ʙᴜᴀʜ
◦ .ʙᴜɪʟᴅ <ᴀʀɢꜱ>
◦ .ᴜᴘɢʀᴀᴅᴇ <ꜱᴇʟʟ|ʙᴜʏ> <ᴀʀɢꜱ>
◦ .ᴅᴜᴇʟ <@ᴛᴀɢ>
◦ .ᴅᴜɴɢᴇᴏɴ [ɴᴀᴍᴀ ʀᴏᴏᴍ]
◦ .ꜰɪɢʜᴛᴄᴇɴᴛᴀᴜʀ
◦ .ʜᴇᴀʟ
◦ .ɪɴᴠ
◦ .ᴋᴀɴᴅᴀɴɢ
◦ .ᴋᴇʀᴊᴀ
◦ .ᴡᴏʀᴋ
◦ .ᴋɪʟʟ
◦ .ᴋᴏʟᴀᴍ
◦ .ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ <ᴊᴜᴍʟᴀʜ ᴜꜱᴇʀ>
◦ .ᴍᴀʟɪɴɢ
◦ .ᴍᴀɴᴄɪɴɢ
◦ .ᴍᴇᴍʙᴜɴᴜʜ <@ᴛᴀɢ>
◦ .ᴍᴇʀᴀᴄɪᴋ <ᴛʏᴘᴇ>
◦ .ᴍᴇʀᴀᴍᴘᴏᴋ <@ᴛᴀɢ>
◦ .ᴍᴜʟᴜɴɢ
◦ .ɴᴀᴍʙᴀɴɢ
◦ .ɴᴇʙᴀɴɢ
◦ .ɴɢᴇᴡᴇ
◦ .ᴏᴊᴇᴋ
◦ .ᴘᴀꜱᴀʀ <ᴊᴜᴀʟ> <ᴀʀɢꜱ>
◦ .ʀᴇᴘᴀɪʀ
◦ .ʙᴇʀʙᴜʀᴜ
◦ .ʙᴇʀᴅᴀɢᴀɴɢ *@ᴛᴀɢ*
◦ .ɴᴀʙᴜɴɢ <ᴊᴜᴍʟᴀʜ>
◦ .ꜱʜᴏᴘ <ꜱᴇʟʟ|ʙᴜʏ> <ᴀʀɢꜱ>
◦ .ᴛʀᴀɴꜱꜰᴇʀ

乂  *ʀ ᴘ ɢ  ᴀ ʙ ꜱ ᴇ ɴ*

◦ .ᴄᴏᴅᴇꜱʜᴏʀᴛʟɪɴᴋ
◦ .ᴅᴀɪʟʏ
◦ .ɢᴇᴛʜᴀᴅɪᴀʜ
◦ .ʜᴏᴜʀʟʏ
◦ .ᴍᴏɴᴛʜʟʏ
◦ .ᴡᴇᴇᴋʟʏ
◦ .ʏᴇᴀʀʟʏ

乂  *ɢᴀᴍᴇꜱ*

◦ .ᴡᴡ
◦ .ᴡᴡᴘᴄ

`
conn.sendPresenceUpdate("composing", m.chat)
  conn.sendMessage(m.chat, {
text: Styles(menyu),
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `Games Menu 𝐿yosh 🎩`,
thumbnailUrl: ppUrl,
sourceUrl: gcbot,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.customPrefix = /^(menugames|.menugames)$/i
handler.command = new RegExp
handler.register = false;
handler.limit = true;

module.exports = handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Good morning"
  if (time >= 4) {
    res = "Good morning"
  }
  if (time >= 10) {
    res = "Good afternoon"
  }
  if (time >= 15) {
    res = "Good afternoon"
  }
  if (time >= 18) {
    res = "Good night"
  }
  return res
}