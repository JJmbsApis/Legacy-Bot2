module.exports = ({
  name: "botinfo",
  type: "interaction",
  prototype: "slash",
  code: `
$interactionReply[<@$authorID>;{newEmbed:{title:<a:coroaazul:984604069027020860> | Bot Info!}
{color:$randomText[#ffffff:#0000ff]}
{thumbnail:$userAvatar[$clientID]}
{description:
Eu sou o Legacy-Bot um bot de RPG & Economia, simples feito para o discord.


**[ <:engrenagem_azul:984604110747762728> ] Informações Principais**
 <:gray_user:984605565458210816> »  Usuários do Bot: **$allMembersCount**
 <:ServerPartnered:984605701093617707> »  Servidores: **$serverCount**
 📂 Comandos: **$commandsCount**
 <a:load:984605918757023804> » Estou acordado desde: **<t:$getVar[uptime]:F> ( <t:$getVar[uptime]:R> )**
 <:dev_azul:984606078278983710> » Fui Criado em: **<t:$truncate[$divide[$creationDate[$clientID;ms];1000]]:F> ( <t:$truncate[$divide[$creationDate[$clientID;ms];1000]]:R> )**

**[ <:engrenagem_azul:984604110747762728> ] **Hospedagem**
 <:cinza_host:984605595019645038> » Host: [Sem Host No Momento](https://aoi.leref.ga/#/)
 <a:adcl_pgPing:984603904987762688> » Ping: **$ping**
 <:momram:984606298647711765> » Memória Usada: **$truncate[$ram]mb**
 <:zj_inf_pontoazul:984604151382163467> » Processador Usado: **$cpu %**

**[ <:engrenagem_azul:984604110747762728> ] **Outras Informações**
<:node_js:984605177984208926> » Linguagem: **[JavaScript](https://javascript.com) ( [Aoi.js](https://akarui.leref.ga/v/5/) )**
<a:DBD_dev_emoji:984604000844414976> » Equipe:

>>> **[$user[942195785418801222;tag]](https://discord.com/users/942195785418801222) Developer**
**[$user[772940496439345192;tag]](https://discord.com/users/772940496439345192) CO-Developer**
**[$user[945039388457463869;tag]](https://discord.com/users/945039388457463869) CO-Developer**{}
**[$user[898621763594907658;tag]](https://discord.com/users/898621763594907658) CO-Developer**
**[$user[885897586945458216;tag]](https://discord.com/users/885897586945458216) CO-Developer**}};;;;no]
`
})