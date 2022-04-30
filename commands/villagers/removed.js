const connection = require('../../database.js');

module.exports = {
  name: 'remove',
  description: 'Allows Erin to cancel a villager request.',
  usage: '!remove [authorID] [villager name]',
  ownerOnly: 'yes',
  async execute (message, args, client) {

    let author = args[0];
    if(!author) return message.reply('Please specify which person you would like to update the request for.');
    let villager = args[1];
    if(!villager) return message.reply('Erin, you gotta tell me which villager this user requested!');

    const result = await connection.query(
      `SELECT * FROM villagers WHERE authorId = ? AND villager = ?;`,
      [author, villager]
    );
    let results = result[0][0];
    //console.log(results);
    if(results == null || !results || results == undefined) {
      message.react('❌');
      message.reply('Nothing to delete.');
      return;
    }

    await connection.query(
      `DELETE FROM villagers WHERE authorId = ? AND villager = ?;`,
      [author, villager]
    );

    message.react('✅');
    client.users.fetch(author, false).then((user) => {
      user.send({content: 'Your request was canceled. This can happen for a few reasons though the most common are:\`\`\`css\nSpam/Abuse\nInactivity for more than 5-min after Do Do Code was sent.\nYou requested a cancellation.\`\`\` If you have questions about this, please ask in the support server. Happy Animal Crossing!'});
    });


    }
}