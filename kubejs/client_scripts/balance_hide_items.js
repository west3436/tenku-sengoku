// Hide the now-uncraftable land-vehicle items from EMI's index.
const HIDDEN_ITEMS = ['tire', 'small_tire', 'large_tire', 'monstrous_tire', 'wheel_mount']

RecipeViewerEvents.removeEntriesCompletely('item', event => {
  HIDDEN_ITEMS.forEach(id => event.remove(`offroad:${id}`))
})
