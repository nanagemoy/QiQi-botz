let fs = require('fs') 
let chalk = require('chalk')
let moment = require('moment-timezone')

// Waktu
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh}:${wibm}:${wibs}`

// Hari Tanggal
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

// Owner
global.owner = [
  ['62895618310604'],
  ['62895618310604'],
  ['62895618310604', 'QiQi 🎩', ' @yahoo.com', true]
] // Put your number here
global.mods = ['62895618310604','62895618310604'] // Moderator
global.prems = ['62895618310604','62895618310604'] // Premium
global.rose = 'Rk-Salsabila';
global.xyro = 'NHFkaiNkLm';
global.btc = 'ArssDaebotsu';
global.xzn = 'pepek';
global.lolkey = 'LyoshGanz';
global.zein = 'zenzkey_c22460242f6e',
global.APIs = {
    // API Prefix
    // name: 'https://website'
    xteam: 'https://api.xteam.xyz',
    lol: 'https://api.lolhuman.xyz',
    males: 'https://malesin.xyz',
    xyro: 'https://api.xyroinee.xyz',
    btc: 'https://api.betabotz.org',
    zein: 'https://api.zahwazein.xyz',
    rose: 'https://api.itsrose.life',
    popcat: 'https://api.popcat.xyz',
    xzn: 'https://xzn.wtf',
    saipul: 'https://saipulanuar.cf'
}
global.APIKeys = {
    // APIKey Here
    // 'https://website': 'apikey'
    'https://api.zahwazein.xyz': 'zenzkey_c22460242f6e',
    'https://api.xteam.xyz': 'cristian9407',
    'https://api.xyroinee.xyz': 'NHFkaiNkLm',
    'https://api.betabotz.org': 'Rizalzllk',
    'https://api.lolhuman.xyz': 'LyoshGanz',
    'https://api.itsrose.life': 'Rk-Salsabila',
    'https://xzn.wtf' : 'RyHar'
}
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'QiQi-Botz 🎩'
  var sticker_author = '© QiQi-Botz '
} else {
  var sticker_name = 'QiQi-Botz 🎩'
  var sticker_author = '© QiQi-Botz '
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Document
global.minety = pickRandom(['application/msword', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'])
global.kiku = 'application/vnd.android.package-archive'

// Database
global.version = '1.1.8'
global.sessionName = 'sessions'
global.gcbot = 'https://chat.whatsapp.com/HnqmcHUn5qyH1bhoC8J0UJ'
global.instagram = 'https://instagram.com'
global.namebot = 'QiQi-Botz Botz'
global.thumb = 'https://telegra.ph/file/eda1e8f37dbb13bb83a89.jpg'
global.thumbnail = 'https://telegra.ph/file/eda1e8f37dbb13bb83a89.jpg'
global.bgWelcome = `https://telegra.ph/file/55d744817dbd8452faf1c.jpg`
global.bgLeave = `https://telegra.ph/file/55d744817dbd8452faf1c.jpg`
global.myfile = fs.readFileSync(`./media/xfile.pdf`)
global.thumb2 = fs.readFileSync('./media/thumbnail.mp4')
global.qris = 'https://i.pinimg.com/564x/8a/12/4c/8a124c8b29d1470a870e0d4e2860432d.jpg'
global.creator = "62895618310604@s.whatsapp.net"
global.nomorown = '62895618310604'

// Sosial Media
global.sig = 'https://wa.me/62895618310604'
global.syt = 'https://youtube.com'
global.sgh = '-'
global.sgc = 'https://chat.whatsapp.com/HnqmcHUn5qyH1bhoC8J0UJ'
global.swa = 'https://wa.me/62895618310604'
global.swb = '-' // Link Discord
global.snh = 'https://nhentai.net/g/365296/' // Link nhentai

// Pembayaran
global.pdana = '~Not Found~'
global.povo = '~Not Found~'
global.pgopay = '~Not Found~'
global.pulsa = '~Not Found~'
global.pulsa2 = '~Not Found~'
global.psaweria = '~Not Found~'
global.ptrakteer = '~Not Found~'
global.psbuzz = '~Not Found~'

// Fake Size
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

global.useMulti = true
global.autoread = false

// Watermark
global.packname = 'QiQi-Botz 🎩'
global.author = '// QiQi-Botz'
global.wm = 'QiQi-Botz 🎩'
global.wm2 = '© QiQi-Botz '
global.bottime = `Time: ${wktuwib}`
global.botdate = `Date: ${week} ${date}\nTime: ${wktuwib}`
global.titlebot = `${global.wm}`
global.danied = 'A K S E S  K A M U  D I  T O L A K!!'
global.packname = 'QiQi-Botz 🎩'
global.author = '© QiQi-Botz '
global.nameown = 'QiQi-Botz '
global.wait = 'Wait a moment... '

// Tampilan
global.htki =  '⬣───「' // Hiasan kiri
global.htka = '」───⬣' // Hiasan kanan
global.htjava = '❃' // Hiasan
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'
global.zt = '*'
global.zc = ''

global.multiplier = 1000 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v =>vv [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})//