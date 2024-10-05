const axios = require('axios');

module.exports.config = {
 name: "miko",
 version: "1.0.0",
 role: 0,
 aliases: ["miko"],
 credits: "cliff",
cooldown: 0,
hasPrefix: false,
	usage: "",
};

module.exports.run = async function ({ api, event, args }) {
 const content = encodeURIComponent(args.join(" "));

 if (!content) {
	return api.sendMessage("🟢 Salut! moi c'est SHIBAI BOT une Intelligence Artificielle créer par Shibai Otsutsuki mon maître comment puis-je vous aider aujourd'hui ?", event.threadID, event.messageID);
 }

 api.sendMessage("🟡 Shibai Otsutsuki à la rescousse 🏃‍♀️...", event.threadID, event.messageID); 

 const apiUrl = `https://bluerepoapislasttry.onrender.com/hercai?content=${content}`;

 try {
	const response = await axios.get(apiUrl);
	const reply = response.data.reply;

	api.sendMessage(reply, event.threadID, event.messageID);
 } catch (error) {
	console.error("Error fetching data:", error.message);
	api.sendMessage("An error occurred while processing your request.", event.threadID);
 }
};
