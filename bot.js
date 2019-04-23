const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
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
	if( reaction.message.channel.name === 'bot-interaction') {
		if(message.content ==='!blitz fact') {
			fetch('http://randomuselessfact.appspot.com/today.json?language=en')
			.then(response => response.json())
			.then(json => message.reply(json.text));
		} else if(message.content === '!blitz joke'){
			fetch('https://sv443.net/jokeapi/category/Any')
			.then(response => {console.log(response);return response.json();})
			.then(json => {
				console.log(json);
				if(json.type === 'single'){
					message.reply(json.joke);
				} else if(json.type === 'twopart') {
					message.reply(json.setup);
					sleep(5000).then(() => client.channels.get(message.channel.id).send(json.delivery))
				}
			});
		} else if(message.content === '!blitz cat'){
			//message.reply('http://placekitten.com/900/900');
			let size = 100+Math.floor( Math.random()*900);
			console.log(size);
			message.channel.sendMessage({embed: {
				color: 3447003,
				description: '',
				image: {url: `http://placekitten.com/${size}/${size}`}
			}});
		} else if(message.content === '!blitz help'){
			message.reply(`Type " !blitz + " the command you want.\n                         Options: joke, fact, cat`);
		}
	}
});
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
client.login(process.env.BOT_TOKEN);
