const renderPuzzlePreviews = () => {
  const previewContainer = document.querySelector('main.puzzles')
  const allPuzzles = getPuzzles()

  removeChildrenFrom(previewContainer)
  previewContainer.classList.remove('hidden')
  fadeIn(previewContainer, '1.5s')

  allPuzzles.forEach((item) => {
    const puzzle = getPuzzles(item)
    const previewArticle = document.createElement('article')
    const previewDiv = document.createElement('div')
    const previewTitle = document.createElement('h1')
    const previewDifficulty = document.createElement('h4')

    previewDiv.classList.add('preview-board', `${puzzle.difficulty}`)
    previewDiv.style.cssText = `
      height: ${puzzle.boardSize};
      width: ${puzzle.boardSize};
      display: grid;
      grid-template-columns: repeat(${puzzle.gridSize}, ${puzzle.tileSize});
      grid-template-rows: repeat(${puzzle.gridSize}, ${puzzle.tileSize});
      transition: 0.3s ease;
    `
    puzzle.board.forEach((tile, index) => {
      const tileDiv = document.createElement('div')
      tileDiv.classList.add('game-tile')
      tileDiv.setAttribute('data-position', index)
      tileDiv.style.cssText = `
        height: ${puzzle.tileSize};
        width: ${puzzle.tileSize};
        background-color: ${tile};
        animation: grow ${1000 + index * 50}ms ease;
        transform-origin: 20% 20%;
        transition: 0.2s ease;
      `
      previewDiv.append(tileDiv)
    })

    previewTitle.innerHTML = puzzle.name
    previewDifficulty.innerHTML = puzzle.difficulty

    previewArticle.addEventListener('click', () => {
      fadeOut(previewContainer)
      setTimeout(function () {
        previewContainer.style.opacity = 0
        window.location.href = `puzzle.html#${puzzle.name}`
      }, 1000)
    })
    previewArticle.append(previewDiv)
    previewArticle.append(previewTitle)
    previewArticle.append(previewDifficulty)
    previewContainer.append(previewArticle)
  })
}

window.addEventListener('load', () => {
  if (cookies.visited) {
    renderPuzzlePreviews()
  }
})
