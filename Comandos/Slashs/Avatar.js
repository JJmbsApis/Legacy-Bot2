module.exports = ({
  name: "avatar",
  type: "interaction",
  prototype: "slash",
  code: `
$interactionReply[<@$authorID>;{newEmbed:{title:<a:white_estrelabranca:984604265899233281>  $replaceText[$replaceText[$checkContains[$username[$get[user]];a;b;c;d;e;f;g;h;j;k;l;m;n;o;p;q;r;s;t;u;v;w;x;y;x;A;B;C;D;E;F;G;H;I;J;K;L;M;N;O;P;Q;R;T;U;V;W;X;Y;Z];true;$username[$get[user]];1];false;Nome Indisponível;1]}

{description:Clique [aqui]($userAvatar[$get[user]]) para Baixar!}
{image:$userAvatar[$get[user]]}
{footer:Requisitado por  $user[$get[author];tag]:$userAvatar[$get[author]]}

{color:$randomText[#ffffff:#0000ff]}}]

$let[author;$authorID]
$let[user;$replaceText[$interactionData[options.data[0].value];undefined;$authorID;1]]
`
})