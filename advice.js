const Discord = require('discord.js');

exports.run = (client, message, args) =>{
    var advice = ['you dont stand a chance nerd.','you still dont stand a chance'];

    const embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .addField("your advice", advice[Math.floor(Math.random()*advice.length)], true)
        .addField("second opinion", advice[Math.floor(Math.random()*advice.length)], true);

    return message.channel.send(embed);    
}