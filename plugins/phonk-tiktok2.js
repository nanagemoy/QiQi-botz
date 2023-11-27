
const fetch = require("node-fetch");

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Masukkan URL!\n\nContoh:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`;
  if (!args[0].match(/tiktok/gi)) throw `URL Tidak Ditemukan!`;
  m.reply("Tunggu sebentar...");  
		const url = args[0];
		const apis = await fetch(`https://skizo.tech/api/tiktok?url=${args[0]}&apikey=${global.xzn}`);
		
var json = await apis.json()
if(json.msg != "success") throw "Error"
var { 
play, 
wmplay, 
region,
title,
duration,
music,
} = json.data
await conn.sendFile(m.chat,play, 'tiktok.mp4', `
• *Deskripsi*: ${title}
\n• *Username*: ${region}
\n• *Durasi*: ${duration} detik`, m)

conn.sendMessage(m.chat, { audio: { url: music }, mimetype: 'audio/mpeg', contextInfo: {
    externalAdReply: {
    title: title,
    body: "",
    thumbnailUrl: thumb,
    sourceUrl: nomorown,
    mediaType: 1,
    showAdAttribution: true,
    renderLargerThumbnail: true
    }}} , { quoted: m })
};
handler.help = ['tiktok']
handler.command = /^(tiktok|tt|tiktokdl|tiktoknowm|dltt)$/i
handler.tags = ['downloader'];
handler.premium = false
handler.limit = 5
module.exports = handler;

/*
const fg = require('api-dylux');
const { tiktokdl, tiktokdlv2, tiktokdlv3 } = require('@bochilteam/scraper');

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0]) {
    conn.sendPresenceUpdate("composing", m.chat)
    throw `*Example:* .tiktok https://vm.tiktok.com/xxxxx`;
  }
  if (!args[0].match(/tiktok/gi)) {
    throw '🐱 Make sure the link is from TikTok';
  }
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  let start = new Date();
  try {
    let p = await fg.tiktok(args[0]);
    let te = `🐱 Fetching: *${new Date() - start} ms*`;
    conn.sendPresenceUpdate("composing", m.chat)
    conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m);
    conn.sendMessage(m.chat, {
      react: {
        text: '✅',
        key: m.key,
      }
    });
  } catch (error) {
    m.reply('Failed :(')
  }
};

handler.help = ['tiktok']
handler.command = /^(tiktok|tt|tiktokdl|tiktoknowm|dltt)$/i
handler.tags = ['downloader'];
handler.limit = true;
handler.group = false;

module.exports = handler;
*/