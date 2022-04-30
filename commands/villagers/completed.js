const connection = require('../../database.js');

module.exports = {
  name: 'completed',
  description: 'Allows Erin to complete a villager request.',
  usage: '!completed [authorID] [villager name]',
  example: '!completed 9999999999 Hopkins',
  ownerOnly: 'yes',
  aliases: ['complete', 'finished', 'finished', 'done'],
  async execute (message, args) {

    let author = args[0];
    if(!author) return message.reply('Please specify which person you would like to update the request for.');
    let villager = args[1];
    if(!villager) return message.reply('Erin, you gotta tell me which villager this user requested!');

    const results = await connection.query(
      `SELECT * FROM villagers WHERE authorId = ? AND villager = ?;`,
      [author, villager]
    );
    const result = results[0][0];
    if(result == null || !result || result == undefined) {
      message.react('❌');
      message.reply('That person\'s request has already been removed or completed. Use \`!mod-stat\` to check this user\'s requests that are outstanding.');
      return;
    }

    await connection.query(
      `DELETE FROM villagers WHERE authorId = ? AND villager = ?;`,
      [author, villager]
    );

    message.react('✅');
    client.users.fetch(author, false).then((user) => {
      user.send({content: 'Your request has been completed! Happy Animal Crossing!'})
    });

    }
}