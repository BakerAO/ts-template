type Actions =
  | { type: 'add'; text: string }
  | { type: 'remove'; i: number }
  | { type: 'complete'; i: number}
  | { type: 'clear' }

interface Todo {
  text: string
  complete: boolean
}

type State = Todo[]

export const TodoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'add':
      return [...state, { text: action.text, complete: false }]
    case 'remove':
      return state.filter((item, i) => action.i !== i)
    case 'complete':
      const newState = state.map((e, i) => {
        if (action.i === i) return { text: e.text, complete: !e.complete }
        return e
      })
      return newState
    case 'clear':
      return []
    default:
      return state
  }
}
