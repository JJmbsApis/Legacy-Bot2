module.exports = ({
  name: "links",
  type: "interaction",
  prototype: "slash",
  code: `
$interactionReply[<@$authorID>;{newEmbed:{title:<a:Important:984644848873275422>  Links Importantes!}{description:

(<:Invite:984613929319804928>)  **Invite**
[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=966184719697989642&scope=bot+identify+guilds+email+applications.commands&permissions=8)

(<:suporte:984659220324548628>)  **Meu Servidor**
[Clique aqui](https://discord.gg/UJzpR34Gw8)

(<:website:984659538835824650>)  **Web-site**
[Indisponivel](https://discord.com)}{color:$randomText[#FFFFFF;#0000FF]}{thumbnail:$userAvatar[$clientID]}}]
`
})