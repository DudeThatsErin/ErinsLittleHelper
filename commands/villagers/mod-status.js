const connection = require('../../database.js');
const Discord = require('discord.js');

module.exports = {
  name: 'mod-status',
  description: 'Check the status of you request(s).',
  usage: '!mod-status [user ID]',
  example: '!mod-status 999999999',
  ownerOnly: 'yes',
  aliases: ['mstat', 'mod-stat', 'modstat', 'mstats'],
  cooldown: '120',
  async execute (message, args, client) {
    let author = message.author;
    let user = args[0];
    if(!user) return message.reply('You didn\'t specify what user you would like to check.')
    let information = '';

        const info = await connection.query(
          `SELECT * FROM villagers WHERE authorId = ?;`,
          [user]
        );
        if (info[0].stat == null || !info[0].stat || info[0].stat == undefined) {
          message.react('❓');
          message.reply('This user has not requested any villagers yet.');
          return;
        }
        for (let i = 0; i < info[0].length; i++) {
          const data = info[0];
          const status = data[i].stat;
          const villager = data[i].villager;

          information += `${i + 1}. ${villager} - ${status}\n`;
        }
        let embed = new Discord.MessageEmbed()
          .setTitle('You wanted to check on the user\'s requests?')
          .setColor('#eeeeee')
          .setDescription(`These are their current requested villagers you have requested and their status(es):\n\`\`\`${information}\`\`\``);

        message.react('📨');
        author.send({ embeds: [embed] });


    }
}