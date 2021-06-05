const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', ()=> {
   console.log('hugbot is on');
});

const prefix = ('!')
client.on('message', message =>{
      if(!message.content.startsWith(prefix) || message.author.bot) return;

      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();

      if(command === 'hug'){
          message.channel.send('xoxo https://tenor.com/view/anime-hug-sweet-love-gif-14246498');

      } else if (command == 'kiss'){
          message.channel.send('*mwuah* https://tenor.com/view/anime-couple-peck-cute-kiss-gif-12612515')


      }
});





client.login('NO PEEKING');
