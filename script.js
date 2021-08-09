const nameInput = document.querySelector('input.name-input')
const acceptButton = document.querySelector('button.accept-button')
let cookies = null

const formatCookiesToObj = () => {
  let preformatted = cookies.split('; ').map((cookie) => {
    const [key, value] = cookie.split('=')
    return [key, value]
  })
  let formattedCookies = Object.fromEntries(preformatted)
  cookies = formattedCookies
  console.log('cookies :>> ', cookies)
}

const acceptCookiesAndName = () => {
  if (cookies.visited) {
    console.log(`Welcome back, ${cookies.name}`)
  } else {
    console.log('new visitor')
    const name = nameInput.value
    document.cookie = `name=${name}; max-age=${30 * 24 * 60 * 60};`
    document.cookie = `visited=true; max-age=${30 * 24 * 60 * 60};`
    document.cookie = `score=0; max-age=${30 * 24 * 60 * 60};`
  }
}

window.addEventListener('load', () => {
  cookies = document.cookie
  formatCookiesToObj()
})

acceptButton.addEventListener('click', () => {
  acceptCookiesAndName()
})
