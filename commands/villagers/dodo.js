const connection = require('../../database.js');
const Discord = require('discord.js');

module.exports = {
  name: 'dodo',
  description: 'Allows Erin to start villager requests.',
  usage: '!dodo [authorID] [villager\'s name] [dodocode]',
  example: '!dodo 9999999999 Hopkins 9UG0P1',
  aliases: ['gotime', 'do', 'dd', 'dodocode', 'do-do-code', 'do-do', 'come'],
  ownerOnly: 'yes',
  async execute (message, args, client) {

    let author = args[0];
    if(!author) return message.reply('Please specify which person you would like to provide the dodo code for.');
    let villager = args[1];
    if(!villager) return message.reply('Please specify which villager you would like to provide the dodo code for.')
    let dodo = args[2];
    if(!dodo) return message.reply('Erin, you gotta tell me what status you would like to update this to!');
    let stat = 'Do Do Code Sent via PMs.';

    const check = await connection.query(
      `SELECT * FROM villagers WHERE authorId = ? AND villager = ?;`,
      [author, villager]
    );
    //console.log(check);
    const checks = check[0][0].villager;
    //console.log(checks);
    if(!checks || checks == null || checks == undefined || checks != villager) {
      message.react('❌');
      message.reply('This user either canceled their request or it was removed.');
      return;
    }

    await connection.query(
      `UPDATE villagers SET stat = ? WHERE authorId = ? AND villager = ?;`,
      [stat, author, villager]
    );

    message.react('✅');

    let embed = new Discord.MessageEmbed()
      .setTitle('Your Do Do Code is Inbound!')
      .setColor('RED')
      .setDescription(`Erin has sent you your Do Do Code. Your Do Do Code is:\n\`\`\`${dodo}\`\`\`\nIf this does not work or you have issues, please ping Erin and let her know.`)
      .setFooter({ text: 'To cancel this request please use !cancel in the server!'});

    client.users.fetch(author, false).then((user) => {
      user.send({embeds: [embed]});
    });

    }
}