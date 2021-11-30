import { useState } from 'react'
import PropTypes from 'prop-types';

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

RotateTitle.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}