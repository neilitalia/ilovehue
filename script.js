const nameInput = document.querySelector('input.name-input')
const acceptButton = document.querySelector('button.accept-button')
const cookies = document.cookie

const getCookies = () => {
  console.log('cookies :>> ', cookies)
}

const acceptCookiesAndName = () => {
  const name = nameInput.value
  console.log('cookies :>> ', cookies)
  document.cookie = `name=${name}; max-age=" + 30*24*60*60;`
  document.cookie = `visited='true'; max-age=" + 30*24*60*60;`
}

window.addEventListener('load', () => {
  getCookies()
})

acceptButton.addEventListener('click', () => {
  acceptCookiesAndName()
})
