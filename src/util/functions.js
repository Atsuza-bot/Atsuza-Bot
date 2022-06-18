const { MessageEmbed } = require("discord.js")

module.exports = {
  embed: function() {
    return new MessageEmbed().setColor('#7a00ff');
  }
}