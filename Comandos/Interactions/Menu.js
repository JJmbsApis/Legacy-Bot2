module.exports = [{
  name: "painel",
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[<@$authorID>;{newEmbed:{title:<:Info:984669711818162196> Painel - Informações!}{color:$randomText[#ffffff;#0000ff]}{thumbnail:$userAvatar[$clientID]}{color:$randomText[#ffffff;#0000ff]}{thumbnail:$userAvatar[$clientID]}{description:
\`$get[prefix]botinfo
$get[prefix]userinfo\`
}};{actionRow:
{selectMenu:painel:Selecione uma categoria:1:1:true:no:}{selectMenuOptions:Voltar:menu_$authorID:Volte para o menu:no:<a:animated_house:984677954770567218>}
{selectMenuOptions:Informações:info_$authorID:Comandos informativos:no:<:Info:984669711818162196>}
{selectMenuOptions:Utilidades:util_$authorID:Comandos úteis:no:<a:utility:984670483737903135>}
{selectMenuOptions:Moderação:mod_$authorID:Comandos moderativos:no:<:suporte:984659220324548628>}
{selectMenuOptions:Diversão:fun_$authorID:Comandos divertidos:no:<a:Blue_Happy:984670645180841985>}
{selectMenuOptions:Economia:eco_$authorID:Comandos economicos:no:<:economia:984667044370857994>}
{selectMenuOptions:RPG:rpg_$authorID:Comandos "medievais":no:<:swords:984669226503639100>}

}]
$let[prefix;$getServerVar[Prefix]]
$onlyIf[$interactionData[values[0]]==info_$authorID;]
`
}, {
  name: "painel",
  type: "interaction",
  prototype: "selectMenu",
  code: ` 
$interactionUpdate[<@$authorID>;{newEmbed:{title:<a:utility:984670483737903135> Painel - Utilidades!}{color:$randomText[#ffffff;#0000ff]}{thumbnail:$userAvatar[$clientID]}{description:
\`/links\`
}};{actionRow:
{selectMenu:painel:Selecione uma categoria:1:1:true:no:}{selectMenuOptions:Voltar:menu_$authorID:Volte para o menu:no:<a:animated_house:984677954770567218>}
{selectMenuOptions:Informações:info_$authorID:Comandos informativos:no:<:Info:984669711818162196>}
{selectMenuOptions:Utilidades:util_$authorID:Comandos úteis:no:<a:utility:984670483737903135>}
{selectMenuOptions:Moderação:mod_$authorID:Comandos moderativos:no:<:suporte:984659220324548628>}
{selectMenuOptions:Diversão:fun_$authorID:Comandos divertidos:no:<a:Blue_Happy:984670645180841985>}
{selectMenuOptions:Economia:eco_$authorID:Comandos economicos:no:<:economia:984667044370857994>}
{selectMenuOptions:RPG:rpg_$authorID:Comandos "medievais":no:<:swords:984669226503639100>}

}]
$let[prefix;$getServerVar[Prefix]]
$onlyIf[$interactionData[values[0]]==util_$authorID;]
`
}, {
  name: "painel",
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[<@$authorID>;{newEmbed:{title:<:suporte:984659220324548628> Painel - Moderação!}{color:$randomText[#ffffff;#0000ff]}{thumbnail:$userAvatar[$clientID]}{description:
\`\`\`
Nenhum Comando no Momento
\`\`\`
}};{actionRow:
{selectMenu:painel:Selecione uma categoria:1:1:true:no:}{selectMenuOptions:Voltar:menu_$authorID:Volte para o menu:no:<a:animated_house:984677954770567218>}
{selectMenuOptions:Informações:info_$authorID:Comandos informativos:no:<:Info:984669711818162196>}
{selectMenuOptions:Utilidades:util_$authorID:Comandos úteis:no:<a:utility:984670483737903135>}
{selectMenuOptions:Moderação:mod_$authorID:Comandos moderativos:no:<:suporte:984659220324548628>}
{selectMenuOptions:Diversão:fun_$authorID:Comandos divertidos:no:<a:Blue_Happy:984670645180841985>}
{selectMenuOptions:Economia:eco_$authorID:Comandos economicos:no:<:economia:984667044370857994>}
{selectMenuOptions:RPG:rpg_$authorID:Comandos "medievais":no:<:swords:984669226503639100>}

}]
$let[prefix;$getServerVar[Prefix]]
$onlyIf[$interactionData[values[0]]==mod_$authorID;]
`
}, {
  name: "painel",
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[<@$authorID>;{newEmbed:{title:<a:Blue_Happy:984670645180841985> Painel - Diversão!}{color:$randomText[#ffffff;#0000ff]}{thumbnail:$userAvatar[$clientID]}{description:
\`\`\`
Nenhum Comando no Momento
\`\`\`
}};{actionRow:
{selectMenu:painel:Selecione uma categoria:1:1:true:no:}{selectMenuOptions:Voltar:menu_$authorID:Volte para o menu:no:<a:animated_house:984677954770567218>}
{selectMenuOptions:Informações:info_$authorID:Comandos informativos:no:<:Info:984669711818162196>}
{selectMenuOptions:Utilidades:util_$authorID:Comandos úteis:no:<a:utility:984670483737903135>}
{selectMenuOptions:Moderação:mod_$authorID:Comandos moderativos:no:<:suporte:984659220324548628>}
{selectMenuOptions:Diversão:fun_$authorID:Comandos divertidos:no:<a:Blue_Happy:984670645180841985>}
{selectMenuOptions:Economia:eco_$authorID:Comandos economicos:no:<:economia:984667044370857994>}
{selectMenuOptions:RPG:rpg_$authorID:Comandos "medievais":no:<:swords:984669226503639100>}

}]
$let[prefix;$getServerVar[Prefix]]
$onlyIf[$interactionData[values[0]]==fun_$authorID;]
`
}, {
  name: "painel",
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[<@$authorID>;{newEmbed:{title:<:economia:984667044370857994> Painel - Economia!}{color:$randomText[#ffffff;#0000ff]}{thumbnail:$userAvatar[$clientID]}{description:
\`\`\`
Nenhum Comando no Momento
\`\`\`
}};{actionRow:
{selectMenu:painel:Selecione uma categoria:1:1:true:no:}{selectMenuOptions:Voltar:menu_$authorID:Volte para o menu:no:<a:animated_house:984677954770567218>}
{selectMenuOptions:Informações:info_$authorID:Comandos informativos:no:<:Info:984669711818162196>}
{selectMenuOptions:Utilidades:util_$authorID:Comandos úteis:no:<a:utility:984670483737903135>}
{selectMenuOptions:Moderação:mod_$authorID:Comandos moderativos:no:<:suporte:984659220324548628>}
{selectMenuOptions:Diversão:fun_$authorID:Comandos divertidos:no:<a:Blue_Happy:984670645180841985>}
{selectMenuOptions:Economia:eco_$authorID:Comandos economicos:no:<:economia:984667044370857994>}
{selectMenuOptions:RPG:rpg_$authorID:Comandos "medievais":no:<:swords:984669226503639100>}

}]
$let[prefix;$getServerVar[Prefix]]
$onlyIf[$interactionData[values[0]]==eco_$authorID;]
`
}, {
  name: "painel",
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[<@$authorID>;{newEmbed:{title:<:swords:984669226503639100> Painel - Medieval!}{color:$randomText[#ffffff;#0000ff]}{thumbnail:$userAvatar[$clientID]}{description:
\`\`\`
Nenhum Comando no Momento
\`\`\`
}};{actionRow:
{selectMenu:painel:Selecione uma categoria:1:1:true:no:}{selectMenuOptions:Voltar:menu_$authorID:Volte para o menu:no:<a:animated_house:984677954770567218>}
{selectMenuOptions:Informações:info_$authorID:Comandos informativos:no:<:Info:984669711818162196>}
{selectMenuOptions:Utilidades:util_$authorID:Comandos úteis:no:<a:utility:984670483737903135>}
{selectMenuOptions:Moderação:mod_$authorID:Comandos moderativos:no:<:suporte:984659220324548628>}
{selectMenuOptions:Diversão:fun_$authorID:Comandos divertidos:no:<a:Blue_Happy:984670645180841985>}
{selectMenuOptions:Economia:eco_$authorID:Comandos economicos:no:<:economia:984667044370857994>}
{selectMenuOptions:RPG:rpg_$authorID:Comandos "medievais":no:<:swords:984669226503639100>}

}]
$let[prefix;$getServerVar[Prefix]]
$onlyIf[$interactionData[values[0]]==rpg_$authorID;]
`
}, {
  name: "painel",
  type: "interaction",
  prototype: "selectMenu",
  code:`
$interactionUpdate[<@$authorID>;{newEmbed:{title:<:help:984662967956144179>  Painel de Ajuda!}{color:$randomText[#ffffff;#0000ff]}{description:
**Olá, precisando de ajuda? Você está no lugar certo Selecione a Categoria que você deseja visitar aqui no painel!**

>>> <a:arrow_blue:984665999905275985>  **Usuarios:  $allMembersCount**
<a:arrow_blue:984665999905275985>  **Servidores: $serverCount**
<a:arrow_blue:984665999905275985>  **Comandos: $commandsCount**}{image:https://share.creavite.co/Jt3t60xKWgypGlQP.gif}};{actionRow:
{selectMenu:painel:Selecione uma categoria:1:1:true:no:}{selectMenuOptions:Voltar:menu_$authorID:Volte para o menu:no:<a:animated_house:984677954770567218>}
{selectMenuOptions:Informações:info_$authorID:Comandos informativos:no:<:Info:984669711818162196>}
{selectMenuOptions:Utilidades:util_$authorID:Comandos úteis:no:<a:utility:984670483737903135>}
{selectMenuOptions:Moderação:mod_$authorID:Comandos moderativos:no:<:suporte:984659220324548628>}
{selectMenuOptions:Diversão:fun_$authorID:Comandos divertidos:no:<a:Blue_Happy:984670645180841985>}
{selectMenuOptions:Economia:eco_$authorID:Comandos economicos:no:<:economia:984667044370857994>}
{selectMenuOptions:RPG:rpg_$authorID:Comandos "medievais":no:<:swords:984669226503639100>}

}]
$onlyIf[$interactionData[values[0]]==menu_$authorID;]
`
}]

/*
$addSelectMenu[1;painel;Selecione uma categoria;1;1;no;Voltar:Volte para o Painel:menu_$authorID:no:<a:animated_house:984677954770567218>;Informações:Comandos informativos:info_$authorID:no:<:Info:984669711818162196>;Utilidades:Comandos úteis:util_$authorID:no:<a:utility:984670483737903135>;Moderação:Comandos moderativos:mod_$authorID:no:<:suporte:984659220324548628>;Diversão:Comandos divertidos:fun_$authorID:no:<a:Blue_Happy:984670645180841985>;Economia:Comandos economicos:eco_$authorID:no:<:economia:984667044370857994>;RPG:Comandos "medievais":rpg_$authorID:no:<:swords:984669226503639100>*/