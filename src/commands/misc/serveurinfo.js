const { Command } = require('discord-akairo');

class ServeurInfoCommand extends Command {
    constructor() {
        super('serveurinfo', {
           aliases: ['serveurinfo'],
           cooldown:  10000,
          description: `Affiche l'information du serveur !`,
          ignorePermissions: '923614600795156501',
          category: 'Misc',
          description: {
            content: 'La commande botinfo renvoie des informations sur le bot !',
            usage: 'serveurinfo',
            exemples: ['serveurinfo']
        },
         // ratelimit: 1,
          channel: 'guild'
        });
    }

async exec(message, args) {
  const guild = message.guild;
  const owner  = await guild.fetchOwner();




    return message.channel.send({ embeds: [
      this.client.functions.embed()
      .setAuthor(`${guild.name} (${guild.id})`, guild.iconURL())
      .setDescription(`Owner: ${owner.displayName} (${owner.id})
      Crée le: ${guild.createdAt}
      Utilisateur: ${guild.memberCount}
      Salons: ${guild.channels.cache.size}`)
    ]})
  }
}

module.exports = ServeurInfoCommand;