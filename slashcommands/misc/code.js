const bot = require('../../config/bot.json');

module.exports = {
    name: 'code',
    description: 'Refers user to our  r/CodingHelp for additional if they would like to learn how to code.',
    execute(interaction) {

        const reddit = 'https://reddit.com/r/CodingHelp';
        const discord = 'https://discord.gg/geQEUBm';

        interaction.reply({ content: `Hey! Not sure if you knew this but you can visit r/CodingHelp to learn how to code. This is everywhere you can visit us:\n\nSubreddit: ${reddit}\nDiscord Server: ${discord}` });
    },

};