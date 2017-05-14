require('./index.html')
require('./assets/redux.png')

let state = {
  counter: 0
}
const listeners = []

const dispatch = (action) => {
  const newState = reducer(state, action)
  if (newState !== state) {
    state = newState
    listeners.forEach(listener => listener())
  }
}

const subscribe = (callback) => {
  listeners.push(callback)
}

const updateView = () => {
  document.querySelector('.counter').innerText = state.counter
}

const reducer = (state, action) => {
  switch (action) {
    case 'INC': return { ...state, counter: state.counter + 1 }
    case 'DEC': return { ...state, counter: state.counter - 1 }
    default: return state
  }
}

document.querySelector('.inc').onclick = () => dispatch('INC')
document.querySelector('.dec').onclick = () => dispatch('DEC')

subscribe(updateView)
updateView()
