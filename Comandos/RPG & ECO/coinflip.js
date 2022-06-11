module.exports = ({
 name: "coinflip",
 aliases: ['cf'],
 $if: "v4",
 code: `
$if[$randomText[cara;coroa]==coroa]
$if[$message[2]==coroa]
$get[lf] | Parabéns, você apostou **$get[aposta]** no lado coroa da moeda e Ganhou!!
$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$get[mds]];$authorID]
$endif
$endif
$if[$randomText[cara;coroa]==cara]
$if[$message[2]==cara]
$get[lf] | Parabéns, você apostou **$get[aposta]** no lado cara da moeda e Ganhou!!
$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID];$get[mds]];$authorID]
$endif
$endif

$if[$randomText[cara;coroa]==cara]
$if[$message[2]==coroa]
$get[lf] | Parabéns, você apostou **$get[aposta]** no lado coroa da moeda e Perdeu!!
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$get[mds]];$authorID]
$endif
$endif
$if[$randomText[cara;coroa]==coroa]
$if[$message[2]==cara]
$get[lf] | Parabéns, você apostou **$get[aposta]** no lado cara da moeda e Perdeu!!
$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID];$get[mds]];$authorID]
$endif
$endif



$djsEval[
if(args[1] !== "cara" && args[1] !== "coroa") {
message.reply("[ ❌ ] Insira \`cara\` ou \`coroa\`")
};no]
$onlyIf[$checkContains[$uri[$message;encode];%0A]==false;[ \❌ ] Não faça quebra de Linhas por favor!]
$onlyIf[$get[mds]<=$getGlobalUserVar[money;$authorID];**[ 💸 ]** Você não tem essa quantia de dinheiro na carteira.]

$onlyIf[$get[mds]>=100;**[ 💰 \]** Você só pode apostar mais de **100 LegacyCoins**.]

$onlyIf[$checkContains[$toLowercase[$get[mds]];.;,]==false;**[ 🚫 ]** Sem Numeros Decimais!]

$onlyIf[$isNumber[$get[mds]]==true;**[ 🔢 ]** Digite apenas números na quantia.]

$argsCheck[>1;**[ 💸 ]** Digite a quantidade de dinheiro que você quer apostar e \`cara/coroa\` logo após.]

$let[lf;💶]

$let[cf;$randomText[cara;coroa]]
$let[aposta;$numberSeparator[$get[mds];.]]
$let[mds;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];kk;000000;1];k;000;1];m;000000;1];b;000000000;1];all;$getGlobalUserVar[money;$authorID];1];t;000000000000;1]]
`
})