const { Listener } = require('discord-akairo');

class ReadyListener extends Listener {
    constructor() {
        super('guildMemberAdd', {
            emitter: 'client',
            event: 'guildMemberAdd'
        });
    }

   exec(member) {
      member.roles.add('982674915285164153')
    }
}

module.exports = ReadyListener;