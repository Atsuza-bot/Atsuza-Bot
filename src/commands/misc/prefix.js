const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const config = require('../../util/config');
const prefixs = config.prefix


class prefixCommand extends Command {
    constructor() {
        super('prefix', {
           aliases: ['prefix'],
           cooldown:  10000,           description: {
               content: 'La commande prefix montre le prefix du bot ',
               usage: 'prefix',
               exemples: ['prefix']
           },
           category: 'Misc'
        });
    }
async exec( message, member ) {
    const prefix2 = new Discord.MessageEmbed()
    .setColor("#7a00ff")
    .setAuthor(`Bounjours je suis ${this.client.user.username} (${this.client.user.id})`)
    .setDescription(`Voici mon prefix \`${prefixs}\``);
    return message.channel.send({ embeds: [prefix2]});
    }
}


module.exports = prefixCommand;