const { Command } = require('discord-akairo');

class KickCommand extends Command {
    constructor() {
        super('kick', {
           aliases: ['kick'],
          description: `Affiche les informations de l'utilisateur !`,
          category: 'Moderation',
          description: {
            content: 'La commande kick permet de kick un utilisateur du serveur !',
            usage: 'kick <member>',
            exemples: ['kick @membre', 'kick @membre ']
        },
          channel: 'guild',
          args: [
            { id: 'member', type: 'member' },
            { id: 'reason', type: 'string', match: 'restContent' }
          ],
          clientPermissions: ['KICK_MEMBERS'],
          userPermissions: ['KICK_MEMBERS']
        });
    }

  async exec(message, { member, reason }) {

  if(!reason) reason = 'Aucune raison non spécifié'
   member ? member.kick(reason) :  message.channel.send("L'utilisateur n'existe pas !");


   const logChannel = this.client.channels.cache.get('934873132253200484');


   const embed = this.client.functions.embed()
   .setAuthor(`${member.user.username} (${member.user.id})`, member.user.displayAvatarURL())
   .setDescription(`La raison de: \`@${member.author.username}\` est \`${reason}\` \n\nIl a été kick par \`${message.author.username}\``)
   .setTimestamp()
   .setThumbnail(`${message.author.displayAvatarURL()}`);


   await logChannel.send({ embeds: [embed] })
   .catch(() => console.log(`Problème sur la commande kick .`))

   return message.channel.send({ embeds: [embed]});
  }
}





module.exports = KickCommand;