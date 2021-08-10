const getPuzzles = (puzzleName) => {
  const summer = {
    name: 'summer',
    difficulty: 'easy',
    gridSize: 3,
    tileSize: '150px',
    boardSize: '450px',
    board: [
      '#57C2DA',
      '#7BA683',
      '#878D36',
      '#9BD4E7',
      '#A0BA8B',
      '#9EA436',
      '#D5E8F5',
      '#C7D194',
      '#B8BF33'
    ],
    fixedTiles: [0, 2, 6, 8]
  }

  const autumn = {
    name: 'autumn',
    difficulty: 'easy',
    gridSize: 3,
    tileSize: '150px',
    boardSize: '450px',
    board: [
      '#C24141',
      '#793A2C',
      '#3D260F',
      '#D8846B',
      '#A4634B',
      '#78472F',
      '#F4C9A3',
      '#D89571',
      '#C2694A'
    ],
    fixedTiles: [0, 2, 6, 8]
  }

  const winter = {
    name: 'winter',
    difficulty: 'easy',
    gridSize: 3,
    tileSize: '150px',
    boardSize: '450px',
    board: [
      '#276574',
      '#1F3C4C',
      '#0E1327',
      '#7F9880',
      '#637C76',
      '#496269',
      '#DBE686',
      '#BADDAB',
      '#96D5CD'
    ],
    fixedTiles: [0, 2, 6, 8]
  }

  switch (puzzleName) {
    case 'summer':
      return summer
      break
    case 'autumn':
      return autumn
      break
    case 'winter':
      return winter
      break
    default:
      return ['summer', 'autumn', 'winter']
      break
  }
}
