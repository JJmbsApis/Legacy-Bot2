
module.exports = ({
  name: "atm",
  type: "interaction",
  prototype: "slash",
  code: `
$interactionReply[💶 | $replaceText[$replaceText[$checkCondition[$get[user]==$authorID];true;**Você**;1];false;<@$get[user]>;1] Tem **$numberSeparator[$getGlobalUserVar[money;$get[user]];.]** LegacyCoins!]

$let[user;$replaceText[$interactionData[options.data[0].value];undefined;$authorID;1]]
` 
})