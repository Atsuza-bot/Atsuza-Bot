const { Command } = require('discord-akairo');

class RestartCommand extends Command {
    constructor() {
        super('restart', {
           aliases: ['restart', 'rs'],
           ownerOnly: true,
           cooldown:  10000, 
           description: {
           },
           category: 'dev'
        });
    }

exec(message) {
    require('child_process').execSync('pm2 restart 0');
    }
}

module.exports = RestartCommand;