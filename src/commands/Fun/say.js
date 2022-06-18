const { Command } = require('discord-akairo');

class SayCommand extends Command {
    constructor() {
        super('say', {
           aliases: ['say'],
          description: `Dit le message qu'a dit l'utilisateur !`,
          ignorePermissions: '923614600795156501',
          category: 'Fun',
          description: {
            content: "La commande say dit le messsage qu'a dit l'utilisateur !",
            usage: 'say',
            exemples: ['say wxcs bg']
        },
         // ratelimit: 1,
          channel: 'guild'
        });
    }

exec() {
  }
}

module.exports = SayCommand;