import { createStore } from 'redux'
import './index.html'
import './assets/redux.png'

let initialState = {
  counter: 0
}

const updateView = () => {
  document.querySelector('.counter').innerText = store.getState().counter
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INC': return { ...state, counter: state.counter + 1 }
    case 'DEC': return { ...state, counter: state.counter - 1 }
    default: return state
  }
}

const store = createStore(reducer, initialState)
store.subscribe(updateView)

document.querySelector('.inc').onclick = () => store.dispatch({ type: 'INC' })
document.querySelector('.dec').onclick = () => store.dispatch({ type: 'DEC' })

updateView()
