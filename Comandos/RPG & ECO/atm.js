module.exports = ({
  name: "atm",
  aliases: ['bal', 'saldo', 'dinheiro', 'coins', 'legacycoins'],
  code: `
💶 | $replaceText[$replaceText[$checkCondition[$findUser[$message;yes]==$authorID];true;**Você**;1];false;<@$findUser[$message;yes]>;1] Tem **$numberSeparator[$getGlobalUserVar[money;$findUser[$message;yes]];.]** LegacyCoins!

`



  
})