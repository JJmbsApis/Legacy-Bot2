module.exports = ({
  name: "<@$clientID>",
  aliases: ["<@!$clientID>"],
  nonPrefixed: true,
  code: `
$addButton[1;Meu servidor;link;https://discord.gg/UJzpR34Gw8;no;<:suporte:984659220324548628>]
$addButton[1;Adicione-me;link;https://discordapp.com/oauth2/authorize?client_id=966184719697989642&scope=bot+identify+guilds+email+applications.commands&permissions=8;no;<:Invite:984613929319804928>]

*Olá **$username[$authorID]**, Eu sou o **$username[$clientID]**! Um bot focado em **Economia & RPG**.*
>>> <a:arrow_blue:984665999905275985>  *Meu prefixo nesse servidor é __$getServerVar[Prefix]__*
<a:arrow_blue:984665999905275985>  *Use __$getServerVar[Prefix]help__ para obter ajuda*

$reply[$messageID;no]
`
})