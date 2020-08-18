const Discord = require('discord.js');

exports.run = (client, message, args) =>{
    var cats = [
        'http://thecatapi.com/api/images/get?format=src&type=png',


    ];

    const embed = new Discord.RichEmbed()
        .setColor("#15f153")
        .setDescription(`Oh look i found a cute cat :cat:`)
        .setImage(cats[Math.floor(Math.random()*cats.length)]);

    return message.channel.send(embed);    
}