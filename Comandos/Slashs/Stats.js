module.exports = ({
  name: "stats",
  type: "interaction",
  prototype: "slash",
  code: `
$interactionReply[<@$authorID>;{newEmbed:{title:<a:adcl_pgPing:984603904987762688> | Pong!}
{description:
 Ping: [ **$pingms** ]
 MessagePing: [ **$messagepingms** ]}}]
`
})