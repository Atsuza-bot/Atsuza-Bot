const { Inhibitor } = require('discord-akairo');

class channelBlacklistInhibitor extends Inhibitor {
    constructor() {
        super('channelBlacklist', {
        reason: 'Le bot ne peut pas éxécuter la commande dans ce Salon',
        type: 'post',
        priority: 1
    })
}

    exec(message) {
        const channelBlacklist = [''];
        return channelBlacklist.includes(message.channel.id);
    }
}

module.exports = channelBlacklistInhibitor;