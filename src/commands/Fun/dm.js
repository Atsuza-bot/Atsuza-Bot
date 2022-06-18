const { Command } = require('discord-akairo');

class DMCommand extends Command {
    constructor() {
        super('dm', {
           aliases: ['dm'],
           cooldown:  10000,
          description: `Envoie le message a l'utilisateur !`,
          ignorePermissions: '923614600795156501',
          category: 'Fun',
          description: {
            content: 'La commande Clear Supprimé des messages !',
            usage: 'dm',
            exemples: ['dm @abyo test']
        },
         // ratelimit: 1,
          channel: 'guild'
        });
    }

exec() {
  }
}

module.exports = DMCommand;