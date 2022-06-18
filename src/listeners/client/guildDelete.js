const { Listener } = require ('discord-akairo');
const Discord = require ('discord.js');

class GuildDeleteListener extends Listener {
    constructor() {
        super('guildDelete', {
            emitter: 'client',
            event: 'guildDelete'
        });
    }

    exec(guild) {
        const channel = this.client.channels.cache.get('934862318922244107')
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Je suis ${this.client.user.username} ${this.client.user.displayAvatarURL()}`)
        .setDescription(`Serveur supprimé -> ${guild.name} (${guild.id}) !`)
            channel.send({ embeds: [embed] });
    }
}

module.exports = GuildDeleteListener;