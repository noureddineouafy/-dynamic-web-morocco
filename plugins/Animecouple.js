import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
 {await m.reply('انتظر لحظة ...\n █▒▒▒▒▒▒▒▒▒ ⌛️❤️‍🩹💔')}
let res = await fetch(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkeysapi}`)
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButton(m.chat, 'done', wm, json.result.female, [['♥ 
dynamic-web-morocco ?♥', `/${command}`]], m)
conn.sendButton(m.chat, 'done', wm, json.result.male, [['♥ 
dynamic-web-morocco ?♥', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(ppcp|tofanimes)$/i
handler.limit = false
export default handler
