const board = document.querySelector('div.game-board#playable')
const tiles = document.querySelectorAll('div.game-board#playable>div.game-tile')
const gameState = {}

const updateGameState = () => {
  const preformattedGameState = document.querySelectorAll(
    'div.game-board#playable>div.game-tile'
  )
  preformattedGameState.forEach((tile) => {
    // console.log(tile.dataset.position)
  })
}

const handleLift = (tile) => {
  tile.classList.add('active-tile')
}

const getTileBelow = (mouseY) => {
  const tilesBelow = document.querySelectorAll('draggable:not(.active-tile)')
}

const handleDrop = (tile) => {
  tile.classList.remove('active-tile')
  updateGameState()
}

tiles.forEach((tile) => {
  tile.addEventListener('dragstart', () => {
    handleLift(tile)
  })
  tile.addEventListener('dragend', () => {
    handleDrop(tile)
  })
})

board.addEventListener('dragover', (event) => {
  event.preventDefault()
  console.log(event.target.previousElementSibling)
  const activeTile = document.querySelector('div.active-tile')
  // console.log('Dragging over')
  board.append(activeTile)
})
