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
  }
}

const resetHeldTiles = () => {
  gameState.firstTileClicked.position = null
  gameState.secondTileClicked.position = null
}

const checkForWin = () => {
  const gameTiles = Array.from(document.querySelectorAll('div.game-tile'))
  const mismatches = gameTiles.filter((tile, index) => {
    const tilePosition = parseInt(tile.dataset.position)
    if (tilePosition !== index) {
      return true
    }
  })
  console.log('mismatches :>> ', mismatches)
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
    resetHeldTiles()
  }
}

const shufflePuzzle = (puzzle) => {
  let board = puzzle.board
  let unshuffled = board.length - 1

  // * Get fixed tiles (tiles in corners)
  const fixedTileIndexes = puzzle.fixedTiles
  const fixedTiles = fixedTileIndexes.map((tile) => {
    return board[tile]
  })

  // * Shuffle entire board
  while (unshuffled > 0) {
    const random = Math.floor(Math.random() * unshuffled)
    const temp = board[random]
    board[random] = board[unshuffled]
    board[unshuffled] = temp
    unshuffled -= 1
  }

  // * Restore fixed tiles to original places
  fixedTiles.forEach((fixedTile, index) => {
    const fixedTilePosition = board.indexOf(fixedTile)

    const toSwap = board[fixedTileIndexes[index]]
    const toSwapPosition = board.indexOf(toSwap)

    ;[board[fixedTilePosition], board[toSwapPosition]] = [
      board[toSwapPosition],
      board[fixedTilePosition]
    ]
  })
}

const getPuzzle = (query) => {
  const puzzle = getPuzzles(query)
  shufflePuzzle(puzzle)
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
      tileDiv.classList.add('draggable')
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
  Sortable.create(gameBoard, {
    swap: true,
    filter: '.fixed',
    animation: 250,
    onEnd: () => checkForWin()
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
  getPuzzle('frost')
})
