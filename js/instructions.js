const gridSize = 3
let gameState = []
let tiles = null
let heldTile = null
let droppedToTile = null

const board = document.querySelector('div.game-board#playable')
const hoveringSquare = document.querySelector('div.hovering-square')

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
  tile.classList.add('active-tile')
  hoveringSquare.classList.remove('hidden')
}

const handleDrop = (tile) => {
  console.log('heldTile :>> ', heldTile)
  console.log('droppedTo :>> ', droppedToTile)
  // console.log('tiles :>>', tiles)
  hoveringSquare.classList.add('hidden')
  tile.classList.remove('active-tile')
}

const handleDragOver = (event) => {
  event.preventDefault()
  droppedToTile = event.toElement.dataset.position
  const x = event.clientX - 25
  const y = event.clientY - 25
  hoveringSquare.style.left = `${x}px`
  hoveringSquare.style.top = `${y}px`
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
