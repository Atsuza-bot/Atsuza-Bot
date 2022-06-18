const { Listener } = require('discord-akairo');

class CommandBlockedListener extends Listener {
    constructor() {
        super('comamndBlocked', {
            emitter: 'commandHandler',
            event: 'commandBlocked'
        });
    }

    async exec(message, command, reason) {
        message.reply(`Votre commande \`${command}\` a été bloqué car **${reason}** !`);   
        }
    }

module.exports = CommandBlockedListener;