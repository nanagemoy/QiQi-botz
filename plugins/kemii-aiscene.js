let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Send/Reply Images with the caption *.aiscene*'
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let media = await q.download()
  let url = await uploadImage(media)
  let hasil = await (await fetch(`https://skizo.tech/api/aiscene?url=${url}&apikey=${global.xzn}`)).buffer()
  await conn.sendFile(m.chat, hasil, '', '🐱 Successfully converted', m)
}

handler.help = ['aiscene']
handler.tags = ['convert']
handler.premium = false
handler.command = /^(aiscene)$/i
handler.register = true
handler.limit = true
handler.private = false

module.exports = handler