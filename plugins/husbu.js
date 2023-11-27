let handler = async (m, { conn }) => {
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
	conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/random/husbu?apikey=${global.lolkey}`, 'lyosh.jpg', '2023 © © 𝐿yosh', m)
}
handler.help = ['husbu']
handler.tags = ['anime']

handler.command = /^(husbu)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler