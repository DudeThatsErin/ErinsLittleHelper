const connection = require('../../database.js');
const villagers = require('../../config/villagers.json');
const Discord = require('discord.js');

module.exports = {
  name: 'request',
  description: 'Request to have a villager given to you. You can only request 1 villager at a time. You can request as many villagers as you want, just only one at a time.',
  usage: '!request [villager\'s name]',
  example: '!request Yuka',
  aliases: ['want', 'canihave', 'requests', 'req', 'reqs'],
  cooldown: '7200',
  async execute (message, args, client) {
    let villager = args[0];
    if(!villager) return message.reply({ content: 'You need to specify which villager you would like to invite!' });
    let user = message.author.id;
    let use = message.author;
    let name = message.author.username;
    let av = message.author.displayAvatarURL({ dynamic: true });
    let data = villagers.name.split(', ');
    let vill = null;
    let stat = 'waiting for Erin';
    //console.log(villager);

    const result = await connection.query(
      `SELECT * FROM villagers WHERE authorId = ? AND villager = ?;`,
      [user, villager]
    );
    let results = result[0][0].villager;
    //console.log(results);
    if(results == villager) {
      message.react('❌');
      message.reply('You already requested this villager to your island. Please give Erin time to bring it. To check the status of your request run \`!status\`. To cancel run \`!cancel\`. Thank you!');
      return;
    }

    for(let i = 0; i < data.length; i++) {

      if(data[i] == villager) {
        vill = data[i];
        //console.log(vill);

        await connection.query(
          `INSERT INTO villagers (authorId, avatar, villager, stat) VALUES (?, ?, ?, ?);`,
          [user, av, villager, stat]
        );
        const info = await connection.query(
          `SELECT * FROM villagers WHERE authorId = ? AND villager = ?;`,
          [user, villager]
        );
        let embed = new Discord.MessageEmbed()
          .setTitle('Thanks for requesting a villager!')
          .setThumbnail(av)
          .setColor('#eeeeee')
          .setDescription(`Hello, ${name}! You requested to invite **${villager}** to your island! Erin from *Sulani* will be inviting you to her island soon with a Do Do Code! This is how it works with everyone:`)
          .addFields(
            {
              name: 'Steps',
              value: 'Once you request a villager, Erin will get started with getting the villager ready. This is a process that can take anywhere to 30 minutes to an hour depending on the villager *per villager*. Erin has to invite your villager to her island 3x, get them a plot and then kick them out by inviting another villager 3x and giving them your villager\'s plot.\n\nOnce you are next up, your status will change from *waiting* to *in progress* and you will receive a 30-minute and 5-min reminder. After those, Erin will send you the Do Do Code. Once you receive that Do Do Code, Erin provides **FIVE MINUTES** for you to get to her island, no questions. If you do not come in those 5 minutes, Erin will move on and you will need to restart the process. If you no show on **5** separate occasions, you will be banned from using this service.',
            },
            {
              name: 'Questions?',
              value: 'If you have questions, you can ask them in the server. If you need to talk to the mods about something privately, you can do that by sending a message to the modmail bot to talk to them privately. Erin does not like pings unless it is for an urgent matter (bot not working is one example). Erin is happy to answer any and all questions.',
            },
            {
              name: 'Other Commands',
              value: 'There are a few other commands that you can use to check the status of your request as well as remove your request entirely. You can use the buttons below to run those as well.\n\n\`!cancel\` - use this to cancel your request to invite a villager.\n\`!status\` - use this to check on the status of your request.'
            }
          )
        use.send({ embeds: [embed] });
        message.react('👍')

          }


    }

    if(vill == null) {
      message.reply({ content: 'Unable to complete your request. Please run the \`/villagers\` command to see a full list of our names of villagers to make sure you are typing it correctly. This command is **case sensitive** and **space sensitive** if you have to run the \`/villagers\` command and copy and paste the name.', });
      return;
    }
  }
}