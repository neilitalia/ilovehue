const gridSize = 3
let gameState = {
  heldTile: null,
  droppedToTile: null,
  fixedTiles: [0, 2, 6, 8],
  array: []
}

const resetHeldTiles = () => {
  gameState.heldTile = null
  gameState.droppedToTile = null
}

const setGameState = (tiles) => {
  tiles.forEach((tile, index) => {
    const currentTile = parseInt(tile.dataset.position)
    gameState.array[index] = currentTile
  })
}

const renderGrid = () => {
  const gameBoard = document.querySelector('div#playable')
  gameBoard.innerHTML = ''
  gameState.array.forEach((tile) => {
    const newDiv = document.createElement('div')
    newDiv.classList.add('game-tile')

    if (gameState.fixedTiles.includes(tile)) {
      newDiv.classList.add('fixed')
    } else {
      newDiv.classList.add('draggable')
    }

    newDiv.setAttribute('data-position', tile)
    newDiv.innerHTML = tile
    gameBoard.appendChild(newDiv)
  })
  const currentTiles = document.querySelectorAll(
    'div.game-board#playable>div.game-tile'
  )
  attachEventListenerToTile(currentTiles)
  setGameState(currentTiles)
}

const swapTilePositions = (held, dropped) => {
  const heldIndex = gameState.array.indexOf(parseInt(held))
  const droppedIndex = gameState.array.indexOf(parseInt(dropped))
  ;[gameState.array[heldIndex], gameState.array[droppedIndex]] = [
    gameState.array[droppedIndex],
    gameState.array[heldIndex]
  ]
  renderGrid()
}

const handleTileClick = (tile) => {
  if (gameState.heldTile === null && gameState.droppedToTile === null) {
    gameState.heldTile = tile.dataset.position
  } else if (gameState.heldTile !== null && gameState.droppedToTile === null) {
    gameState.droppedToTile = tile.dataset.position
    swapTilePositions(gameState.heldTile, gameState.droppedToTile)
    resetHeldTiles()
  } else {
    resetHeldTiles()
  }
}

const generateGridArray = () => {
  const fullGridSize = Math.pow(gridSize, 2)
  gameState.array = Array.from(Array(fullGridSize).keys())
  renderGrid()
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
  generateGridArray()
})
