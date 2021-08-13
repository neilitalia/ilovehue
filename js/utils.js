const fadeIn = (element, duration = '1s') => {
  element.style.animation = `fadeIn ${duration} ease-in`
}

const fadeOut = (element, duration = '1s') => {
  element.style.animation = `fadeOut ${duration} ease-out`
}

const spinIn = (element, duration = '1s') => {
  element.style.animation = `spinIn ${duration} ease-out`
}

const spinOut = (element, duration = '1s') => {
  element.style.animation = `spinOut ${duration} ease-in`
}

const removeChildrenFrom = (element) => {
  element.innerHTML = ''
}
