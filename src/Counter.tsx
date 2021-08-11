import * as React from 'react'

interface props {
  children: (
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => JSX.Element | null
}

export const Counter: React.FC<props> = ({ children }) => {
  const [count, setCount] = React.useState<number>(0)

  return (
    <div>
      {children(count, setCount)}
    </div>
  )
}
