const {cmd , commands} = require('../command')
const fg = require("api-dylux")
const yts = require("yt-search")

cmd({
    pattern: "song",
    desc: "downloded song.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(lq) return reply("please give me url or title")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

  
let desc = 
 *mega bot song downloded*

title: ${data.title}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views:${data.views}

  MADE IN GOLDEN MEGA
  
await conn.sendMesgage(from{image:{url: data.thumbnail}, caption:desc},{quoted:mek});

  //downloded audio
let down = await fg.yta(url)
let downloadUrl = down.dl_url

  
//send audio + document massage
await conn.sendMessage(from,{audio: {url:downloadUr}.mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUr}.mimetype:"audio/mpeg",filename:data.title + ".mp3",cation:"MADE BY  GOLDEN MEGA"},{quoted:mek})



    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//==========video-di===========

cmd({
    pattern: "video",
    desc: "downloded video.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(lq) return reply("please give me url or title")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

  
let desc = 
 *mega bot video downloded*

title: ${data.title}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views:${data.views}

  MADE IN GOLDEN MEGA 
  
await conn.sendMesgage(from{image:{url: data.thumbnail}, caption:desc},{quoted:mek});

  //downloded video
let down = await fg.ytv(url)
let downloadUrl = down.dl_url

  
//send video + document massage
await conn.sendMessage(from,{video: {url:downloadUr}.mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUr}.mimetype:"video/mp4",filename:data.title + ".mp4",cation:"MADE BY  GOLDEN MEGA"},{quoted:mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
