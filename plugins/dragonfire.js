let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return m.reply(`Example: ${usedPrefix}${command} Kemii`)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.betabotz.org/api/ephoto/dragonfire?text=${text}&apikey=${global.btc}`
  conn.sendFile(m.chat, res, 'kemii.jpg', `Nih kak`, m, false)
}
handler.help = ['dragonfire'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(dragonfire)$/i
handler.register = true
handler.limit = true

module.exports = handler