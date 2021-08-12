const gameContainer = document.querySelector('main.game-container')
const gameState = {
  selectedPuzzle: null,
  shuffledPuzzle: null
}

const checkForWin = () => {
  const gameTiles = Array.from(document.querySelectorAll('div.game-tile'))
  const correctTiles = gameTiles.filter((tile, index) => {
    const tilePosition = parseInt(tile.dataset.position)
    if (tilePosition === index) {
      return true
    }
  })
  if (correctTiles.length === gameState.selectedPuzzle.board.length) {
    let currentScore = parseInt(cookies.score)
    currentScore += correctTiles.length // * Adds number of tiles to score
    document.cookie = `score=${currentScore}; max-age=${30 * 24 * 60 * 60};`
    updateScoreDisplay(currentScore)

    gameContainer.style.animation = 'fadeOut 1s ease'
    setTimeout(() => {
      const winContainer = document.createElement('div')
      const winText = document.createElement('h1')
      const winScore = document.createElement('h2')

      gameContainer.innerHTML = ''
      gameContainer.style.animation = 'fadeIn 1s ease'

      winContainer.classList.add('win-div')
      winText.innerHTML = '✨🎆 Puzzle Solved! 🎆✨'
      winScore.innerHTML = `🎇 Your score: ${currentScore} 🎇`
      winContainer.append(winText)
      winContainer.append(winScore)

      gameContainer.append(winContainer)
    }, 1000)
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
    ;[board[random], board[unshuffled]] = [board[unshuffled], board[random]]
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
      transition: 0.2s ease;
    `
    if (isFixed) {
      tileDiv.classList.add('fixed')
    } else {
      tileDiv.classList.add('draggable')
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

const getQueryFromURL = () => {
  const urlQuery = new URL(window.location.href)
  const puzzleQuery = urlQuery.hash.substring(1)
  return puzzleQuery
}

window.addEventListener('load', () => {
  if (!document.cookie) {
    window.location.href = 'index.html'
  }
  query = getQueryFromURL()
  getQueryFromURL()
  gameState.selectedPuzzle = getPuzzles(query)
  gameState.shuffledPuzzle = shuffleTiles(getPuzzles(query))
  renderPuzzle(gameState.selectedPuzzle)
  gameContainer.classList.add('game-preview')
  gameContainer.style.animation = 'fadeIn 1s ease-in'
  setTimeout(() => {
    gameContainer.style.animation = 'fadeOut 1s ease-out'
  }, 3000)
  setTimeout(() => {
    gameContainer.classList.remove('game-preview')
    gameContainer.innerHTML = ''
    gameContainer.style.animation = 'fadeIn 1s ease-in'
    renderPuzzle(gameState.shuffledPuzzle)
  }, 4000)
})
