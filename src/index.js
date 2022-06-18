const { Client, MessageEmbed } = require('discord.js');
const GotoClient = require('./structures/GotoClient');
const Canvas = require('canvas');
const Discord = require("discord.js");
const config = require('./util/config');
const { prefix } = require('./util/config');
const { SlashCommandBuilder  } = require('@discordjs/builders');
const { embed } = require('./util/functions');
const { Command } = require('discord-akairo');
const transcript = require("discord-html-transcripts");
const GotoClientV2 = require("./structures/GotoClient");



// Ne touchez A strictement rien !! .



let client = new GotoClient({ prefix: config.prefix });



  

client.on("guildMemberRemove", member => {
  const memberBye = client.channels.cache.get('983304792854118450')

  memberBye.send(`AUREVOIR\`${member.user.tag}\`ON T'AIMAIS NOUS` )
});


client.on('guildDelete', guild => {
  const guildDelete = client.channels.cache.get('934873132253200484')


  console.log(`Serveur supprimé ${guild.name} (${guild.id})`)

  return guildDelete.send(`Serveur supprimé ${guild.name} (${guild.id})`)
})

/*client.on("guildMemberAdd", async member => {
    client.channels.cache.get("983304707399352361");

    var canvas = Canvas.createCanvas(1024, 500);

    ctx = canvas.getContext("2d");

    var background = await Canvas.loadImage("./background.jpg");
    ctx.drawImage(background, 0, 0, 1024, 500);





    ctx.font = "42px Impact";
    ctx.fillStyle = "#00D8FF";
    ctx.textAlign = "center";
    ctx.fillText(member.user.tag.toUpperCase(), 512, 410)





    ctx.beginPath();
    ctx.arc(512, 166, 119, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();




    var avatar = await Canvas.loadImage(member.user.displayAvatarURL({
        format: "jpg"
    }));

    ctx.drawImage(avatar, 393, 47, 238, 238); 


    var attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.jpg");

    client.channels.cache.get("983304707399352361").send({files: [attachment]});

    

}
);*/


var nbTicket = 0;

//client.on()


client.on("interactionCreate", async interaction => {
  if(interaction.isButton()){
      if(interaction.customId == "open-ticket"){
        nbTicket++;
        Discord.Permissions.FLAGS.MANAGE_GUILD

        let channelTicket = interaction.guild.channels.create("│🎫・ticket " + interaction.user.username, {
          parent: "986561646434590760",
        });
        (await channelTicket).permissionOverwrites.create(interaction.user, {
          SEND_MESSAGES: true,
          EMBED_LINKS: true,
          VIEW_CHANNEL: true,
          READ_MESSAGE_HISTORY: true,
          MENTION_EVERYONE: true
        })
        .then(channel => {
          var row = new Discord.MessageActionRow()
          .addComponents(new Discord.MessageButton()
            .setCustomId("close-ticket")
            .setLabel("Close Ticket")
            .setEmoji("🔒")
            .setStyle("DANGER")
          );

          const TicketToolEmbed = new Discord.MessageEmbed()
          .setTitle(`${interaction.user.username} Welcome`)
          .setColor("BLURPLE")
          .setDescription("Le support sera avec vous sous peu.\nPour fermer ce ticket, réagissez avec 🔒")
          .setFooter(`Bot Crée Par 351 AtsXzaZ#0669`);

           channel.send({embeds: [TicketToolEmbed], components: [row, rowsee]});

           //channel.send({components: [row]}); 

            const EmbedTicketBien = new Discord.MessageEmbed()
            .setAuthor(`Ticket`)
            .setDescription(`Votre Ticket A Été Crée Avec Succès ${channel} !`)
            .setColor("#7a00ff");

            interaction.reply({ephemeral: true, embeds: [EmbedTicketBien]});
        });
      }
      /*else if(interaction.customId === "close-ticket"){
        interaction.channel.setParent("986563850935623680")

          interaction.message.delete();
          
          const embedTicket = new Discord.MessageEmbed()
        .setAuthor(`${interaction.user.username} Re-Bonjour`)
        .setDescription("Votre Ticket Grind Est Archivé")

        interaction.channel.send({embeds: [embedTicket]});

      }*/
      var rowsee = new Discord.MessageActionRow()
            .addComponents(
              new Discord.MessageButton()
              .setStyle("PRIMARY")
              .setEmoji("📝")
              .setLabel("Transcript")
              .setCustomId("transcript")

            );

            var rowseee = new Discord.MessageActionRow()
          .addComponents(new Discord.MessageButton()
          .setCustomId("delete-ticket")
          .setLabel("Supprimer Le Ticket")
          .setEmoji("⛔")
          .setStyle("DANGER")
          );


            if(interaction.customId === "transcript") {
              await interaction.deferReply()
              await interaction.channel.send({content: `Transcript de ${interaction.message.embeds[0].description.split(" ")[0]}`, files: [await transcript.createTranscript(interaction.channel)]})
              await interaction.editReply({content: "Transcript envoyé avec succès !", ephemeral: true})
    }
    if(interaction.customId === "close-ticket") {
      interaction.channel.setName("│🎫・closed 000"+ nbTicket)
      const nbticket2 = new Discord.MessageEmbed()
      .setAuthor(`Votre Ticket A Été Fermé Par ${interaction.user.tag}`)

      interaction.reply({embeds: [nbticket2], components: [rowseee]})
      interaction.message.delete();
    };
    if(interaction.customId === "delete-ticket") {
      interaction.channel.delete();
    };
  }
}
);

/*client.on("message", message => {
      if(message.content === prefix + 'TicketTool'){
        const Ticket = new Discord.MessageEmbed()
        .setAuthor("Bonjour Pour Fermer Votre Ticket Veuillez Cliquez Sur 📩")
        .setDescription("Tout d'abord merci d'avoir crée un ticket pour votre GRIND Joueur !\nN'hésitez pas à aller voir dans rc-joueur pour bien comprendre comment tout va ce passer lors de votre GRIND.\nJe vous laisse faire votre présentation.")

        message.channel.send({embeds: [Ticket]})
      }
})*/


 client.on("ready", async ( message, interaction) => {
  
  /*var row = new Discord.MessageActionRow()
  .addComponents(new Discord.MessageButton()
    .setCustomId("open-ticket")
    .setLabel("Create Ticket")
    .setEmoji("📩")
    .setStyle("PRIMARY")
    );
  
  client.channels.cache.get("987735303156555856").send({content: "Veuillez Cliquez Sur Create Ticket Pour Ouvrir Votre Ticket", components: [row]});*/
    

   let Embed = new Discord.MessageEmbed()
   .setColor("#7a00ff")
   .setTitle("Rôles des grind")
   .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
   .setDescription("Veuillez Choisir Le Rôle À Grind Que Vous Voulez !")
   .setTimestamp()
   .setFooter(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true}))

   const menu = new Discord.MessageActionRow().addComponents(new Discord.MessageSelectMenu()
   .setCustomId("menu")
   .setMaxValues(7)
   .setMinValues(0)
   .setPlaceholder("Faites un choix !")
   .addOptions([{label: "grinderCw", description: "Rôles Pour Grind Le Clan", emoji: "🎮", value: "Cw"}, {label: "grinderBf", description: "Rôles Pour Grind Le Clan", emoji: "🎮", value: "bf"}, {label: "grinderMv", description: "Rôles Pour Grind Le Clan", emoji: "🎮", value: "Mv"}, {label: "grinderEdit", description: "Rôles Pour Grind Le Clan", emoji: "🎮", value: "édit"}, {label: "grinderBxf", description: "Rôles Pour Grind Le Clan", emoji: "🎮", value: "bxf"}, {label: "grinderTrickshot", description: "Rôles Pour Grind Le Clan", emoji: "🎮", value: "trickshot"}, {label: "grinderEsport", description: "Rôles Pour Grind Le Clan", emoji: "🎮", value: "esport"}]))
  
   let channel = client.channels.cache.get("987735303156555856")
  
  let msg = await channel.send({embeds: [Embed], components: [menu]})

  const filter = async() => true;
  const collector = msg.createMessageComponentCollector({filter})

  collector.on("collect", async menu => {

    let Cwrole = channel.guild.roles.cache.get("982674915306115094")
    let bfrole = channel.guild.roles.cache.get("982674915306115092")
    let Mvrole = channel.guild.roles.cache.get("982674915306115093")
    let éditrole = channel.guild.roles.cache.get("982674915285164161")
    let bxfrole = channel.guild.roles.cache.get("982674915285164160")
    let trickshotrole = channel.guild.roles.cache.get("982674915285164159")
    let esportrole = channel.guild.roles.cache.get("982674915285164158")

    for(let i = 0; i < menu.values.length; i++) {
      if(menu.values[i] === "Cw") menu.member.roles.add(Cwrole.id)
      if(menu.values[i] === "bf") menu.member.roles.add(bfrole.id)
      if(menu.values[i] === "Mv") menu.member.roles.add(Mvrole.id)
      if(menu.values[i] === "édit") menu.member.roles.add(éditrole.id)
      if(menu.values[i] === "bxf") menu.member.roles.add(bxfrole.id)
      if(menu.values[i] === "trickshot") menu.member.roles.add(trickshotrole.id)
      if(menu.values[i] === "esport") menu.member.roles.add(esportrole.id)
    }

    if(menu.member.roles.cache.has(Cwrole.id) && !menu.values.includes("Cw")) menu.member.roles.remove(Cwrole.id)
    if(menu.member.roles.cache.has(bfrole.id) && !menu.values.includes("bf")) menu.member.roles.remove(bfrole.id)
    if(menu.member.roles.cache.has(Mvrole.id) && !menu.values.includes("Mv")) menu.member.roles.remove(Mvrole.id)
    if(menu.member.roles.cache.has(éditrole.id) && !menu.values.includes("édit")) menu.member.roles.remove(éditrole.id)
    if(menu.member.roles.cache.has(trickshotrole.id) && !menu.values.includes("trickshot")) menu.member.roles.remove(trickshotrole.id)
    if(menu.member.roles.cache.has(esportrole.id) && !menu.values.includes("esport")) menu.member.roles.remove(esportrole.id)

    menu.reply({content: "Vos Rôles Ont Eté Mis A jour !", ephemeral: true})
  })




  console.log( //Quand le client est on !
    `${"-".repeat(40)}\n` +
    "|  Logs.  |\n" +
    `${"-".repeat(40)}\n` +
    "bot Infos : \n" +
    `Nom du bot    : ${client.user.tag}!\n` +
    `ID du bot     : ${client.user.id}\n` +
    `Invitation : https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands \n` +
    `${"-".repeat(40)}\n`
  );

  let statuses = [
     //Tu peux en add d'autre !
     `Atsuza Bot Prefix ${config.prefix}`,
    `${client.guilds.cache.size} serveurs !`,
    `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} membres !`
  ]

  setInterval(function () {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(status, {
      type: "STREAMING",
      url: 'https://www.twitch.tv/atsxzaz' //abo ou t pas bo ! 🥰
    })
  }, 5000)


})






client.start(process.env.TOKEN);
