const gameContainer = document.querySelector('main.game-container')
const gameState = {
  actualPuzzle: null,
  shuffledPuzzle: null
}

const animateWin = (currentScore) => {
  const winContainer = document.createElement('div')
  const winText = document.createElement('h1')
  const winScore = document.createElement('h2')
  winContainer.classList.add('win-div')
  winText.innerHTML = '✨🎆 Puzzle Solved! 🎆✨'
  winScore.innerHTML = `🎇 Your score: ${currentScore} 🎇`
  winContainer.append(winText)
  winContainer.append(winScore)
  fadeOut(gameContainer)

  setTimeout(() => {
    removeChildrenFrom(gameContainer)
    gameContainer.append(winContainer)
    fadeIn(gameContainer)
  }, 1000)
  setTimeout(() => {
    fadeOut(gameContainer)
  }, 3000)
  setTimeout(() => {
    removeChildrenFrom(gameContainer)
    window.location.href = 'index.html'
  }, 4000)
}

const checkForWin = () => {
  const gameTiles = Array.from(document.querySelectorAll('div.game-tile'))
  const correctTiles = gameTiles.filter((tile, index) => {
    const tilePosition = parseInt(tile.dataset.position)
    if (tilePosition === index) {
      return true
    }
  })
  if (correctTiles.length === gameState.actualPuzzle.board.length) {
    let currentScore = parseInt(cookies.score)
    currentScore += correctTiles.length // * Adds number of tiles to score
    setScore(currentScore)
    updateScoreDisplay(currentScore)
    animateWin(currentScore)
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

const renderPuzzle = (objToRender, preview) => {
  removeChildrenFrom(gameContainer)
  gameContainer.style.animation = 'fadeIn 1s ease-in'

  const puzzle = objToRender
  const gameBoard = document.createElement('div')
  const gameStats = document.createElement('div')
  const correctTiles = document.createElement('h1')
  correctTiles.innerHTML = '123'

  gameStats.append(correctTiles)

  preview
    ? gameContainer.classList.add('frozen')
    : gameContainer.classList.remove('frozen')

  gameBoard.style.cssText = `
    height: ${puzzle.boardSize};
    width: ${puzzle.boardSize};
    display: grid;
    grid-template-columns: repeat(${puzzle.gridSize}, ${puzzle.tileSize});
    grid-template-rows: repeat(${puzzle.gridSize}, ${puzzle.tileSize});
  `
  puzzle.board.forEach((tile, index) => {
    const tileIsFixed = puzzle.fixedTiles.includes(index)
    const tileDiv = document.createElement('div')
    tileDiv.classList.add('game-tile')
    tileDiv.dataset.position = gameState.actualPuzzle.board.indexOf(tile)
    tileDiv.style.cssText = `
      position: relative;
      height: ${puzzle.tileSize};
      width: ${puzzle.tileSize};
      background-color: ${tile};
    `
    if (tileIsFixed) {
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
  gameContainer.append(gameStats)
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
  gameState.actualPuzzle = getPuzzles(query)
  gameState.shuffledPuzzle = shuffleTiles(getPuzzles(query))
  // * First renders completed puzzle
  renderPuzzle(gameState.actualPuzzle, true)

  // * Animates for a bit
  setTimeout(() => {
    fadeOut(gameContainer)
  }, 3000)

  // * Then renders shuffled puzzle
  setTimeout(() => {
    renderPuzzle(gameState.shuffledPuzzle, false)
  }, 3900)
})
