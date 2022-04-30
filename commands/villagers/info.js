const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'info',
  usage: '!info',
  ownerOnly: 'yes',
  description: 'Shoots out embeds with information on the server for the <#968559836813983764> channel.',
  execute(message) {

    const embed = new MessageEmbed()
      .setTitle('Welcome to Erin\'s Animal Crossing New Horizons Giveaway Server')
      .setDescription('This is where Erin trades Villagers and *eventually* items.\nErin will post in <#968356110358679592> the times she will be live each week. Generally, she can do about 1 villager per hour she is live. All times are in **Eastern Standard Time**. You can use [this converter](https://www.timeanddate.com/worldclock/converter.html) to convert the times to your time zone.\n\nYou can chose your roles in <#968559886151602246>, if you would like to make a suggestion, you can use \`!suggestion [your suggestion here]\`, you can vote on suggestions in <#968356257910100018>. Talk about ACNH in <#968562658515255326>, talk about the villager trade in <#968560199575150643>.\nErin will post in <#968356216306798622> if the game is having an update or online will be unavailable for some reason.')
      .setColor('#17A589');
    
    const embed1 = new MessageEmbed()
      .setTitle('Villager Trade Information')
      .setDescription('If you would like a villager, please make sure to follow the following rules & steps!')
      .addFields(
        {
          name: 'Rules:',
          value: 'Please give Erin time to get this completed. You can check the server announcements page to see the hours she will be working on giving away villagers. These times are all in Eastern Standard Time. You can google a converter to your time zone if you are not sure what time that is where you live.'
        },
        {
          name: 'Steps',
          value: 'Once you request a villager, Erin will get started with getting the villager ready. This is a process that can take anywhere to 30 minutes to an hour depending on the villager *per villager*. Erin has to invite your villager to her island 3x, get them a plot and then kick them out by inviting another villager 3x and giving them your villager\'s plot.\n\nOnce you are next up, your status will change from *waiting* to *in progress* and you will receive a 30-minute and 5-min reminder. After those, Erin will send you the Do Do Code. Once you receive that Do Do Code, Erin provides **FIVE MINUTES** for you to get to her island, no questions. If you do not come in those 5 minutes, Erin will move on and you will need to restart the process. If you no show on **5** separate occasions, you will be banned from using this service.',
        },
        {
          name: 'Questions?',
          value: 'If you have questions, you can ask them in the server. If you need to talk to the mods about something privately, you can do that by sending a message to the modmail bot to talk to them privately. Erin does not like pings unless it is for an urgent matter (bot not working is one example). Erin is happy to answer any and all questions.'
        },
        {
          name: 'Okay, that\'s all fine, now how do I get access to this system?',
          value: 'Just react to this embed with 💟 to get access to the system. This gives you the <@&970005238343929946> role so that Erin can ping you with updates in <#968356110358679592>.'
        }
      )
      .setColor('#CA6F1E');

    const roles1 = new MessageEmbed()
      .setTitle('Welcome to the Role Selection Channel!')
      .setDescription('This is where you can get access to a multitude of roles. If you would like access to the server in general, react to this message with 🦝.')
      .setColor('#48C9B0');
    
    const roles2 = new MessageEmbed()
      .setTitle('Set your Gender Role')
      .setDescription('React with one of these to let us know what gender you identify as:\`\`\`👧 Girl\n👦 Boy\n😃 Trans\n🙃 Other\`\`\`')
      .setColor('#D0D3D4');

    const roles3 = new MessageEmbed()
      .setTitle('What would you like to be notified of?')
      .setDescription('React with one of these to let us know what you would like to be notified of:\`\`\`🎮 Game Announcements\n🤖 Bot Updates\n💻 Server Updates\n🥳 Giveaways\`\`\`')
      .setColor('#F7DC6F');

    const roles4 = new MessageEmbed()
      .setTitle('Are your Direct Messages/Private Messages open or closed?')
      .setDescription('You need them open for the bot BUT if you use this role, this will help to prevent people from randomly DMing you.\`\`\`📨 DMs Open\n✉️ DMs Closed\`\`\`')
      .setColor('#E67E22');

    const roles5 = new MessageEmbed()
      .setTitle('What star level is your island?')
      .setDescription('Tell everyone what star level your island is, 1-5.\`\`\`⭐ 1 Star\n🌟 2 Star\n🌠 3 Star\n🔯 4 Star\n🤩 5 Star\`\`\`')
      .setColor('#8E44AD');

    const roles6 = new MessageEmbed()
      .setTitle('Set your color!')
      .setDescription('You can choose the color of your username with this embed.\`\`\`🟥 Red\n🟦 Blue\n🟩 Green\n🟨 Yellow\n🟧 Orange\n◼️ Black\n❕Grey\n🟪 Purple\n💘 Pink\n🍵 Teal\`\`\`')
      .setColor('#F1948A');

    message.delete(1);
    message.channel.send({ embeds: [roles6] })

  }
}