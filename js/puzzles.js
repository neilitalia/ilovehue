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

  const midsommar = {
    name: 'midsommar',
    difficulty: 'expert',
    gridSize: 9,
    tileSize: '50px',
    boardSize: '450px',
    board: [
      '#E4E6A3',
      '#DFB77B',
      '#D88A57',
      '#D35F3A',
      '#CD2027',
      '#D24227',
      '#D85D27',
      '#DF7426',
      '#E58924',

      '#D8E19D',
      '#D2B779',
      '#CC915A',
      '#C56B3F',
      '#C0402D',
      '#C45231',
      '#C76235',
      '#CC713A',
      '#D07F3E',

      '#CBDD97',
      '#C5B878',
      '#BE965D',
      '#B87745',
      '#B25634',
      '#B55E3B',
      '#B76643',
      '#B96E4B',
      '#BB7654',

      '#BED991',
      '#B7B877',
      '#B09B61',
      '#A97F4B',
      '#A3663C',
      '#A46845',
      '#A46950',
      '#A56B5A',
      '#A76E65',

      '#B0D48B',
      '#A8B876',
      '#A0A063',
      '#9A8852',
      '#927243',
      '#936F50',
      '#926C5D',
      '#926968',
      '#926571',

      '#A2D086',
      '#99B875',
      '#90A466',
      '#888F58',
      '#817E4B',
      '#7F765B',
      '#7E6E68',
      '#7E6673',
      '#7E5E7D',

      '#94CC80',
      '#89B773',
      '#7FA768',
      '#74975E',
      '#6A8854',
      '#697C67',
      '#6A7174',
      '#69647F',
      '#695689',

      '#86C879',
      '#78B972',
      '#69AA6A',
      '#5C9E64',
      '#4C925E',
      '#4D8272',
      '#4E727F',
      '#50628B',
      '#525093',

      '#77C473',
      '#64B870',
      '#4EAE6D',
      '#35A36A',
      '#139A68',
      '#17877C',
      '#23738B',
      '#2A6096',
      '#34489E'
    ],
    fixedTiles: [0, 4, 8, 72, 76, 80]
  }

  const dusk = {
    name: 'dusk',
    difficulty: 'expert',
    gridSize: 9,
    tileSize: '50px',
    boardSize: '450px',
    board: [
      '#650934',
      '#66174A',
      '#632261',
      '#582C78',
      '#453695',
      '#39367F',
      '#2A336C',
      '#1C3059',
      '#062B47',

      '#701735',
      '#71254B',
      '#6F3162',
      '#673C7A',
      '#594696',
      '#4E417F',
      '#433B6B',
      '#363558',
      '#2A2E46',

      '#7C2437',
      '#7C314C',
      '#7B3E63',
      '#774B7C',
      '#6C5697',
      '#634C80',
      '#58436A',
      '#4D3957',
      '#423045',

      '#883037',
      '#893F4D',
      '#894C64',
      '#86597D',
      '#806799',
      '#765980',
      '#6B4C68',
      '#633F55',
      '#593242',

      '#943B37',
      '#964B4D',
      '#975963',
      '#97697D',
      '#93779A',
      '#8A657F',
      '#805466',
      '#774452',
      '#6F343E',

      '#A14535',
      '#A4574B',
      '#A66863',
      '#A9787D',
      '#A8899A',
      '#9F737D',
      '#965E64',
      '#8D494E',
      '#85333A',

      '#AE5132',
      '#B36448',
      '#B87662',
      '#BC8A7D',
      '#BF9D9B',
      '#B7837C',
      '#AE6961',
      '#A64F49',
      '#9D3234',

      '#BE5D2E',
      '#C47244',
      '#CA855F',
      '#D19C7B',
      '#D7B49A',
      '#CE9378',
      '#C6745B',
      '#BF5542',
      '#B72E2F',

      '#CD6928',
      '#D57F3E',
      '#DD975A',
      '#E8B178',
      '#F2CD97',
      '#E8A574',
      '#E18154',
      '#D95B39',
      '#D32827'
    ],
    fixedTiles: [0, 4, 8, 72, 76, 80]
  }

  const blizzard = {
    name: 'blizzard',
    difficulty: 'expert',
    gridSize: 9,
    tileSize: '50px',
    boardSize: '450px',
    board: [
      '#94D6DF',
      '#86CBC7',
      '#78C1AF',
      '#69B798',
      '#56AD84',
      '#5CA597',
      '#629DA8',
      '#6694B7',
      '#6889C6',

      '#87C4CC',
      '#7AB7B7',
      '#6DACA3',
      '#5FA291',
      '#509981',
      '#5D938D',
      '#678D97',
      '#7186A1',
      '#7A7FAA',

      '#7AB3B9',
      '#6FA7A9',
      '#639A98',
      '#578F8A',
      '#49847C',
      '#5C8282',
      '#6B7E88',
      '#79798E',
      '#867593',

      '#6EA4A8',
      '#64969B',
      '#59898E',
      '#4F7D81',
      '#447277',
      '#5A7179',
      '#6D6F7B',
      '#7F6D7C',
      '#8F6A7D',

      '#619599',
      '#58878E',
      '#4E7883',
      '#476C7A',
      '#3F6171',
      '#586170',
      '#6F616D',
      '#83606B',
      '#976069',

      '#56898B',
      '#4D7982',
      '#476B7A',
      '#405E73',
      '#39526C',
      '#565267',
      '#6F5362',
      '#86535C',
      '#9D5257',

      '#4B7D7E',
      '#446C78',
      '#3E5E72',
      '#3A4F6B',
      '#354166',
      '#54425F',
      '#6F4458',
      '#88454E',
      '#A44443',

      '#3E7172',
      '#39616E',
      '#355169',
      '#344264',
      '#313060',
      '#523257',
      '#6E334D',
      '#8B3541',
      '#A83432',

      '#326767',
      '#305665',
      '#2F4561',
      '#2E335E',
      '#2D1D5A',
      '#4E2050',
      '#6D2144',
      '#8D2234',
      '#AD2024'
    ],
    fixedTiles: [0, 4, 8, 72, 76, 80]
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
    case 'midsommar':
      return midsommar
      break
    case 'dusk':
      return dusk
      break
    case 'blizzard':
      return blizzard
      break
    default:
      return [
        'summer',
        'autumn',
        'winter',
        'daylight',
        'harvest',
        'frost',
        'midsommar',
        'dusk',
        'blizzard'
      ]
      break
  }
}
