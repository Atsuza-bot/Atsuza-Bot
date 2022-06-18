const { Listener } = require ('discord-akairo');

class GuildCreateListener extends Listener {
    constructor() {
        super('guildCreate', {
            emitter: 'client',
            event: 'guildCreate'
        });
    }

    exec(guild) {
        const channel = this.client.channels.cache.get('934862318922244107')
            channel.send(`Nouveau serveur -> ${guild.name} (${guild.id})!`)
    }
}

module.exports = GuildCreateListener;