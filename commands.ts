import { Message, MessageEmbed } from 'discord.js';
import config from './config';

const { prefix } = config;

const commands: { [name: string]: { aliases?: string[]; description: string; format: string } } = {
  'ajuda': {
    description: 'Mostra os detalhes dos meus comandos.',
    format: 'ajuda'
  },
  'ping': {
    description: 'Checa a conectividade sua com meu discord\.',
    format: 'ping'
  },
  'diga': {
    aliases: ['repita'],
    description: 'Repito qualquer coisa.',
    format: 'diga <message>'
  }
}

export default function helpCommand(message: Message) {
  const footerText = message.author.tag;
  const footerIcon = message.author.displayAvatarURL();
  const embed = new MessageEmbed()
    .setTitle('MENU DE AJUDA')
    .setColor('GREEN')
    .setFooter({ text: footerText, iconURL: footerIcon });

  for (const commandName of Object.keys(commands)) {
    const command = commands[commandName];
    let desc = command.description + '\n\n';
    if (command.aliases) desc += `**Aliases :** ${command.aliases.join(', ')}\n\n`;
    desc += '**Format**\n```\n' + prefix + command.format + '```';

    embed.addField(commandName, desc, false);
  }

  return embed;
}