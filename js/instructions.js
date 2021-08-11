const gridSize = 3
let gameState = {
  firstTileClicked: null,
  secondTileClicked: null,
  fixedTiles: [0, 2, 6, 8],
  array: [0, 7, 2, 1, 5, 4, 6, 3, 8]
}

const resetHeldTiles = () => {
  gameState.firstTileClicked = null
  gameState.secondTileClicked = null
}

const setGameState = (tiles) => {
  tiles.forEach((tile, index) => {
    const currentTile = parseInt(tile.dataset.position)
    gameState.array[index] = currentTile
  })
}

const swapTilePositions = (held, dropped) => {
  const heldIndex = gameState.array.indexOf(parseInt(held))
  const droppedIndex = gameState.array.indexOf(parseInt(dropped))
  ;[gameState.array[heldIndex], gameState.array[droppedIndex]] = [
    gameState.array[droppedIndex],
    gameState.array[heldIndex]
  ]
  renderGrid(held, dropped)
}

const handleTileClick = (tile) => {
  const tilePosition = tile.dataset.position
  // * if no tiles are held to be switched
  if (
    gameState.firstTileClicked === null &&
    gameState.secondTileClicked === null
  ) {
    gameState.firstTileClicked = tilePosition
    tile.classList.add('active-tile')
  } else if (
    gameState.firstTileClicked !== null &&
    gameState.secondTileClicked === null
  ) {
    // * if a 1st tile is selected but a 2nd one isnt
    gameState.secondTileClicked = tilePosition
    tile.style.animation = 'shrink 500ms ease'
    document.querySelector('div.active-tile').style.animation =
      'shrink 200ms ease'
    setTimeout(function () {
      swapTilePositions(gameState.firstTileClicked, gameState.secondTileClicked)
      resetHeldTiles()
    }, 200)
  } else {
    resetHeldTiles()
  }
}

const generateGridArray = () => {
  const fullGridSize = Math.pow(gridSize, 2)
  gameState.array = Array.from(Array(fullGridSize).keys())
  renderGrid()
}

const renderGrid = (tile1, tile2) => {
  const gameBoard = document.querySelector('div#playable')
  gameBoard.innerHTML = ''
  gameState.array.forEach((tile) => {
    const newDiv = document.createElement('div')
    newDiv.classList.add('game-tile')

    // * adds styling based on if tile is fixed or draggable
    if (gameState.fixedTiles.includes(tile)) {
      newDiv.classList.add('fixed')
    } else {
      newDiv.classList.add('draggable')
    }

    if (tile == tile1 || tile == tile2) {
      newDiv.style.animation = 'growGameTile 200ms ease'
    }

    newDiv.setAttribute('data-position', tile)
    gameBoard.appendChild(newDiv)
  })
  const currentTiles = document.querySelectorAll(
    'div.game-board#playable>div.game-tile'
  )
  attachEventListenerToTile(currentTiles)
  setGameState(currentTiles)
}

const attachEventListenerToTile = (tiles) => {
  tiles.forEach((tile) => {
    const tilePosition = parseInt(tile.dataset.position)
    if (!gameState.fixedTiles.includes(tilePosition)) {
      tile.addEventListener('click', () => {
        handleTileClick(tile)
      })
    }
  })
}

window.addEventListener('load', () => {
  // generateGridArray()
  renderGrid()
  const currentTiles = document.querySelectorAll('div.game-board>div.game-tile')
  currentTiles.forEach((tile) => {
    const randomDuration = 500 + Math.floor(Math.random() * 1000)
    tile.style.animation = `grow ${randomDuration}ms ease`
  })
})
