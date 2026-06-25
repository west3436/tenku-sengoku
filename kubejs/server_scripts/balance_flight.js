// Airships & airplanes are endgame: flight-enabling recipes cost late-game materials
// AND require the Aviator's Charter in the grid. The charter is self-returning
// (containerItem = itself), so one copy permanently unlocks crafting with no loss.
const CHARTER = 'kubejs:flight_charter'
const ENVELOPE_COLORS = [
  'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray',
  'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
]

ServerEvents.recipes(event => {
  // --- Airship lift: hot-air envelopes (were trivially wool+sticks) ---
  ENVELOPE_COLORS.forEach(c => {
    event.remove({ output: `aeronautics:${c}_envelope` })
    event.shaped(Item.of(`aeronautics:${c}_envelope`, 2), [
      'WLW',
      'LCL',
      'WLW'
    ], { W: `minecraft:${c}_wool`, L: 'minecraft:leather', C: CHARTER })
  })

  // --- Airship lift: burner + steam vent ---
  // Every gated recipe's pattern MUST contain a 'C' cell wired to CHARTER.
  event.remove({ output: 'aeronautics:adjustable_burner' })
  event.shaped('aeronautics:adjustable_burner', [
    'IBI',
    'ICI',
    'ARA'
  ], { I: 'create:iron_sheet', B: 'minecraft:blaze_powder', C: CHARTER, A: 'create:andesite_alloy', R: 'minecraft:redstone' })

  event.remove({ output: 'aeronautics:steam_vent' })
  event.shaped('aeronautics:steam_vent', [
    'G',
    'C',
    'B'
  ], { G: '#c:plates/gold', C: CHARTER, B: 'minecraft:copper_block' })

  // --- Anti-grav lift: gate the levitite path at its precursor ---
  // end_stone_powder was a create:crushing of end_stone; replace with a charter-gated craft.
  event.remove({ output: 'aeronautics:end_stone_powder' })
  event.shaped(Item.of('aeronautics:end_stone_powder', 4), [
    'EEE',
    'ECE',
    'EEE'
  ], { E: 'minecraft:end_stone', C: CHARTER })

  // --- Airplane thrust: propeller bearings + propellers ---
  event.remove({ output: 'aeronautics:propeller_bearing' })
  event.shaped('aeronautics:propeller_bearing', [
    ' C ',
    'BPB',
    ' I '
  ], { C: CHARTER, B: 'create:brass_casing', P: 'create:precision_mechanism', I: 'create:iron_sheet' })

  event.remove({ output: 'aeronautics:gyroscopic_propeller_bearing' })
  event.shaped('aeronautics:gyroscopic_propeller_bearing', [
    ' C ',
    'BGB',
    ' P '
  ], { C: CHARTER, B: 'create:brass_casing', G: 'simulated:gyroscopic_mechanism', P: 'create:precision_mechanism' })

  event.remove({ output: 'aeronautics:andesite_propeller' })
  event.shaped('aeronautics:andesite_propeller', [
    'P',
    'C',
    'B'
  ], { P: 'create:propeller', C: CHARTER, B: 'create:brass_sheet' })

  event.remove({ output: 'aeronautics:smart_propeller' })
  event.shaped(Item.of('aeronautics:smart_propeller', 2), [
    'PCP',
    'BGB'
  ], { P: 'create:propeller', C: CHARTER, B: 'create:brass_casing', G: 'simulated:gyroscopic_mechanism' })
})
