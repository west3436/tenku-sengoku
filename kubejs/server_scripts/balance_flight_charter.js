// Grants the Aviator's Charter when the karakuri (Mechanisms) skill capstone is reached.
// The capstone runs `advancement grant @s only japan_skills:karakuri/aeronautics` (skill datapack).
const FLIGHT_ADVANCEMENT = 'japan_skills:karakuri/aeronautics'
const CHARTER_STAGE = 'tenku:flight_charter'
const CHARTER_ITEM = 'kubejs:flight_charter'

function grantCharter(player) {
  if (player.stages.has(CHARTER_STAGE)) return
  player.stages.add(CHARTER_STAGE)
  player.give(Item.of(CHARTER_ITEM))
  player.tell(Text.gold('飛行免許状 — You have earned the Aviator\'s Charter. The skies are open.'))
}

// Live unlock: fires once, the moment the advancement is earned.
PlayerEvents.advancement(FLIGHT_ADVANCEMENT, event => grantCharter(event.player))

// Backfill: players who reached the capstone before this script existed.
PlayerEvents.loggedIn(event => {
  const player = event.player
  if (player.stages.has(CHARTER_STAGE)) return
  if (player.isAdvancementDone(FLIGHT_ADVANCEMENT)) grantCharter(player)
})
