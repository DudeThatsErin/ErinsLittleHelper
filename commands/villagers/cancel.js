const connection = require('../../database.js');

module.exports = {
  name: 'cancel',
  description: 'Allows users to cancel their villager request.',
  usage: '!cancel [villager name]',
  example: '!cancel Hopkins',
  aliases: ['delete', 'can'],
  cooldown: '120',
  async execute (message, args) {

    let author = message.author.id;
    let user = message.author;
    let villager = args[0];
    if(!villager) return message.reply('Please tell me which villager this user requested!');

    const result = await connection.query(
      `SELECT * FROM villagers WHERE authorId = ? AND villager = ?;`,
      [author, villager]
    );
    const results = result[0][0];
    if(results == null || !results || results == undefined) {
      message.react('👎');
      message.reply({ content: 'I cannot remove your request unless you specify which villager. If you typed one and it does not match you may want to run \`/villagers\` and copy and paste the name that appears there. This command is **case** and **space** sensitive. You can try it again after 2 minutes.\nIf you typed the name correctly and are still seeing this message, your request may already be canceled. Use \`!status\` to see if you have any requests out there.'});
      return;
    }

    await connection.query(
      `DELETE FROM villagers WHERE authorId = ? AND villager = ?;`,
      [author, villager]
    );

    message.react('✅');
    user.send({content: 'Your request was canceled. Happy Animal Crossing!'})


    }
}