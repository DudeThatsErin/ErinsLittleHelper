const config = require('../config/config.json');
const Discord = require('discord.js');
const me = require('../config/owner.json');

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        //console.log(message)
        // delete slash commands
        //message.guild.commands.set([])
        //console.log(await message.guild.commands.fetch());
        client.cooldowns = new Discord.Collection();
        const { cooldowns } = client;

        if (message.author.bot) {
            //console.log('bot message');
            return;
        };
        if (!message.content.startsWith(config.prefix)) {
            //console.log('does not start with prefix.');
            return;
        };
        const args = message.content.slice(config.prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if (!command) return message.channel.send({ content: `That command does not exist. Run \`/help\` to see all of my commands.` });
        //console.log(command);

        // owner only
        if (command.ownerOnly === 'yes') {
            if (!message.author.id === me.id) {
                return message.reply({ content: `This is only a command Erin (<@${me.id}>) can use. If you are seeing this in error use the \`${config.prefix}report\` command.` });
            }
        }


        const modRoles = ['968567256403550218'];
        const modIDs = ['455926927371534346'];
        const isMod = modIDs.reduce((alrdyGod, crr) => alrdyGod || message.content.toLowerCase().split(' ').includes(crr), false);
        let value = 0;
        if (message.channel.parentID === '382210817636040706') {
            for (const ID of modRoles) {
                if (!message.member.roles.cache.has(ID)) {
                    value++
                }
                //message.channel.parentID === '382210817636040706' &&
                if (value != modRoles.length && isMod) {
                    message.react('???');
                    message.reply({ content: `Please do not ping the mods. If you need to contact them, please message <@575252669443211264> to open a ModMail ticket. Thank you!` });
                }
            }
        }

        if (command.modOnly === 'yes') {
            for (const ID of modRoles) {
                if (!message.member.roles.cache.has(ID)) {
                    value++
                }

                if (value == modRoles.length) {
                    message.react('???');
                    message.reply({ content: `This is a command only moderators can use. You do not have the required permissions. Moderators have the \`@Moderator\` role or \`@&Junior Mod\` roles. Please run \`${config.prefix}report [issue]\` if you are seeing this in error.` });
                    return;
                }
            }
        }

        // command cooldowns
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Discord.Collection());
        }

        const now = Date.now();
        const timestamps = cooldowns.get(command.name);
        const cooldownAmount = (command.cooldown || 1) * 1000;

        if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

            if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                return message.reply(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
            }
        }

        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

        // actually running the commands.
        try {
            command.execute(message, args, client);
        } catch (error) {
            console.error(error);
            const embed = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle('Oh no! An _error_ has appeared!')
                .setDescription(`**Contact Bot Owner:** <@${me.id}>`)
                .addFields({
                    name: '**Error Name:**',
                    value: `\`${error.name}\``
                }, {
                    name: '**Error Message:**',
                    value: `\`${error.message}\``
                }, {
                    name: '**Error Location:**',
                    value: `\`${error.stack}\``
                }, {
                    name: '**Ways to Report:**',
                    value: `Run the \`${config.prefix}report\` command, Message her on Discord, Ping her, or Email her at dudethatserin@outlook.com\n\nPlease include all of the information in this embed (message) as well as any additional information you can think to provide. Screenshots are also VERY helpful. Thank you!`
                })
                .setTimestamp()
                .setFooter(`Thanks for using ${client.user.tag}! I'm sorry you encountered this error!`, `${client.user.displayAvatarURL()}`)
            message.channel.send({ embeds: [embed] });
        }
    }
}// end client.on message