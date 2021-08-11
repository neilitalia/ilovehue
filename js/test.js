const gameContainer = document.querySelector('main.game-container')
const gameState = {
  firstTileClicked: {
    position: null,
    value: ''
  },
  secondTileClicked: {
    position: null,
    value: ''
  },
  selectedPuzzle: null,
  shuffledPuzzle: null
}

const resetHeldTiles = () => {
  gameState.firstTileClicked.position = null
  gameState.secondTileClicked.position = null
}

const checkForWin = () => {
  const gameTiles = Array.from(document.querySelectorAll('div.game-tile'))
  // console.log('gameTiles :>> ', gameTiles)
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

const shuffleTiles = (object) => {
  let newShuffledObject = object
  let board = newShuffledObject.board
  let unshuffled = board.length - 1

  // * Get fixed tiles (tiles in corners)
  const fixedTileIndexes = newShuffledObject.fixedTiles
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
  newShuffledObject.board = board
  return newShuffledObject
}

const renderPuzzle = (objToRender) => {
  const puzzle = objToRender
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
    tileDiv.dataset.position = gameState.selectedPuzzle.board.indexOf(tile)
    tileDiv.style.cssText = `
      position: relative;
      height: ${puzzle.tileSize};
      width: ${puzzle.tileSize};
      background-color: ${tile};
      transition: 0.3s ease;
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

window.addEventListener('load', () => {
  query = 'summer'
  gameState.selectedPuzzle = getPuzzles(query)
  console.log('selected puzzle :>> ', gameState.selectedPuzzle)
  gameState.shuffledPuzzle = shuffleTiles(getPuzzles(query))
  console.log('shuffled puzzle :>> ', gameState.shuffledPuzzle)
  renderPuzzle(gameState.selectedPuzzle)
  gameContainer.classList.add('game-preview')
  gameContainer.style.animation = 'fadeIn 1s ease-in'
  setTimeout(() => {
    gameContainer.classList.remove('game-preview')
    gameContainer.style.animation = 'fadeOut 1s ease-out'
  }, 3000)
  setTimeout(() => {
    gameContainer.innerHTML = ''
    gameContainer.style.animation = 'fadeIn 1s ease-in'
    renderPuzzle(gameState.shuffledPuzzle)
  }, 4000)
})
