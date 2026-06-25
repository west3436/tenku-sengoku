// Boats need only the `simulated` physics core (no aeronautics items).
// Rewrite the core to vanilla-only ingredients so anyone can build a sailboat
// with zero Create progression. Costs here are starting values, easy to tune.
ServerEvents.recipes(event => {
  // The universal ship core — stays ungated; this is what makes boats free.
  event.remove({ output: 'simulated:physics_assembler' })
  event.shaped('simulated:physics_assembler', [
    ' L ',
    'IRI',
    'PPP'
  ], { L: 'minecraft:lever', I: 'minecraft:iron_ingot', R: 'minecraft:redstone', P: '#minecraft:planks' })

  // Steering.
  event.remove({ output: 'simulated:steering_wheel' })
  event.shaped('simulated:steering_wheel', [
    ' S ',
    'SIS',
    ' P '
  ], { S: 'minecraft:stick', I: 'minecraft:iron_ingot', P: '#minecraft:planks' })

  // Throttle.
  event.remove({ output: 'simulated:throttle_lever' })
  event.shapeless('simulated:throttle_lever', ['minecraft:lever', '#minecraft:planks'])

  // Navigation desk (optional control block).
  event.remove({ output: 'simulated:navigation_table' })
  event.shaped('simulated:navigation_table', [
    'MCM',
    'PPP'
  ], { M: 'minecraft:map', C: 'minecraft:compass', P: '#minecraft:planks' })

  // Sails = the cheap wind "motor" (originally needed create:white_sail).
  event.remove({ output: 'simulated:white_symmetric_sail' })
  event.shaped(Item.of('simulated:white_symmetric_sail', 2), [
    'WW',
    'WW'
  ], { W: 'minecraft:white_wool' })

  // Backup powered propulsion, Create-free. engine_assembly was sequenced-assembly.
  event.remove({ output: 'simulated:engine_assembly' })
  event.shaped('simulated:engine_assembly', [
    'IPI',
    'III'
  ], { I: 'minecraft:iron_ingot', P: 'minecraft:piston' })

  event.remove({ output: 'simulated:red_portable_engine' })
  event.shaped('simulated:red_portable_engine', [
    'I',
    'E',
    'F'
  ], { I: 'minecraft:iron_ingot', E: 'simulated:engine_assembly', F: 'minecraft:furnace' })
})
