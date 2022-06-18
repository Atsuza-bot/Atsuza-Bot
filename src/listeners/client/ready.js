const { Listener } = require('discord-akairo');

class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

   exec() {
       console.log("Bot connécté va voir sur ton serveur le message !")

       console.log(`Prêt à servir ${this.client.guilds.cache.size} serveurs, ${this.client.users.cache.size} utilisateur et ${this.client.channels.cache.size} salons`)
   }
}

module.exports = ReadyListener;