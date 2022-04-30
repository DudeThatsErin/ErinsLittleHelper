const connection = require('../../database.js');

module.exports = {
  name: 'start',
  description: 'Allows Erin to start villager requests.',
  usage: '!start [authorID] [new status message]',
  example: '!start 9999999999 I am starting your request!',
  aliases: ['starts', 'begin'],
  ownerOnly: 'yes',
  async execute (message, args, client) {

    let author = args[0];
    if(!author) return message.reply('Please specify which person you would like to start the request for.');
    let villager = args[1];
    if(!villager) return message.reply('You need to specify which villager you want to start for this user.');
    let stat = args.slice(2).join(' ');
    if(!stat) return message.reply('Erin, you gotta tell me what status you would like to update this to!');
    console.log(villager);

    const result = await connection.query(
      `SELECT * FROM villagers WHERE authorId = ? AND villager = ?;`,
      [author, villager]
    );
    console.log(result[0].villager)
    if(result[0].villager == undefined) {
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
      user.send({content: 'Erin has started your request. This means it should only be another 30-60 minutes for you to receive a villager. If you would like to cancel this request, please run \`!cancel\` in the discord server. Please remember nothing is required to be donated but if you leave something, she will not stop you.'});
    });


    }
}