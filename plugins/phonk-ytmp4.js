let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) throw '*Example:* .ytmp4 https://www.youtube.com/xxxxxxx'
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let kemii = await fetch(`https://api.lolhuman.xyz/api/ytvideo?apikey=${global.lolkey}&url=${text}`)
  let res = await kemii.json()
  let start = new Date();
  let te = `
⬡ Title: ${res.result.title}
⬡ Duration: ${res.result.duration} seconds
⬡ Views: ${res.result.view}
⬡ Upload: ${res.result.uploader}
⬡ Link: ${text}`;
  conn.sendFile(m.chat, res.result.link.link, 'yutube.mp4', te, m)
}
handler.help = ['ytmp4']
handler.tags = ['downloader']
handler.command = ['ytmp4', 'ytv']
module.exports = handler