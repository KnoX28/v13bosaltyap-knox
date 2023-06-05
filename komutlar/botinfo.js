const {
  SlashCommandBuilder
} = require('@discordjs/builders');
// BY CODED KNOX
module.exports = {
  data: new SlashCommandBuilder()
    .setName('botinfo')
    .setDescription('Bot Hakkında Bilgi Verir.'),

  async execute(interaction, client) { 
// BY CODED KNOX
    const knoxembed = new client.discord.MessageEmbed()
      .setColor('6d6ee8')
      .setDescription('・Yapımcı <:heart:901205849404493854>  **Knox**\n\n**・Linkler:**\n\n[<:github:901207749675851816>](https://github.com/KnoX28) [<:discord:901207777765130300>](https://discord.gg/ByNpSxFMRe)')
      .setFooter('Knox', client.user.avatarURL())
      .setTimestamp();

// BY CODED KNOX
interaction.reply({embeds: [knoxembed]})

 },
};// BY CODED KNOX