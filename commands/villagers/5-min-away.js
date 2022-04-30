const connection = require('../../database.js');

module.exports = {
  name: '5min',
  description: 'Allows Erin to state when she is 5 min away from giving someone a villager.',
  usage: '!5min [authorID] [new status message]',
  example: '!5min 9999999999 5 minutes away, get ready!',
  aliases: ['5-minutes', '5minutes', '5-min', 'reminder2', 'remind2', 'reminder-2', '2r'],
  ownerOnly: 'yes',
  async execute (message, args, client) {

    let author = args[0];
    if(!author) return message.reply('Please specify which person you would like to update the request for.');
    let villager = args[1];
    if(!villager) return message.reply('Please specify which villager you are 5 minutes away from inviting.');
    let stat = args.slice(2).join(' ');
    if(!stat) return message.reply('Erin, you gotta tell me what status you would like to update this to!');

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
      `UPDATE villagers SET stat = ? WHERE authorId = ?;`,
      [stat, author]
    );

    message.react('✅');
    client.users.fetch(author, false).then((user) => {
      user.send({content: 'Erin is **5 minutes** away from giving you your villager! Please make sure you are **at the airport** ready to type in the code as you only have **5 minutes** to get to Erin\'s island (Sulani) before your request is forfeited. If you would like to cancel this request, please run \`!cancel\` in the discord server. Please remember nothing is required to be donated but if you leave something, she will not stop you.'})
    });

    }
}