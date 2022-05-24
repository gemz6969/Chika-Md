/*
≈ Create By @RIY
≈ Base Ori @DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
zenz: 'https://zenzapis.xyz',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
'https://zenzapis.xyz': 'BagasPrdn',
}

//—————「 Setting Owner 」—————//
global.owner = ['6281575886399','6281575886399','6281575886399']
global.premium = ['6281575886399']
global.ownernomer = '6281575886399'

//—————「 Set Nama Own & Bot 」—————//
global.ownername = '𝗦𐐼ׁ֪𝗹ꬺׁׁׅׅ𐐼𝗦ֺ𝘁o𝗿ᧉׁ֪𓂃'
global.botname = 'Bot 𝗦𐐼ׁ֪𝗹ꬺׁׁׅׅ𐐼𝗦ֺ𝘁o𝗿ᧉׁ֪𓂃'
global.footer = '𝗦𐐼ׁ֪𝗹ꬺׁׁׅׅ𐐼𝗦ֺ𝘁o𝗿ᧉׁ֪𓂃'

//—————「 Set Kebutuhan Button & Kontak 」—————//
global.youtube = 'https://youtube.com/channel/UCClQKwFKgIAiqJPgPpzGjmA'
global.ig = 'https://instagram.com/its.salma._?igshid=YmMyMTA2M2Y='
global.mygc = 'https://chat.whatsapp.com/CRY23lVKmXB7sCMhHmcwVw'
global.myweb = 'https://s.id/RiyAPIs'
global.email = 'salmadiah15@gmail.com'
global.region = 'indonesia'

//—————「 Set Wm 」—————//
global.packname = '© Bot 𝗦𐐼ׁ֪𝗹ꬺׁׁׅׅ𐐼𝗦ֺ𝘁o𝗿ᧉׁ֪𓂃'
global.author = '𝗦𐐼ׁ֪𝗹ꬺׁׁׅׅ𐐼𝗦ֺ𝘁o𝗿ᧉׁ֪𓂃'

//—————「 Set Nama Session 」—————//
global.sessionName = 'chika'

//—————「 Set Limit 」—————//
global.limitawal = {
premium: "Infinity",
free: 15,
}

//—————「 Set Image 」—————//
global.thumb = fs.readFileSync('./image/chika.jpg')
global.veloriy = fs.readFileSync('./image/chika.mp4')

//—————「 Set Image Welcome 」—————//
global.BgWelcLeav = 'https://telegra.ph/file/ca207893ae26d531cd9c6.jpg'

//—————「 Set Random Image Menu 」—————//
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Set Prefix 」—————//
global.prefa = ['','!','.','🐦','🐤','🗿']

//—————「 Set Simbol 」—————//
global.sp = '⭔'

//—————「 Set Message 」—————//
global.mess = {
success: '_Done._',
admin: '_Fitur Khusus Admin Group!_',
botAdmin: '_Bot Harus Menjadi Admin Terlebih Dahulu!_',
owner: '_Fitur Khusus Owner Bot_',
group: '_Fitur Digunakan Hanya Untuk Group!_',
private: '_Fitur Digunakan Hanya Untuk Private Chat!_',
bot: '_Fitur Khusus Pengguna Nomor Bot_',
wait: '_Sedang Di Proses..._',
error: '_Fitur Sedang Error!_',
endLimit: '_Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12_',
}

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
