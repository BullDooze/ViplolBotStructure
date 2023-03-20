const { ActivityType } = require("discord.js")
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
    setInterval(() => client.user.setActivity({ name: `Viplol's Server`, type: ActivityType.Watching }), 22000);
}};