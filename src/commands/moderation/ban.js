const { Command } = require('discord-akairo')

class banCommand extends Command {
    constructor() {
        super('ban', {
           aliases: ['ban'],
          description: `Affiche les informations de l'utilisateur !`,
          category: 'Moderation',
          description: {
            content: 'La commande ban permet de ban un utilisateur du serveur !',
            usage: 'ban <member> <raison>',
            exemples: ['ban @membre', 'ban @membre Pourquoi pas ! ']
        },
          channel: 'guild',
          args: [
            { id: 'member', type: 'member' },
            { id: 'reason', type: 'string', match: 'restContent' }
          ],
          clientPermissions: ['BAN_MEMBERS'],
          userPermissions: ['BAN_MEMBERS']
        });
    }

  async exec(message, { member, reason }) {

  if(!reason) reason = 'Aucune raison non spécifié'
   member ? member.ban({ days: 7, reason: reason }) :  message.channel.send("L'utilisateur n'existe pas !");


   const logChannel = this.client.channels.cache.get('934873132253200484');


   const embed = this.client.functions.embed()
   .setAuthor(`${member.user.username} (${member.user.id})`, member.user.displayAvatarURL())
   .setDescription(`La raison de: \`@${message.author.username}\` est \`${reason}\` \n\nIl a été ban par \`${message.author.username}\``)
   .setTimestamp()
   .setThumbnail(`${message.author.displayAvatarURL()}`);


   await logChannel.send({ embeds: [embed] })
   .catch(() => console.log(`Problème sur la commande ban .`))

   return message.channel.send({ embeds: [embed]});
  }
}





module.exports = banCommand;