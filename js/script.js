const body = document.querySelector('body')
const nameDisplay = document.querySelector('h3.name-display')
const scoreDisplay = document.querySelector('h3.score-display')
const onboarding = document.querySelector('main.onboarding')
const darkModeButton = document.querySelector('button.dark-mode-toggle')
let cookies = document.cookie

const formatCookiesToObj = () => {
  let preformatted = cookies.split('; ').map((cookie) => {
    const [key, value] = cookie.split('=')
    return [key, value]
  })
  cookies = { ...Object.fromEntries(preformatted) }
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
  document.cookie = `darkMode=false;expires=Thu, 01 Jan 1970 00:00:00 GMT;`
  document.cookie = `score=0;expires=Thu, 01 Jan 1970 00:00:00 GMT;`
  fadeOut(body)
  setTimeout(() => {
    removeChildrenFrom(body)
    window.location.href = 'index.html'
  }, 1000)
}

const setScore = (score) => {
  document.cookie = `score=${score}; max-age=${30 * 24 * 60 * 60};`
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
  fadeOut(onboarding, '1.5s')
  setTimeout(function () {
    onboarding.classList.add('hidden')
    renderPuzzlePreviews()
  }, 1400)
}

const onboard = () => {
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

const toggleDarkMode = () => {
  if (cookies.darkMode === 'false' || cookies.darkMode == undefined) {
    body.classList.add('dark-mode')
    cookies.darkMode = 'true'
    document.cookie = `darkMode=true; max-age=${30 * 24 * 60 * 60};`
  } else if (cookies.darkMode === 'true') {
    cookies.darkMode = 'false'
    body.classList.remove('dark-mode')
    document.cookie = `darkMode=false; max-age=${30 * 24 * 60 * 60};`
  }
}

window.addEventListener('load', () => {
  formatCookiesToObj()
  if (cookies.darkMode === 'true') {
    body.classList.add('dark-mode')
  }
  if (
    // * New user on home page
    !cookies.visited &&
    (window.location.pathname === '/index.html' ||
      window.location.pathname === '/')
  ) {
    onboard()
  }
  updateNameDisplay()
  updateScoreDisplay()
})

scoreDisplay.addEventListener('click', () => {
  resetCookies()
})

darkModeButton.addEventListener('click', () => {
  toggleDarkMode()
})
