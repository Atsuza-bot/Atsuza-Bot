const { Command } = require('discord-akairo');

class NicknameCommand extends Command {
    constructor() {
        super('nickname', {
           aliases: ['nickname'],
           cooldown:  10000,
          description: `Envoie le message a l'utilisateur !`,
          ignorePermissions: '923614600795156501',
          category: 'Fun',
          description: {
            content: "La commande nickname change le pseudo d'un utilisateur !",
            usage: 'nickname',
            exemples: ['nickname @chake t un bg']
        },
         // ratelimit: 1,
          channel: 'guild'
        });
    }

exec() {
  }
}

module.exports = NicknameCommand;