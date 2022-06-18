const { stripIndents } = require('common-tags');
const { Command } = require('discord-akairo');

class HelpCommand extends Command {
    constructor() {
        super('help', {
           aliases: ['help', 'h'],
           cooldown:  10000,
           description: {
            content: 'La commande help renvoie la liste des commande du bot !',
            usage: 'help <command>',
            exemples: ['help', 'help userinfo(info)', 'h ping']
        },
           category: 'Misc',
           args: [{ id: 'command', type: 'commandAlias' }]
        });
    }

exec(message, args) {
  const prefix = this.handler.prefix;
  const command = args.command;

  if(!command) {
    let embed = this.client.functions.embed()
    .setAuthor(
      `Bonjour a tous mon nom est ${this.client.user.username}`,
      this.client.user.displayAvatarURL()
    )

    .setDescription(`Retrouvez la liste de nos commande ci-dessus !
    Si vous avez besoin d'assistance, rejoinez [notre serveur](https://discord.gg/536hUx7Jrz)
    **--------------**`)

    for (const category of this.handler.categories.values()) {
      embed.addField(
        `ф ${category.id}`,
        `${category
        .filter(cmd => cmd.aliases.length > 0)
        .map(cmd => `\`${cmd.aliases[0]}\``)
        .join(' | ')}
        `
        )
    }
  

    embed.addField(
      '--------------',
      `**\`${prefix}help <command>\` pour des infos sur une commande spécifique.**
      Examples: \`${prefix}help ping\` | \`${prefix}help userinfo\``)
  
    return message.channel.send({ embeds: [ embed ]});
    }

    return message.channel.send(stripIndents`
    \`\`\`makefile
    [Help Command -> ${command.aliases[0]}] ${command.ownerOnly ? '/\\ Admin only /\\' : ''}

    ${command.description.content}

    Utilisation: ${prefix}${command.description.usage}
    Exemples: ${prefix}${command.description.exemples.join(` | ${prefix}`)}

    -------

    ${prefix} = prefix à utiliser sur le bot
    () alias | <> argument(s) optionnel(s) | [] = argument(s) obligatoire
    Ne pas inclure les caractères suivans -> [], () et <> dans vos commandes.
    Si vous avez un problème, rejoinez le serveur support https://discord.gg/ZTpGf6cacc ! 
    \`\`\``);
  }
}


module.exports = HelpCommand;