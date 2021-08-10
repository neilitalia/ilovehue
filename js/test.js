const gameContainer = document.querySelector('main.game-container')
const boardSelector = document.querySelector('input.board-input')
let gameState = {
  firstTileClicked: {
    position: null,
    value: ''
  },
  secondTileClicked: {
    position: null,
    value: ''
  },
  currentState: [],
  winningState: []
}

const resetHeldTiles = () => {
  gameState.firstTileClicked.position = null
  gameState.secondTileClicked.position = null
}

const handleTileClick = (tilePosition, tileValue) => {
  if (
    gameState.firstTileClicked.position === null &&
    gameState.secondTileClicked.position === null
  ) {
    gameState.firstTileClicked.position = tilePosition
    gameState.firstTileClicked.value = tileValue
  } else if (
    gameState.firstTileClicked.position !== null &&
    gameState.secondTileClicked.position === null
  ) {
    gameState.secondTileClicked.position = tilePosition
    gameState.secondTileClicked.value = tileValue
    console.log(
      'gameState.firstTileCliked :>> ',
      gameState.firstTileClicked.position,
      gameState.firstTileClicked.value
    )
    console.log(
      'gameState.secondTileClicked :>> ',
      gameState.secondTileClicked.position,
      gameState.secondTileClicked.value
    )
    resetHeldTiles()
  }
}

const getPuzzle = (query) => {
  const puzzle = getPuzzles(query)
  gameState.currentState = puzzle.board
  renderPuzzle(puzzle)
}

const renderPuzzle = (puzzle) => {
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
      tileDiv.addEventListener('click', () => {
        handleTileClick(index, tile)
      })
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

boardSelector.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    gameContainer.innerHTML = ''
    const selected = boardSelector.value
    getPuzzle(selected)
  }
})

window.addEventListener('load', () => {
  getPuzzle('midsommar')
})
