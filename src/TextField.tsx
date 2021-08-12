import * as React from 'react'

interface props {
  text: string,
  setText: (arg: string) => void
}

export const TextField: React.FC<props> = ({ text, setText }) => {
  return (
    <div>
      <input
        placeholder="Enter Todo text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}
