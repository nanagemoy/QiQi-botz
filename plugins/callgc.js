let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return m.reply(`Example: ${usedPrefix}${command} hallo namaku kemii`)
conn.relayMessage(m.chat,{
 scheduledCallCreationMessage: {
 callType: 2,
 scheduledTimestampMs:  Date.now(),
 title: `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${text}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`, 
}
}, {})
}
handler.help = ['callgc <teks>']
handler.tags = ['tools']
handler.command = /^callgc$/i
handler.owner = true

module.exports = handler;