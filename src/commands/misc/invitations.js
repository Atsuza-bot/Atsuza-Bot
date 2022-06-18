const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const client = new Discord.Client({
    intents: 32767
});

class invitationsCommand extends Command {
    constructor() {
        super('addMe', {
           aliases: ['addMe'],
           cooldown:  10000,           description: {
               content: 'La commande addMe m\'ajoute a ton serveur ',
               usage: 'addMe',
               exemples: ['addMe']
           },
           category: 'Misc'
        });
    }

async exec(message) {
    const invitations = new Discord.MessageEmbed()
    .setColor("#7a00ff")
    .setAuthor(`Je suis ${this.client.user.username} !`)
    .setDescription(`Voici mon [invitations](https://discord.com/api/oauth2/authorize?client_id=${this.client.user.id}&permissions=8&scope=bot%20applications.commands)`);

    return message.channel.send({ embeds: [invitations]});
    
    }
}

module.exports = invitationsCommand;