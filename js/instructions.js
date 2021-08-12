const playableBoard = document.querySelector('div#playable')
const playableTiles = document.querySelectorAll('div#playable>div.game-tile')

Sortable.create(playableBoard, {
  swap: true,
  filter: '.fixed',
  animation: 100
})

window.addEventListener('load', () => {
  fadeIn(document.querySelector('main'))
})
