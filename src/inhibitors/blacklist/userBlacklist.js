const { Inhibitor } = require('discord-akairo');

class UserBlacklistInhibitor extends Inhibitor {
    constructor() {
        super('userBlacklist', {
        reason: 'vous êtes dans la blacklist',
        type: 'post',
        priority: 2
    })
}

    exec(message) {
        const userBlacklist = [''];
        return userBlacklist.includes(message.author.id);
    }
}

module.exports = UserBlacklistInhibitor;