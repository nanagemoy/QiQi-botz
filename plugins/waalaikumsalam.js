let { sticker } = require('../lib/sticker.js')

let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.customPrefix = /^(assalamualaikum|Salom|salam)/i
handler.command = new RegExp
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu= [

	'https://telegra.ph/file/1a551f133cb1c70e62f0c.png'	
]