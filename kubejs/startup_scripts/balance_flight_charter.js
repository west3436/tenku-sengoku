// 飛行免許状 — the Aviator's Charter. A non-consumed key item gating flight craft.
StartupEvents.registry('item', event => {
  event.create('flight_charter')
    .displayName('Aviator\'s Charter')
    .maxStackSize(1)
    .tooltip(Text.gray('Earned by mastering からくり, the Way of Mechanisms.'))
    .tooltip(Text.darkGray('Kept when crafting · required for airship & aeroplane parts.'))
})

// The self-returning remainder can't be set in the builder: containerItem() resolves its
// id during registration, before the charter itself exists, so the lookup yields AIR and
// the charter got consumed on craft. This event runs after registration, so the
// self-reference resolves.
ItemEvents.modification(event => {
  event.modify('kubejs:flight_charter', item => {
    item.craftingRemainder = Item.of('kubejs:flight_charter').item
  })
})
