const { Command } = require('discord.js-commando');

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'pushcart',
			group: 'main',
			memberName: 'pushcart',
			description: 'haha',
		});
    }
    run(message) {
		return message.say('Good one');
	}
};