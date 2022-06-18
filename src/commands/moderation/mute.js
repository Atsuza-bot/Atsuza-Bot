const { Command } = require('discord-akairo');

class MuteCommand extends Command {
    constructor() {
        super('mute', {
           aliases: ['mute'],
           cooldown:  10000,
          description: `Mute un utilisateur max 28Jours !`,
          ignorePermissions: '923614600795156501',
          category: 'Moderation',
          description: {
            content: 'La commande mute Mute un utilisateur !',
            usage: 'mute',
            exemples: ['mute @g4cpack 2d']
        },
         // ratelimit: 1,
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
  member ? member.mute(reason) :  message.channel.send("L'utilisateur n'existe pas !");


  const logChannel = this.client.channels.cache.get('934873132253200484');


  const embed = this.client.functions.embed()
  .setAuthor(`${member.user.username} (${member.user.id})`, member.user.displayAvatarURL())
  .setDescription(`La raison de: \`@${member.author.username}\` est \`${reason}\` \n\nIl a été mute par \`${message.author.username}\``)
  .setTimestamp()
  .setThumbnail(`${message.author.displayAvatarURL()}`);


  await logChannel.send({ embeds: [embed] })
  .catch(() => console.log(`Problème sur la commande mute .`))

  return message.channel.send({ embeds: [embed]});
  }
}

module.exports = MuteCommand;