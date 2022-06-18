const { Command } = require('discord-akairo');

class UserInfoCommand extends Command {
    constructor() {
        super('userinfo', {
           aliases: ['userinfo'],
           cooldown:  10000,
          description: `Affiche les informations de l'utilisateur !`,
          ignorePermissions: '923614600795156501',
          category: 'Misc',
          description: {
            content: 'La commande userinfo renvoie des informations sur l\'utilisateur ',
            usage: 'userinfo <member>',
            exemples: ['userinfo', 'userinfo']
        },
         // ratelimit: 1,
          channel: 'guild',
          args: [
            { id: 'member', type: 'member', default: message => message.member }
          ]
        });
    }

exec(message, args) {
  const guildMember = args.member;




    return message.channel.send({ embeds: [
      this.client.functions.embed()
      .setThumbnail(guildMember.user.displayAvatarURL())
      .setTitle(`${guildMember.displayName} (${args.member.id})`)
      .setDescription(`Son compte a été crée le ${guildMember.user.createdAt}
      Il a rejoints le ${guildMember.joinedAt}
      Bot:  ${guildMember.user.bot}
      Roles:  ${guildMember.roles.cache.map(role => role.name).join(', ')}
      
      
      `)
      
    ]})
  }
}

module.exports = UserInfoCommand;