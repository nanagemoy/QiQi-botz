let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return m.reply(`Example: ${usedPrefix}${command} hallo namaku kemii`)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

         let ardi = await fetch(`https://api.yanzbotz.my.id/api/tts/daichi?query=${text}`)
          conn.sendMessage(m.chat, { audio: ardi, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
          
}
handler.help = ['daichi <teks>']
handler.tags = ['TextToSpeech']
handler.command = /^daichi$/i
handler.limit = true
handler.premium = false

module.exports = handler;