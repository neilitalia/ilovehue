const gameContainer = document.querySelector('main.game-container')

const renderPuzzleFromObj = () => {
  const puzzleName = 'autumn'
  const puzzle = getPuzzles(puzzleName)
  const gameBoard = document.createElement('div')

  gameBoard.classList.add('preview-board', `${puzzle.difficulty}`)
  gameBoard.style.cssText = `
    height: ${puzzle.boardSize};
    width: ${puzzle.boardSize};
    display: grid;
    grid-template-columns: repeat(${puzzle.gridSize}, ${puzzle.tileSize});
    grid-template-rows: repeat(${puzzle.gridSize}, ${puzzle.tileSize});
    transition: box-shadow 0.3s ease;
  `
  puzzle.board.forEach((tile, index) => {
    const isFixed = puzzle.fixedTiles.includes(index)
    const tileDiv = document.createElement('div')
    tileDiv.classList.add('game-tile')
    tileDiv.setAttribute('data-position', index)
    tileDiv.style.cssText = `
      position: relative;
      height: ${puzzle.tileSize};
      width: ${puzzle.tileSize};
      background-color: ${tile};
      transition: 0.2s ease;
    `
    if (isFixed) {
      tileDiv.classList.add('fixed')
    } else {
      tileDiv.addEventListener('mouseenter', () => {
        tileDiv.classList.add('hovered-tile')
      })
      tileDiv.addEventListener('mouseleave', () => {
        tileDiv.classList.remove('hovered-tile')
      })
    }
    gameBoard.append(tileDiv)
  })
  gameContainer.append(gameBoard)
}

window.addEventListener('load', () => {
  renderPuzzleFromObj()
})
