module.exports = ({
  name: "avatar",
  aliases: ["av", "pfp"],
  code: `

$title[1;<a:white_estrelabranca:984604265899233281>  $replaceText[$replaceText[$checkContains[$username[$findUser[$message]];a;b;c;d;e;f;g;h;j;k;l;m;n;o;p;q;r;s;t;u;v;w;x;y;x;A;B;C;D;E;F;G;H;I;J;K;L;M;N;O;P;Q;R;T;U;V;W;X;Y;Z];true;$username[$findUser[$message]];1];false;Nome Indisponível;1]]

$description[1;Clique [aqui]($userAvatar[$findUser[$message]]) para Baixar!]
$image[1;$userAvatar[$findUser[$message]]]
$footer[1;Requisitado por:  $user[$authorID;tag];$authorAvatar]

$color[1;$randomText[#ffffff:#0000ff]]
$reply[$messageID;no]
`
})