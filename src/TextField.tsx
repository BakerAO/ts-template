import React from 'react'

interface props {
  text: string
}

export const TextField: React.FC<props> = ({ text }) => {
  return (
    <div>
      <input placeholder={text} />
    </div>
  )
}
