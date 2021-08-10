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

  const daylight = {
    name: 'daylight',
    difficulty: 'advanced',
    gridSize: 6,
    tileSize: '75px',
    boardSize: '450px',
    board: [
      '#EAD9A6',
      '#93D2BD',
      '#189497',
      '#146074',
      '#193C47',
      '#0B141A',
      '#EBC5A3',
      '#ADBDAC',
      '#5E8686',
      '#435968',
      '#353943',
      '#1F171E',
      '#EEB29F',
      '#C2A69C',
      '#837777',
      '#63505D',
      '#4B353F',
      '#2E171F',
      '#EE9D9A',
      '#D18D8C',
      '#9E6468',
      '#7A4553',
      '#5D2E3A',
      '#3D1721',
      '#F08995',
      '#E1727D',
      '#B64B5A',
      '#8F3548',
      '#6E2435',
      '#4B1422',
      '#F2738F',
      '#EF4E6E',
      '#CB1F4C',
      '#A31C3D',
      '#801330',
      '#590D23'
    ],
    fixedTiles: [0, 5, 30, 35]
  }

  const harvest = {
    name: 'harvest',
    difficulty: 'advanced',
    gridSize: 6,
    tileSize: '75px',
    boardSize: '450px',
    board: [
      '#F0EA5D',
      '#F2AA3A',
      '#F26B22',
      '#BE2926',
      '#861F1E',
      '#560D0E',
      '#F2DC6C',
      '#E99E4A',
      '#E16936',
      '#AE3532',
      '#762624',
      '#4C1314',
      '#F4CE77',
      '#E19457',
      '#D16749',
      '#9E3F40',
      '#662A2A',
      '#411616',
      '#F6C17F',
      '#D98961',
      '#C16659',
      '#8E454D',
      '#562D2F',
      '#38161A',
      '#F7B385',
      '#D28068',
      '#B26466',
      '#7E4A5A',
      '#462D33',
      '#2C171C',
      '#F8A58B',
      '#CA766F',
      '#A36273',
      '#6E4E65',
      '#372D37',
      '#20171E'
    ],
    fixedTiles: [0, 5, 30, 35]
  }

  const frost = {
    name: 'frost',
    difficulty: 'advanced',
    gridSize: 6,
    tileSize: '75px',
    boardSize: '450px',
    board: [
      '#4DC6E1',
      '#0DB4D9',
      '#1996C8',
      '#0A78B8',
      '#1E4387',
      '#1F1D5A',
      '#69CCE3',
      '#47BADD',
      '#4997C9',
      '#3F75B5',
      '#31448B',
      '#282162',
      '#82D2E5',
      '#6BBFE1',
      '#6A97C9',
      '#5D72B4',
      '#42448E',
      '#302469',
      '#97D8E7',
      '#88C4E4',
      '#8397C8',
      '#736FB0',
      '#504593',
      '#382870',
      '#ACDFEA',
      '#A0CAE8',
      '#9A97C8',
      '#866AAE',
      '#5D4698',
      '#402B78',
      '#C0E6ED',
      '#B8D0EC',
      '#B098C8',
      '#9866AB',
      '#69479C',
      '#492E7F'
    ],
    fixedTiles: [0, 5, 30, 35]
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
    case 'daylight':
      return daylight
      break
    case 'harvest':
      return harvest
      break
    case 'frost':
      return frost
      break
    default:
      return ['summer', 'autumn', 'winter', 'daylight', 'harvest', 'frost']
      break
  }
}
