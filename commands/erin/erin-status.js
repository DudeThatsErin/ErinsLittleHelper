const Discord = require('discord.js');
const bot = require('../../config/bot.json');
const ee = require('../../config/embed.json');

module.exports = {
    name: 'my-status',
    aliases: ['mystatus', 'erinstatus', 'erin-status', 'estat', 'e-stat'],
    description: 'Pushes an embed to display in the channel about a certain update.',
    usage: '++my-status Status Message',
    ownerOnly: 'yes',
    async execute(message, args, client) {
        const channel = client.channels.cache.find(channel => channel.id === bot.announcementsId);
        const reason = args.slice(0).join(" ");
        if (!reason) return message.reply('You forgot to include a status message. SMH');


        let embed = new Discord.MessageEmbed()
            .setColor(ee.server_status)
            .setTitle('Erin has a new availability message for you!')
            .setDescription(`${reason}`)
            .setTimestamp()
            .setFooter('Want to suggest a feature for the server? Use ++suggest');
        message.react('👍');
        channel.send(`Hey, <@&970005238343929946>,`, embed);

    }
};