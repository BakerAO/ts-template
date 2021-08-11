import * as React from 'react'

interface props {
  text: string
  ok?: boolean
}

export const TextField: React.FC<props> = ({ text, ok }) => {
  const [inputText, setText] = React.useState<string>('')

  return (
    <div>
      <input
        placeholder={text}
        value={inputText}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}
