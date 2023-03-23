import { Client } from 'discord.js';
import config from './config';
import helpCommand from './commands';

const { intents, prefix, token } = config;
const mySecret = process.env['MY_SECRET']
const client = new Client({
  intents,
  presence: {
    status: 'online',
    activities: [{
      name: `${prefix}help`,
      type: 'Jogando'
    }]
  }
});

client.on('ready', () => {
  console.log(`Logged in as: ${client.user?.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  
  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift();

    switch(command) {
      case 'ping':
        const msg = await message.reply('Pinging...');
        await msg.edit(`Pong!Havokk é um animal ${Date.now() - msg.createdTimestamp}ms.`);
        break;

      case 'diga':
      case 'repita':
        if (args.length > 0) await message.channel.send(args.join(' '));
        else await message.reply('Você não enviou uma mensagem para eu repetir.');
        break;

      case 'ajuda':
        const embed = helpCommand(message);
        embed.setThumbnail(client.user!.displayAvatarURL());
        await message.channel.send({ embeds: [embed] });
        break;
    }
  }
});

client.login(mySecret);
