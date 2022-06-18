const { Command } = require('discord-akairo');

class StopCommand extends Command {
    constructor() {
        super('stop', {
           aliases: ['stop', 'st'],
           ownerOnly: true,
           cooldown:  10000, 
           description: {
           },
           category: 'dev'
        });
    }
    

exec(message) {
    require('child_process').execSync('pm2 stop 0');
    }
}

module.exports = StopCommand;