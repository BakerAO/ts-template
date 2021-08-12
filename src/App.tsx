import * as React from 'react'
import { Counter } from './Counter'
import { Todo } from './Todo'

const s = {
  app: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-between',
    height: '25vh'
  },
  counter: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '25vw'
  }
}

export const App: React.FC = () => {
  return (
    <div className="App" style={s.app}>
      <Counter>
        {(count, setCount) => (
          <div style={s.counter}>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
      <Todo />
    </div>
  )
}
