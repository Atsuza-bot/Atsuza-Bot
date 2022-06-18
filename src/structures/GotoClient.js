const { AkairoClient, CommandHandler, ListenerHandler, InhibitorHandler } = require('discord-akairo');
const mongoose = require('mongoose');
const configs = require('../util/config');
const { TOKEN, MONGOSTRING } = require('../util/config');
const { embed } = require('../util/functions');

module.exports = class GotoClient extends AkairoClient {
  constructor(config = {}) {
    super(
      { ownerID: '670603689190490142'},
      {
        allowedMentions: {
          parse: ['roles', 'everyone', 'users'],
          repliedUser: true
        },
        partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'],
        presence: {
          activities: [
            {
              name: `Atsuza PREFIX ${configs.prefix}`
            }
          ]
        },
        intents: 32767
      }
    );

    this.commandHandler = new CommandHandler(this, {
      allowMention: true,
      prefix: config.prefix,
      defaultCooldown: 2000,
      directory: './src/commands'
    });

this.ListenerHandler = new ListenerHandler(this, {
  directory: './src/listeners/'
});



this.inhibitorHandler = new InhibitorHandler(this, {
  directory: './src/inhibitors/'
});







this.functions = {
   embed: embed 






  }
  }

  init() {
    this.commandHandler.loadAll();
console.log(`Commandes -> ${this.commandHandler.modules.size}`);
this.commandHandler.useListenerHandler(this.ListenerHandler);
this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
  this.ListenerHandler.setEmitters({ commandHandler: this.commandHandler });
this.ListenerHandler.loadAll();
console.log(`Listeners -> ${this.ListenerHandler.modules.size}`);
  this.inhibitorHandler.loadAll();
console.log(`Inhibitors -> ${this.inhibitorHandler.modules.size}`);

  }

 async start() {
 try {
    await mongoose.connect(MONGOSTRING, {
     useNewUrlParser: true,
     useUnifiedTopology: true
   })
    console.log("DB Connécté !");
  } catch(e) {
    console.log("DB Pas Connécté ! Voir l'erreur ci-dessous!\n\n", e);
    //return process.exit();
  }

  await this.init();
  return this.login(TOKEN);
}
}
 
