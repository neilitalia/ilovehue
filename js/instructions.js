const tiles = document.querySelectorAll('div.game-tile.draggable')
const board = document.getElementById('playable')

const handleLift = (tile) => {
  tile.classList.add('active-tile')
}

const getTileBelow = (mouseY) => {
  const tilesBelow = document.querySelectorAll('draggable:not(.active-tile)')
}

const handleDrop = (tile) => {
  tile.classList.remove('active-tile')
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
  const activeTile = document.querySelector('div.active-tile')
  console.log('Dragging over')
  board.appendChild(activeTile)
})
