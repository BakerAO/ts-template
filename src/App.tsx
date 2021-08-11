import React from 'react'
import { TextField } from './TextField'
import { Counter } from './Counter'

export const App: React.FC = () => {
  return (
    <div className="App">
      <TextField text={'place holder from props'} />
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  )
}
