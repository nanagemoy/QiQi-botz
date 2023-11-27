let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/e2025a3eaaad069c673fe.jpg'
let dann =
`
🗣️ _*Sertakan bukti pembayaran Seperti screenshot riwayat pembayaran*_

NOMOR PAYMENT
DANA = *085852746091*
`
 await conn.sendFile(m.chat, qris, 'payment.jpg', `${dann}`, m)
}

handler.help = ['payment', 'pembayaran']
handler.tags = ['info', 'tools']
handler.command = /^(payment|pembayaran)$/i
module.exports = handler