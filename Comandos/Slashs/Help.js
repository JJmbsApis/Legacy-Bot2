module.exports = ({
  name: "help",
  type: "interaction",
  prototype: "slash",
  code: `
$interactionReply[<@$authorID>;{newEmbed:
{title:<:help:984662967956144179>  Painel de Ajuda!}
{color:$randomText[#ffffff;#0000ff]}
{description:

**Olá, precisando de ajuda? Você está no lugar certo Selecione a Categoria que você deseja visitar aqui no painel!**

>>> <a:arrow_blue:984665999905275985>  **Usuarios:  $allMembersCount**
<a:arrow_blue:984665999905275985>  **Servidores: $serverCount**
<a:arrow_blue:984665999905275985>  **Comandos: $commandsCount**}

{image:https://share.creavite.co/Jt3t60xKWgypGlQP.gif}};{actionRow:
{selectMenu:painel:Selecione uma categoria:1:1:true:no:}{selectMenuOptions:Voltar:menu_$authorID:Volte para o menu:no:<a:animated_house:984677954770567218>}
{selectMenuOptions:Informações:info_$authorID:Comandos informativos:no:<:Info:984669711818162196>}
{selectMenuOptions:Utilidades:util_$authorID:Comandos úteis:no:<a:utility:984670483737903135>}
{selectMenuOptions:Moderação:mod_$authorID:Comandos moderativos:no:<:suporte:984659220324548628>}
{selectMenuOptions:Diversão:fun_$authorID:Comandos divertidos:no:<a:Blue_Happy:984670645180841985>}
{selectMenuOptions:Economia:eco_$authorID:Comandos economicos:no:<:economia:984667044370857994>}
{selectMenuOptions:RPG:rpg_$authorID:Comandos "medievais":no:<:swords:984669226503639100>}}]
`
})