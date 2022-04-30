const connection = require('../../database.js');

module.exports = {
  name: '30min',
  description: 'Allows Erin to state when she is 30 min away from giving someone a villager.',
  usage: '!30min [authorID] [villager\'s name] [new status message]',
  example: `!30min 9999999999 Hopkins 30 minutes away!`,
  aliases: ['first-reminder', 'reminder1', 'remind1', '1r', '30minutes', '30-minutes'],
  ownerOnly: 'yes',
  async execute (message, args, client) {

    let author = args[0];
    if(!author) return message.reply('Please specify which person you would like to update the request for.');
    let villager = args[1];
    if(!villager) return message.reply('');
    let stat = args.slice(2).join(' ');
    if(!stat) return message.reply('Erin, you gotta tell me what status you would like to update this to!');
    console.log(villager);

    const check = await connection.query(
      `SELECT * FROM villagers WHERE authorId = ? AND villager = ?;`,
      [author, villager]
    );
    const checks = check[0];
    console.log(check);
    if(!checks || checks == null || checks == undefined) {
      message.react('❌');
      message.reply('This user either canceled their request or it was removed.');
      return;
    }

    await connection.query(
      `UPDATE villagers SET stat = ? WHERE authorId = ? AND villager = ?;`,
      [stat, author, villager]
    );

    message.react('✅');
    client.users.fetch(author, false).then((user) => {
      user.send({content: 'Erin is **30 minutes** away from giving you your villager! If you would like to cancel this request, please run \`!cancel\` in the discord server. Please remember nothing is required to be donated but if you leave something, she will not stop you.'})
    });

    }
}