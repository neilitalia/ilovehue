const nameDisplay = document.querySelector('h3.name-display')
const scoreDisplay = document.querySelector('h3.score-display')
const onboarding = document.querySelector('main.onboarding')
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

const resetCookies = () => {
  document.cookie = `name='';expires=Thu, 01 Jan 1970 00:00:00 GMT;`
  document.cookie = `visited=false; expires=Thu, 01 Jan 1970 00:00:00 GMT`
  document.cookie = `score=0;expires=Thu, 01 Jan 1970 00:00:00 GMT;`
  location.reload()
}

const updateScoreDisplay = (score) => {
  if (cookies.visited) {
    scoreDisplay.innerHTML = `Your score: ${score ? score : cookies.score} 🔄`
  } else {
    scoreDisplay.innerHTML = `Your score: 0 🔄`
  }
}

const acceptCookiesAndName = () => {
  const nameInput = document.querySelector('input.name-input')
  const name = nameInput.value
  nameDisplay.innerHTML = `Welcome, ${name}!`
  document.cookie = `name=${name}; max-age=${30 * 24 * 60 * 60};`
  document.cookie = `visited=true; max-age=${30 * 24 * 60 * 60};`
  document.cookie = `score=0; max-age=${30 * 24 * 60 * 60};`
  onboarding.style.animation = 'fadeOut 1.5s ease'
  setTimeout(function () {
    onboarding.classList.add('hidden')
    renderPuzzlePreviews()
  }, 1400)
}

window.addEventListener('load', () => {
  cookies = document.cookie
  formatCookiesToObj()
  if (
    cookies.visited === null ||
    cookies.visited === false ||
    cookies.visited === undefined
  ) {
    onboarding.classList.remove('hidden')
    onboarding.style.animation = 'fadeIn 1.5s ease'
    const acceptButton = document.querySelector('button.accept-button')
    acceptButton.addEventListener('click', () => {
      acceptCookiesAndName()
    })
    const nameInput = document.querySelector('input.name-input')
    nameInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        acceptCookiesAndName()
      }
    })
  }
  updateNameDisplay()
  updateScoreDisplay()
})

scoreDisplay.addEventListener('click', () => {
  resetCookies()
})
