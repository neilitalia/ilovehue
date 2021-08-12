const fadeOut = (element, duration = '1s') => {
  element.style.animation = `fadeOut ${duration} ease-out`
}
const fadeIn = (element, duration = '1s') => {
  element.style.animation = `fadeIn ${duration} ease-in`
}

const removeChildrenFrom = (element) => {
  element.innerHTML = ''
}
