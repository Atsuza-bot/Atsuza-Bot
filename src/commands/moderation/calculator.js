const { Command } = require('discord-akairo');

const clean = text => {
  if (typeof (text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
    return text;
}

module.exports = class CalculatorCommand extends Command {
  constructor() {
    super('calculator', {
      aliases: ['calculator'],
      category: 'Moderation',
      description:  {
        content: 'La commande calculator Calcule | fois * plus +  moins - divisé /    !',
      usage: 'calculator',
      exemples: ['!calculator 2+2', '2*5', '5/5', '2-1']
    },
      args: [
        {
          id: 'code',
          match: 'content',
        },
      ],
    });
  }

  async exec(message, { code }) {
    try {
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), { code: "xl" });
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
};