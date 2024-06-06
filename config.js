const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_44_06_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDkwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkzLFxuICAgICAgICA0MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDY2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDcwLFxuICAgICAgICAyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDE5LFxuICAgICAgICA3NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDY3LFxuICAgICAgICA5LFxuICAgICAgICA3OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDc4LFxuICAgICAgICA2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICA0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgODYsXG4gICAgICAgIDExLFxuICAgICAgICAyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICA2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MixcbiAgICAgICAgNzEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDczLFxuICAgICAgICA0NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDYwLFxuICAgICAgICA0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYWitCWmNvSEdoazdHdnBWMldkNUpTbkFBQzBvNDJNT0RRYjVmbXdpYlBJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJySU9KTWJuN1NtT1NySUVjUHRLV3BnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY0NGIxZmU0LTc1NTQtNDZiOS1hYzIxLWU1MmJmZTc1YTJmNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMyxcbiAgICAgIDQzLFxuICAgICAgNDIsXG4gICAgICAyMDQsXG4gICAgICA3MyxcbiAgICAgIDg3LFxuICAgICAgNTksXG4gICAgICAyMzIsXG4gICAgICAxNTUsXG4gICAgICAxNyxcbiAgICAgIDUyLFxuICAgICAgMTYwLFxuICAgICAgMTQwLFxuICAgICAgMjE2LFxuICAgICAgMzYsXG4gICAgICA3NSxcbiAgICAgIDIwMCxcbiAgICAgIDExOCxcbiAgICAgIDM3LFxuICAgICAgMTMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkzLFxuICAgICAgODYsXG4gICAgICAxNTQsXG4gICAgICA4MCxcbiAgICAgIDE0NixcbiAgICAgIDMxLFxuICAgICAgMjA4LFxuICAgICAgNTUsXG4gICAgICAyMzMsXG4gICAgICAxNzMsXG4gICAgICAxMjIsXG4gICAgICA0LFxuICAgICAgMTMsXG4gICAgICAxOTgsXG4gICAgICA4MyxcbiAgICAgIDMzLFxuICAgICAgNjEsXG4gICAgICAxNDcsXG4gICAgICA3NyxcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVFMUhTSFRRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQxMTMwNzY5OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTkzMzkwNjc2NDIwMDg6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmEweWJVRkVQcnFoN01HR0FvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYeXR3M0FUT3hIcDVZdmplZlduOHZUQUxrM2MrSW1VMjRrbXR5S3dsa21zPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRBTUJmRkVDZFYxa1NiMTQzUEF3bllnZ1RJbjNacmQrUytDeHNRM0tSbStMeFVaS1dNcW5Pa04zT0hYQTdJQWNLQlBLR2hyQytQb2VFTEVSL05yV0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVUcnJHYThUQ0tvaFdyeXc2K25zRGQydEZvOXdKK2JqTnZHUktlMG55NGpXR0lNaFVhMXBKOWdQZG5meWJVRDJoS2R1UFptb0JwYjhvMDhCKytJTkN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDExMzA3Njk6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc2OTU4NzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGT3JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZPci5qc29uIjogIntcImtleURhdGFcIjpcInJoYVhvWDA5eEVnTUFjMFdBcHUwM05tTXczM3hPWk9WN014UjlVMENmUTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDUyOTExMCxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw2XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTQ1OTU0NTkyMjhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
