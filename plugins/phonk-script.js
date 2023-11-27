let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
conn.relayMessage(m.chat, {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      amount1000: 30000 * 1000,
      requestFrom: m.sender,
      noteMessage: {
        extendedTextMessage: {
          text: `*Script Botz ini bisa anda beli dengan harga yang sudah di sertakan di atas*

*want to buy source code? please chat owner*
@${creator.split("@")[0]}
`,
          contextInfo: {
            mentionedJid: [creator],
            externalAdReply: {
              showAdAttribution: true
            }
          }
        }
      }
    }
  }, {})
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i
handler.register = false

module.exports = handler

