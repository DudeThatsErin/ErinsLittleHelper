const Discord = require('discord.js');
const bot = require('../../config/bot.json');
const ee = require('../../config/embed.json');

module.exports = {
    name: 'bot-status',
    aliases: ['bot-update', 'botstatus', 'botupdate'],
    description: 'Pushes an embed to display in the channel about a certain update.',
    usage: '++bot-status Status Message',
    modOnly: 'yes',
    async execute(message, args, client) {

        const channel = client.channels.cache.find(channel => channel.id === bot.announcementsId);
        const reason = args.slice(0).join(" ");
        if (!reason) return message.reply('Mods, you forgot to include a status message. SMH');


        let embed = new Discord.MessageEmbed()
            .setColor(ee.bot_status)
            .setTitle('Hello, The Moderators have a new update for you!')
            .setDescription(`${reason}`)
            .setTimestamp()
            .setFooter('Want to suggest a feature for the bot? Use ++suggest');
        message.react('👍');
        channel.send({ content: `Hey, <@&970009935612112926>,`, embeds: [embed] });



    }
};