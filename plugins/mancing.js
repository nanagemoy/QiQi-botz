let {
	MessageType
} = require('@adiwajshing/baileys');

let wm = global.wm;
let handler = async (m, {
	conn,
	usedPrefix,
	owner
}) => {
	try {
		let lastFishingTime = global.db.data.users[m.sender].lastmancing || 0;
		let timeDiff = Date.now() - lastFishingTime;
		let remainingTime = 180000 - timeDiff; 

		if (global.db.data.users[m.sender].pancingan > 0) {
			if (timeDiff >= 180000) { 
				let kepiting = Math.floor(Math.random() * 5);
				let lobster = Math.floor(Math.random() * 2);
				let udang = Math.floor(Math.random() * 5);
				let cumi = Math.floor(Math.random() * 2);
				let gurita = Math.floor(Math.random() * 3);
				let buntal = Math.floor(Math.random() * 4);
				let dory = Math.floor(Math.random() * 5);
				let orca = Math.floor(Math.random() * 1);
				let lumba = Math.floor(Math.random() * 2);
				let paus = Math.floor(Math.random() * 1);
				let hiu = Math.floor(Math.random() * 0,5);

				let imageUrl = 'https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/mancing.jpg';
				let totalCatch = kepiting + lobster + udang + cumi + gurita + buntal + dory + orca + lumba + paus + hiu;

				let mcng = `•  *YOUR FISHING RESULTS:*
        
◦  🦀 Kepiting: ${kepiting}
◦  🦞 Lobster: ${lobster}
◦  🦐 Udang: ${udang}
◦  🦑 Cumi: ${cumi}
◦  🐙 Gurita: ${gurita}
◦  🐡 Buntal: ${buntal}
◦  🐠 Dory: ${dory}
◦  🐳 Orca: ${orca}
◦  🐬 Lumba: ${lumba}
◦  🐋 Paus: ${paus}
◦  🦈 Hiu: ${hiu}`;


				setTimeout(() => {
					conn.sendFile(m.chat, imageUrl, 'mancing.jpg', mcng, m);
				}, 28000);
				setTimeout(() => {
					m.reply(`The hook is pulled by the fish, and you try to pull it`);
				}, 18000);
				setTimeout(() => {
					m.reply(`Waiting for the fish to be hooked`);
				}, 8000);
				setTimeout(() => {
					m.reply(`You go fishing🎣`);
				}, 0);

				global.db.data.users[m.sender].kepiting += kepiting;
				global.db.data.users[m.sender].lobster += lobster;
				global.db.data.users[m.sender].udang += udang;
				global.db.data.users[m.sender].cumi += cumi;
				global.db.data.users[m.sender].gurita += gurita;
				global.db.data.users[m.sender].buntal += buntal;
				global.db.data.users[m.sender].dory += dory;
				global.db.data.users[m.sender].orca += orca;
				global.db.data.users[m.sender].lumba += lumba;
				global.db.data.users[m.sender].paus += paus;
				global.db.data.users[m.sender].hiu += hiu;
				global.db.data.users[m.sender].lastmancing = Date.now();
				global.db.data.users[m.sender].pancingan = 1;
				global.db.data.users[m.sender].totalPancingan += totalCatch;
			} else {
				let remainingTimeStr = formatTime(remainingTime);
				conn.reply(m.chat, `You're already fishing, wait until ${remainingTimeStr}`, m);
			}
		} else {
			conn.reply(m.chat, '[❗] You don\'t have any fishing gear 🎣', m);
		}
	} catch (e) {
		console.log(e);
		if (owner) {
			let file = require.resolve(__filename);
			for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
				conn.sendMessage(jid, `${file} error\nNo: ${m.sender.split`@`[0]}\nCommand: ${m.text}\n\n*${e}*`, MessageType.text);
			}
		}
	}
};

handler.help = ['mancing'];
handler.tags = ['rpg'];
handler.command = /^(mancing|memancing)$/i;

module.exports = handler;

function formatTime(ms) {
	let seconds = Math.floor(ms / 1000);
	let minutes = Math.floor(seconds / 60);
	let hours = Math.floor(minutes / 60);

	seconds %= 60;
	minutes %= 60;
	hours %= 24;

	let hStr = hours.toString().padStart(2, '0');
	let mStr = minutes.toString().padStart(2, '0');
	let sStr = seconds.toString().padStart(2, '0');

	return `${hStr}:${mStr}:${sStr}`;
}