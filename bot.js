const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageReactionAdd', (reaction, user) => {
	if( reaction.message.channel.name === 'games') {
		let member = reaction.message.guild.members.get(user.id);
		let role;
		switch (reaction.emoji.name) {
			case 'RL':
				role= reaction.message.guild.roles.find(r => r.name === "Rocket League");
				member.addRole(role).catch(console.error);
				break;
			case 'Overwatch':
				role = reaction.message.guild.roles.find(r => r.name === "Overwatch");
				member.addRole(role).catch(console.error);
				break;
			case 'R6S':
				role = reaction.message.guild.roles.find(r => r.name === "Rainbow 6 Siege");
				member.addRole(role).catch(console.error);
				break;
			case 'CSGO':
				 role = reaction.message.guild.roles.find(r => r.name === "Counter Strike: Global Offensive");
				member.addRole(role).catch(console.error);
				break;
			case 'Fortnite':
				 role = reaction.message.guild.roles.find(r => r.name === "Fortnite");
				member.addRole(role).catch(console.error);
				break;
			case 'MC':
				 role = reaction.message.guild.roles.find(r => r.name === "Minecraft");
				member.addRole(role).catch(console.error);
				break;
			default:
				reaction.remove(user);
				break;
		}
	}
});

client.on('messageReactionRemove', (reaction, user) => {
	if( reaction.message.channel.name === 'games') {
		let member = reaction.message.guild.members.get(user.id);
		let role;
		switch (reaction.emoji.name) {
			case 'RL':
				role= reaction.message.guild.roles.find(r => r.name === "Rocket League");
				member.removeRole(role).catch(console.error);
				break;
			case 'Overwatch':
				role = reaction.message.guild.roles.find(r => r.name === "Overwatch");
				member.removeRole(role).catch(console.error);
				break;
			case 'R6S':
				role = reaction.message.guild.roles.find(r => r.name === "Rainbow 6 Siege");
				member.removeRole(role).catch(console.error);
				break;
			case 'CSGO':
				 role = reaction.message.guild.roles.find(r => r.name === "Counter Strike: Global Offensive");
				member.removeRole(role).catch(console.error);
				break;
			case 'Fortnite':
				 role = reaction.message.guild.roles.find(r => r.name === "Fortnite");
				member.removeRole(role).catch(console.error);
				break;
			case 'MC':
				 role = reaction.message.guild.roles.find(r => r.name === "Minecraft");
				member.removeRole(role).catch(console.error);
				break;
			default:

				break;
		}
	}
});

client.on('message', message => {
	if(message.content.startWith('!fact')) {
		fetch('http://randomuselessfact.appspot.com/today?language=en')
		.then(response => response.json()) 
		.then(json => {
			message.send(json);
			console.log(json);
		})
	}
})

client.login(process.env.BOT_TOKEN);
