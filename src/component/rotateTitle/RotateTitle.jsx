import { useState } from 'react'

export default function RotateTitle(props) {
  const [ title, setTitle ] = useState(props.title)
  const [ flipped, setFlipped ] = useState(false)
  const changeState = () => {
    if (flipped) return
    setTitle(props.content)
    setFlipped(!flipped)
  }

  return (
    <div onClick={() => changeState()} ><span>{title}</span></div>
  )
}