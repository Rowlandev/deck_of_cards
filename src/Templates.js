export function solitaireTemplates(x, y) {
  return {
    sides: [
      'front',
      'back', 'front',
      'back', 'back', 'front',
      'back', 'back', 'back', 'front',
      'back', 'back', 'back', 'back', 'front',
      'back', 'back', 'back', 'back', 'back', 'front',
      'back', 'back', 'back', 'back', 'back', 'back', 'front'
    ],
    positions: [
      {x: x, y: y},
      {x: x + 150, y: y}, {x: x + 150, y: y + 50},
      {x: x + 300, y: y}, {x: x + 300, y: y + 50}, {x: x + 300, y: y + 100},
      {x: x + 450, y: y}, {x: x + 450, y: y + 50}, {x: x + 450, y: y + 100}, {x: x + 450, y: y + 150},
      {x: x + 600, y: y}, {x: x + 600, y: y + 50}, {x: x + 600, y: y + 100}, {x: x + 600, y: y + 150}, {x: x + 600, y: y + 200},
      {x: x + 750, y: y}, {x: x + 750, y: y + 50}, {x: x + 750, y: y + 100}, {x: x + 750, y: y + 150}, {x: x + 750, y: y + 200}, {x: x + 750, y: y + 250},
      {x: x + 900, y: y}, {x: x + 900, y: y + 50}, {x: x + 900, y: y + 100}, {x: x + 900, y: y + 150}, {x: x + 900, y: y + 200}, {x: x + 900, y: y + 250}, {x: x + 900, y: y + 300}
    ],
    defaultLocation: {
      x: x + 900,
      y: 20
    }
  };
}

export function freeModeTemplates(x, y) {
  return {
    sides: [],
    positions: [],
    defaultLocation: {x: x, y: y}
  };
}
