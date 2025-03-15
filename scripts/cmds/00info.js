module.exports = {
  config: {
    name: "info",
    aliases: ["info", "adinfo"],
    version: "2.0",
    author: "BaYjid",
    role: 0,
    shortDescription: {
      en: "GET FULL DETAILS ABOUT THE BOT ADMIN."
    },
    longDescription: {
      en: "SEE ADMIN'S SOCIAL MEDIA, CONTACT INFO, AND PROFESSIONAL DETAILS IN A STYLIZED FORMAT."
    },
    category: "INFO",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ api, event }) {
    try {
      // 🌟 ADMIN INFO MESSAGE
      let message = `╭━━━━━━━━━━━━━━━━╮
   🌟 𝗔𝗗𝗠𝗜𝗡 𝗜𝗡𝗙𝗢 🌟
 ╰━━━━━━━━━━━━━━━━╯

      📌 𝗡𝗔𝗠𝗘: 𝗔𝗛𝗠𝗘𝗗 𝗕𝗔𝗬𝗝𝗜𝗗  
      🌍 𝗖𝗢𝗨𝗡𝗧𝗥𝗬: 𝗕𝗔𝗡𝗚𝗟𝗔𝗗𝗘𝗦𝗛  
      💼 𝗣𝗥𝗢𝗙𝗘𝗦𝗦𝗜𝗢𝗡: 𝗖𝗬𝗕𝗘𝗥 𝗘𝗫𝗣𝗘𝗥𝗧 | 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 | 𝗘𝗗𝗜𝗧𝗢𝗥  

      ╭━━━━━━━━━━━━━╮  
      🔗 𝗦𝗢𝗖𝗜𝗔𝗟 𝗠𝗘𝗗𝗜𝗔  
      ╰━━━━━━━━━━━━━╯  
      📘 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: [𝗔𝗛𝗠𝗘𝗗 𝗕𝗔𝗬𝗝𝗜𝗗](https://www.facebook.com/BAYJID.900)  
      📞 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣: [+8801638007072](https://wa.me/+8801638007072)  
      ✈️ 𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠: [𝗔𝗛𝗠𝗘𝗗 𝗕𝗔𝗬𝗝𝗜𝗗](https://t.me/ONEERROR1)  
      🐱 𝗚𝗜𝗧𝗛𝗨𝗕: [𝗩𝗜𝗘𝗪 𝗣𝗥𝗢𝗙𝗜𝗟𝗘](https://github.com/ERROR)  
      📧 𝗘𝗠𝗔𝗜𝗟: saxxbayjid@gmail.com  
      ▶️ 𝗬𝗢𝗨𝗧𝗨𝗕𝗘: [𝗦𝗨𝗕𝗦𝗖𝗥𝗜𝗕𝗘](https://www.youtube.com/c/BAYJID-6T9)  
      🌐 𝗣𝗢𝗥𝗧𝗙𝗢𝗟𝗜𝗢: [𝗩𝗜𝗘𝗪 𝗦𝗜𝗧𝗘](https://www.ahmedbayjid.com)  

      ╭━━━━━━━━━━━━━╮  
      🛠 𝗦𝗞𝗜𝗟𝗟𝗦  
      ╰━━━━━━━━━━━━━╯  
      🔹 𝗖𝗬𝗕𝗘𝗥 𝗦𝗘𝗖𝗨𝗥𝗜𝗧𝗬 & 𝗘𝗧𝗛𝗜𝗖𝗔𝗟 𝗛𝗔𝗖𝗞𝗜𝗡𝗚  
      🔹 𝗣𝗘𝗡𝗧𝗘𝗦𝗧𝗜𝗡𝗚 & 𝗙𝗢𝗥𝗘𝗡𝗦𝗜𝗖𝗦  
      🔹 𝗙𝗨𝗟𝗟 𝗦𝗧𝗔𝗖𝗞 𝗪𝗘𝗕 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗠𝗘𝗡𝗧  
      🔹 𝗔𝗣𝗣 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗠𝗘𝗡𝗧 (𝗔𝗡𝗗𝗥𝗢𝗜𝗗 & 𝗜𝗢𝗦)  
      🔹 𝗩𝗜𝗗𝗘𝗢 𝗘𝗗𝗜𝗧𝗜𝗡𝗚 & 𝗠𝗢𝗧𝗜𝗢𝗡 𝗚𝗥𝗔𝗣𝗛𝗜𝗖𝗦  
      🔹 𝗔𝗜 & 𝗠𝗔𝗖𝗛𝗜𝗡𝗘 𝗟𝗘𝗔𝗥𝗡𝗜𝗡𝗚  

      ╭━━━━━━━━━━━━━╮  
      💠 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗙𝗢𝗥 𝗪𝗢𝗥𝗞  
      ╰━━━━━━━━━━━━━╯  
      📩 𝗗𝗜𝗥𝗘𝗖𝗧 𝗠𝗘𝗦𝗦𝗔𝗚𝗘 𝗙𝗢𝗥:  
      ✅ 𝗖𝗬𝗕𝗘𝗥 𝗦𝗘𝗖𝗨𝗥𝗜𝗧𝗬 & 𝗣𝗥𝗜𝗩𝗔𝗖𝗬 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔𝗡𝗖𝗬  
      ✅ 𝗪𝗘𝗕 & 𝗔𝗣𝗣 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗠𝗘𝗡𝗧  
      ✅ 𝗘𝗧𝗛𝗜𝗖𝗔𝗟 𝗛𝗔𝗖𝗞𝗜𝗡𝗚 & 𝗧𝗥𝗔𝗜𝗡𝗜𝗡𝗚  
      ✅ 𝗩𝗜𝗗𝗘𝗢 𝗘𝗗𝗜𝗧𝗜𝗡𝗚 & 𝗚𝗥𝗔𝗣𝗛𝗜𝗖 𝗗𝗘𝗦𝗜𝗚𝗡  

      🔰 𝗧𝗛𝗔𝗡𝗞 𝗬𝗢𝗨 𝗙𝗢𝗥 𝗨𝗦𝗜𝗡𝗚 𝗧𝗛𝗘 𝗕𝗢𝗧 🔰`;

      api.sendMessage(message, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("❌ 𝗔𝗡 𝗘𝗥𝗥𝗢𝗥 𝗢𝗖𝗖𝗨𝗥𝗥𝗘𝗗 𝗪𝗛𝗜𝗟𝗘 𝗥𝗘𝗧𝗥𝗜𝗘𝗩𝗜𝗡𝗚 𝗔𝗗𝗠𝗜𝗡 𝗜𝗡𝗙𝗢.", event.threadID);
    }
  }
};