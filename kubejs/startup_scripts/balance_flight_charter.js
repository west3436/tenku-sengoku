// 飛行免許状 — the Aviator's Charter. A non-consumed key item gating flight craft.
StartupEvents.registry('item', event => {
  event.create('flight_charter')
    .displayName('Aviator\'s Charter')
    .maxStackSize(1)
    .containerItem('kubejs:flight_charter') // returned to the grid each craft = never consumed
    .tooltip(Text.gray('Earned by mastering からくり, the Way of Mechanisms.'))
    .tooltip(Text.darkGray('Kept when crafting · required for airship & aeroplane parts.'))
})
