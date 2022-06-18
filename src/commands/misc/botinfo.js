const { Command } = require('discord-akairo');

class BotInfoCommand extends Command {
    constructor() {
        super('botinfo', {
           aliases: ['botinfo'],
           cooldown:  10000,
          description: `Affiche les informations de l'utilisateur !`,
          ignorePermissions: '923614600795156501',
          category: 'Misc',
          description: {
            content: 'La commande botinfo renvoie des informations sur le bot !',
            usage: 'botinfo',
            exemples: ['botinfo']
        },
         // ratelimit: 1,
          channel: 'guild',
          args: [
            { id: 'member', type: 'member', default: message => message.member }
          ]
        });
    }

exec(message, args) {
  const nonBotUsers = this.client.users.cache.filter(user => !user.bot)  
  const bot = this.client;




    return message.channel.send({ embeds: [
      bot.functions.embed()
      .setAuthor(bot.user.username, bot.user.displayAvatarURL())
      .setDescription(`Maintainer: [ACE AtsXzaZ#0669](https://discord.gg/uchiwaclxn)
        Uptime: ${bot.uptime}
        ---
        **Users**: ${nonBotUsers.size}
        **Servers**: ${bot.guilds.cache.size} 
        **Salon**: ${bot.channels.cache.size}`)
    ]})
  }
}

module.exports = BotInfoCommand;