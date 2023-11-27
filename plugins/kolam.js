let handler = async (m, { conn, usedPrefix }) => {
         let kepiting = global.db.data.users[m.sender].kepiting 
         let lobster = global.db.data.users[m.sender].lobster
         let udang = global.db.data.users[m.sender].udang 
         let cumi = global.db.data.users[m.sender].cumi 
         let gurita = global.db.data.users[m.sender].gurita 
         let buntal = global.db.data.users[m.sender].buntal 
         let dory = global.db.data.users[m.sender].dory 
         let orca = global.db.data.users[m.sender].orca 
         let lumba = global.db.data.users[m.sender].lumba 
         let paus = global.db.data.users[m.sender].paus
         let hiu = global.db.data.users[m.sender].hiu 
         let pancingan = global.db.data.users[m.sender].pancingan
         let _pancingan = global.db.data.users[m.sender].anakpancingan 
         let dann = `
*Fish Pond*
Kepiting: ${kepiting}
Lobster: ${lobster}
Udang: ${udang}
Cumi: ${cumi}
Gurita: ${gurita}
Buntal: ${buntal}
Dory: ${dory}
Orca: ${orca}
Lumba: ${lumba}
Paus: ${paus}
Hiu: ${hiu}

*Level Pancingan:*
Pancingan: *${pancingan == 0 ? 'Tidak Punya' : '' || pancingan == 1 ? 'Level 1' : '' || pancingan == 2 ? 'Level 2' : '' || pancingan == 3 ? 'Level 3' : '' || pancingan == 4 ? 'Level 4' : '' || pancingan == 5 ? 'Level MAX' : ''}*

╭────────────────
│pancingan ${pancingan == 0 ? 'Tidak Punya' : '' || pancingan > 0 && pancingan < 5 ? `Level *${pancingan}* To level *${pancingan + 1}*\n│Exp *${_pancingan}* -> *${pancingan *10000}*` : '' || pancingan == 5 ? '*Max Level*' : ''}
╰────────────────
`.trim()

conn.reply(m.chat, dann, m)
}

handler.help = ['kolam']
handler.tags = ['rpg']
handler.command = /^(kolam)$/i
handler.limit = true
handler.group = true
module.exports = handler