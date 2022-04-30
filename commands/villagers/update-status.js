const connection = require('../../database.js');

module.exports = {
  name: 'update-status',
  description: 'Allows Erin to update the status of villager requests.',
  usage: '!update-status [authorID] [villager\'s name] [new status message]',
  example: '!update-status 9999999999 Hopkins I have an updated status.',
  aliases: ['updatestatus', 'upstat', 'updatestat', 'up-stat', 'update-stat', 'newstatus', 'new-status'],
  ownerOnly: 'yes',
  async execute (message, args) {

    let author = args[0];
    if(!author) return message.reply('Please specify which person you would like to update the status for.');
    let villager = args[1];
    if(!villager) return message.reply('Please specify which villager you would like to update the status for.');
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
      `UPDATE villagers SET stat = ? WHERE authorId = ? AND villager = ?;`,
      [stat, author, villager]
    );

    message.react('✅');


    }
}