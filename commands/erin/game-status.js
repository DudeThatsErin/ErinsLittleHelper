const Discord = require('discord.js');
const bot = require('../../config/bot.json');
const ee = require('../../config/embed.json');

module.exports = {
    name: 'game-status',
    aliases: ['gamestatus', 'gameupdate', 'game-update', 'gupdate', 'gup'],
    description: 'Pushes an embed to display in the channel about a certain update.',
    usage: '++game-status Status Message',
    modOnly: 'yes',
    ownerOnly: 'no',
    async execute(message, args, client) {
        const channel = client.channels.cache.find(channel => channel.id === bot.announcementsId);
        const reason = args.slice(0).join(" ");
        if (!reason) return message.reply('You forgot to include a status message. SMH');


        let embed = new Discord.MessageEmbed()
            .setColor(ee.server_status)
            .setTitle('Hello, The Moderators have a new update for you!')
            .setDescription(`${reason}`)
            .setTimestamp()
            .setFooter('Want to suggest a feature for the server? Use ++suggest');
        message.react('👍');
        channel.send(`Hey, <@&970009899734028439>,`, embed);

    }
};