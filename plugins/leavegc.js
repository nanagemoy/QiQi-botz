let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/d56ab0753ec15a120d83c.jpg', m, { packname: "Godbyee", author: "© 𝐿yosh" })
        await conn.delay(1000)
        await conn.groupLeave(group)
        }
handler.help = ['gc', 'group']
handler.tags = ['group']
handler.customPrefix = /^(Kiku)$/i
handler.command = new RegExp

handler.mods = true

module.exports = handler