import * as React from 'react'
import { TodoReducer } from './TodoReducer'

export const Todo: React.FC = () => {
  const [todos, dispatch] = React.useReducer(TodoReducer, [])

  return (
    <div>
      {JSON.stringify(todos)}
      <button
        onClick={() => dispatch({ type: 'add', text: 'payload123'})}
      >
        +
      </button>
    </div>
  )
}
