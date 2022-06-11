module.exports = ({
  name: "help",
  aliases: ["ajuda", "a", "h", "comandos"],
  code: `
$addSelectMenu[1;painel;Selecione uma categoria;1;1;no;Voltar:Volte para o Painel:menu_$authorID:no:<a:animated_house:984677954770567218>;Informações:Comandos informativos:info_$authorID:no:<:Info:984669711818162196>;Utilidades:Comandos úteis:util_$authorID:no:<a:utility:984670483737903135>;Moderação:Comandos moderativos:mod_$authorID:no:<:suporte:984659220324548628>;Diversão:Comandos divertidos:fun_$authorID:no:<a:Blue_Happy:984670645180841985>;Economia:Comandos economicos:eco_$authorID:no:<:economia:984667044370857994>;RPG:Comandos "medievais":rpg_$authorID:no:<:swords:984669226503639100>
]
<@$authorID>
$title[1;<:help:984662967956144179>  Painel de Ajuda!]
$color[1;$randomText[#ffffff;#0000ff]]
$description[1;

**Olá, precisando de ajuda? Você está no lugar certo Selecione a Categoria que você deseja visitar aqui no painel!**

>>> <a:arrow_blue:984665999905275985>  **Usuarios:  $allMembersCount**
<a:arrow_blue:984665999905275985>  **Servidores: $serverCount**
<a:arrow_blue:984665999905275985>  **Comandos: $commandsCount**

]
$image[1;https://share.creavite.co/Jt3t60xKWgypGlQP.gif]
$reply[$messageID;no]
`
})