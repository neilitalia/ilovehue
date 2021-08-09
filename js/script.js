const nameInput = document.querySelector('input.name-input')
const nameDisplay = document.querySelector('h3.name-display')
const scoreDisplay = document.querySelector('h3.score-display')
const acceptButton = document.querySelector('button.accept-button')
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

const acceptCookiesAndName = () => {
  if (cookies.visited) {
    nameDisplay.innerHTML = `Welcome back, ${cookies.name}`
  } else {
    const name = nameInput.value
    nameDisplay.innerHTML = `Welcome, ${name}!`
    document.cookie = `name=${name}; max-age=${30 * 24 * 60 * 60};`
    document.cookie = `visited=true; max-age=${30 * 24 * 60 * 60};`
    document.cookie = `score=0; max-age=${30 * 24 * 60 * 60};`
  }
}

window.addEventListener('load', () => {
  cookies = document.cookie
  formatCookiesToObj()
  updateNameDisplay()
  updateScoreDisplay()
})

acceptButton.addEventListener('click', () => {
  acceptCookiesAndName()
})
