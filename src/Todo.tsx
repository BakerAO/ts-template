import * as React from 'react'
import { TodoReducer } from './TodoReducer'
import { TextField } from './TextField'

export const Todo: React.FC = () => {
  const [todos, dispatch] = React.useReducer(TodoReducer, [])
  const [text, setText] = React.useState<string>('')

  const handleComplete = (i: number) => {
    dispatch({ type: 'complete', i })
  }

  const handleAdd = () => {
    dispatch({ type: 'add', text })
    setText('')
  }

  const renderTodos = () => {
    const todoDivs = todos.map((e, i) => {
      const s = {
        display: 'flex',
        textDecoration: 'none',
        border: '1px solid black',
        width: `${e.text.length * 10}px`
      }
      if (e.complete) s.textDecoration = 'line-through'

      return (
        <div key={i} style={s} onClick={() => handleComplete(i)}>
          {e.text}
        </div>
      )
    })

    return (
      <div>
        {todoDivs}
      </div>
    )
  }

  return (
    <div>
      {renderTodos()}
      <TextField
        text={text}
        setText={setText}
      />
      <button
        onClick={handleAdd}
      >
        Add
      </button>
      <button onClick={() => dispatch({ type: 'clear' })}>
        Clear
      </button>
    </div>
  )
}
