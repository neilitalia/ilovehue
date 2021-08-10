const nameInput = document.querySelector('input.name-input')
const nameDisplay = document.querySelector('h3.name-display')
const scoreDisplay = document.querySelector('h3.score-display')
const acceptButton = document.querySelector('button.accept-button')
const onboarding = document.querySelector('main.onboarding')
const puzzles = document.querySelector('main.puzzles')
let cookies = null

const formatCookiesToObj = () => {
  let preformatted = cookies.split('; ').map((cookie) => {
    const [key, value] = cookie.split('=')
    return [key, value]
  })
  let formattedCookies = Object.fromEntries(preformatted)
  cookies = formattedCookies
}

const updateNameDisplay = () => {
  if (cookies.visited) {
    nameDisplay.innerHTML = `Welcome back, ${cookies.name}`
  } else {
    nameDisplay.innerHTML = `Hey there new user!`
  }
}

const updateScoreDisplay = () => {
  if (cookies.visited) {
    scoreDisplay.innerHTML = `Your score: ${cookies.score}`
  } else {
    scoreDisplay.innerHTML = `Your score: 0`
  }
}

const renderPuzzles = () => {
  onboarding.classList.add('hidden')
  puzzles.classList.remove('hidden')
  puzzles.style.animation = 'fadeIn 1.5s ease'
  const previewTiles = document.querySelectorAll(
    'div.preview-board>div.game-tile'
  )
  previewTiles.forEach((tile) => {
    const tileColor = tile.dataset.tileColor
    tile.style.backgroundColor = tileColor
    tile.style.animation = `grow 1000ms ease`
  })
}

const acceptCookiesAndName = () => {
  const name = nameInput.value
  nameDisplay.innerHTML = `Welcome, ${name}!`
  document.cookie = `name=${name}; max-age=${30 * 24 * 60 * 60};`
  document.cookie = `visited=true; max-age=${30 * 24 * 60 * 60};`
  document.cookie = `score=0; max-age=${30 * 24 * 60 * 60};`
  onboarding.style.animation = 'fadeOut 1.5s ease'
  setTimeout(function () {
    renderPuzzles()
  }, 1400)
}

window.addEventListener('load', () => {
  cookies = document.cookie
  formatCookiesToObj()
  if (cookies.visited) {
    renderPuzzles()
  }
  updateNameDisplay()
  updateScoreDisplay()
})

acceptButton.addEventListener('click', () => {
  acceptCookiesAndName()
})
