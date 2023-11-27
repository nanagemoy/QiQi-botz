let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/234eba0793f12a7fc4938.jpg'
let dann =
`
🤖 JASA PASANG BOTZ

- TINGGAL SCAN QR
- TINGGAL MASUKIN CODE QR
- GW SETTINGING 


📦 KAMI MENJUAL 〽️ [VIP]

📂 SCRIPT  HW 20 -22
📂 SCRIPT  CAMPURAN v5 - v9
📂 SCRIPT  BUG NEW
📂 SCRIPT  PHUSKONTAK
📂 SCRIPT  JPM
📂 SCRIPT NO SCAN
📂 SCRIPT VERIFY GMAIL
📂 SCRIPT BANNED
📂 SCRIPT CPANEL


📦 JUAL PANEL RUN 

🎭 RAM 2 GB CPU 60% 4K BULAN
🎭 RAM 3 GB CPU 80% 6K BULAN
🎭 RAM 4 GB CPU 100% 8k BULAN
🎭 RAM 5 GB CPU 130% 10k BULAN
🎭 RAM 6 GB CPU 160% 13k BULAN
🎭 RAM & CPU UNLIMITED 15K BULAN

〽️INFO! YG MINAT BISA CHAT
https://wa.me/62895618310604
`
 await conn.sendFile(m.chat, qris, 'payment.jpg', `${dann}`, m)
}

handler.help = ['list','panel']
handler.tags = ['info', 'tools']
handler.command = /^(panel|list)$/i
module.exports = handler