const Discord = require('discord.js');
const client = new Discord.Client();
const webhook = new Discord.WebhookClient('WEBHOOK_ID', 'WEBHOOK_TOKEN');

client.on('message', message => {
  if (message.mentions.has(client.user)) {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`Bir kullanıcı seni etiketledi!`)
      .setDescription(`Etiketleyen kullanıcı: <@${message.author.id}>`)
      .setTimestamp();

    if (message.content) {
      embed.addField('Mesaj', message.content);
    }

    if (message.attachments.size > 0) {
      const attachment = message.attachments.first();
      if (attachment && attachment.url) {
        embed.setImage(attachment.url);
      }
    }

    webhook.send({ embeds: [embed] });
  }
});

client.login('BOT_TOKEN');
