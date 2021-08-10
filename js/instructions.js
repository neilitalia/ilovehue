const gridSize = 3
let gameState = {
  heldTile: null,
  droppedToTile: null,
  fixedTiles: [0, 2, 6, 8],
  array: []
}
let tiles = null

const resetHeldTiles = () => {
  gameState.heldTile = null
  gameState.droppedToTile = null
}

const setGameState = (tiles) => {
  console.log('tiles :>> ', tiles)
  tiles.forEach((tile, index) => {
    const currentTile = parseInt(tile.dataset.position)
    gameState.array[index] = currentTile
    console.log('gameState.array :>> ', gameState.array)
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
    gameBoard.appendChild(newDiv)
  })
  resetHeldTiles()
  tiles = document.querySelectorAll('div.game-board#playable>div.game-tile')
  attachEventListenerToTile(tiles)
  setGameState(tiles)
}

const generateGridArray = () => {
  const fullGridSize = Math.pow(gridSize, 2)
  gameState.array = Array.from(Array(fullGridSize).keys())
  renderGrid()
}

const swapTilePositions = (tileA, tileB) => {
  const temp = parseInt(tileA)
  gameState.array[tileA] = gameState.array[tileB]
  gameState.array[tileB] = temp
  console.log(gameState.array)
  // renderGrid()
}

const handleTileClick = (tile) => {
  console.log('clicked ', tile.dataset.position)
  if (!gameState.heldTile) {
    gameState.heldTile = tile.dataset.position
  } else {
    gameState.droppedToTile = tile.dataset.position
    swapTilePositions(gameState.heldTile, gameState.droppedToTile)
  }
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
