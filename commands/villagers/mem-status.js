const connection = require('../../database.js');
const Discord = require('discord.js');

module.exports = {
  name: 'status',
  description: 'Check the status of you request(s).',
  usage: '!status',
  aliases: ['stat', 'Status', 'STATUS', 'check-status', 'checkstatus'],
  cooldown: '120',
  async execute (message, args, client) {
    let user = message.author.id;
    let use = message.author;
    let av = use.displayAvatarURL({ dynamic: true });
    let information = '';

        const info = await connection.query(
          `SELECT * FROM villagers WHERE authorId = ?;`,
          [user]
        );
        if (info[0].stat == null || !info[0].stat || info[0].stat == undefined) {
          message.react('❓');
          message.reply('You have not requested any villagers yet. Please run the \`!request\` command to request a villager.');
          return;
        }
        for (let i = 0; i < info[0].length; i++) {
          const data = info[0];
          const status = data[i].stat;
          const villager = data[i].villager;


          information += `${i + 1}. ${villager} - ${status}\n`;
        }
        let embed = new Discord.MessageEmbed()
          .setTitle('Thanks for requesting a villager!')
          .setThumbnail(av)
          .setColor('#eeeeee')
          .setDescription(`Hello, ${user.tag}! So, you are wanting to know what is going on with your request(s). Great question!\n\nThese are the current villagers you have requested and their status(es):\n\`\`\`${information}\`\`\``)
          .addFields(
            {
              name: 'Other Information:',
              value: 'Please give Erin time to get this completed. You can check the server announcements page to see the hours she will be working on giving away villagers. These times are all in Eastern Standard Time. You can google a converter to your time zone if you are not sure what time that is where you live.'
            },
            {
              name: 'Steps',
              value: 'Once you request a villager, Erin will get started with getting the villager ready. This is a process that can take anywhere to 30 minutes to an hour depending on the villager *per villager*. Erin has to invite your villager to her island 3x, get them a plot and then kick them out by inviting another villager 3x and giving them your villager\'s plot.\n\nOnce you are next up, your status will change from *waiting* to *in progress* and you will receive a 30-minute and 5-min reminder. After those, Erin will send you the Do Do Code. Once you receive that Do Do Code, Erin provides **FIVE MINUTES** for you to get to her island, no questions. If you do not come in those 5 minutes, Erin will move on and you will need to restart the process. If you no show on **5** separate occasions, you will be banned from using this service.',
            },
            {
              name: 'Questions?',
              value: 'If you have questions, you can ask them in the server. If you need to talk to the mods about something privately, you can do that by sending a message to the modmail bot to talk to them privately. Erin does not like pings unless it is for an urgent matter (bot not working is one example). Erin is happy to answer any and all questions.'
            }
          );
          message.react('📨');
        use.send({ embeds: [embed] });


    }
}