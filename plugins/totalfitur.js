let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
   let thumb = 'https://telegra.ph/file/8ef3d4e652ad33eb1ad85.png'
 await conn.sendFile(m.chat, thumb, 'fitur.jpg', `_*Total Fitur saat ini: ${totalf} - 847*_`, m)
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
module.exports = handler