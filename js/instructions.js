const board = document.querySelector('div.game-board#playable')
const gridSize = 3
let gameState = []
let tiles = null
let heldTile = null
let droppedToTile = null

const renderGrid = () => {
  gameState.forEach((i) => {
    const newDiv = document.createElement('div')
    newDiv.classList.add('game-tile')
    if (i === 0 || i === 2 || i === 6 || i === 8) {
      newDiv.classList.add('fixed')
    } else {
      newDiv.classList.add('draggable')
      newDiv.setAttribute('draggable', true)
    }
    newDiv.setAttribute('data-position', i)
    document.querySelector('div#playable').appendChild(newDiv)
  })
  tiles = document.querySelectorAll('div.game-board#playable>div.game-tile')
  attachEventListenerToTile(tiles)
}

const generateGridArray = () => {
  const fullGridSize = Math.pow(gridSize, 2)
  gameState = Array.from(Array(fullGridSize).keys())
  renderGrid()
}

const handleLift = (tile) => {
  console.log('Lifting lifting')
  heldTile = tile.dataset.position
}

const handleDrop = (tile) => {
  console.log('heldTile :>> ', heldTile)
  console.log('droppedTo :>> ', droppedToTile)
  // console.log('tiles :>>', tiles)
}

const handleDragOver = (event) => {
  event.preventDefault()
  droppedToTile = event.toElement.dataset.position
}

const attachEventListenerToTile = (tiles) => {
  tiles.forEach((tile) => {
    tile.addEventListener('dragstart', () => {
      handleLift(tile)
    })
    tile.addEventListener('dragend', () => {
      handleDrop(tile)
    })
  })
}

board.addEventListener('dragover', (event) => {
  handleDragOver(event)
})

window.addEventListener('load', () => {
  generateGridArray()
})
