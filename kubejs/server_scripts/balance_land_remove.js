// Land vehicles (tires) are unavailable in this pack. Keep the borehead drill.
const LAND_ITEMS = ['tire', 'small_tire', 'large_tire', 'monstrous_tire', 'wheel_mount']

ServerEvents.recipes(event => {
  LAND_ITEMS.forEach(id => event.remove({ output: `offroad:${id}` }))
})
