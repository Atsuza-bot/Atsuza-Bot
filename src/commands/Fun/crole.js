const { Command } = require('discord-akairo');

class CroleCommand extends Command {
    constructor() {
        super('crole', {
           aliases: ['crole'],
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
          channel: 'guild'
        });
    }

exec() {
  }
}

module.exports = CroleCommand;