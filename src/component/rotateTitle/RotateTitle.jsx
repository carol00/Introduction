import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { rotateTotal } from './rotateTitleSlice'
import PropTypes from 'prop-types'
import styles from './rotateTitle.module.sass'
import clsx from 'clsx'

export default function RotateTitle(props) {
  const dispatch = useDispatch()
  const [ flipped, setFlipped ] = useState(false)

  const changeFlipState = () => {
    if (flipped) return
    dispatch(rotateTotal())
    setFlipped(!flipped)
  }

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={clsx(styles.content, flipped && styles.flip)} onClick={() => changeFlipState()}>
          <div className={`${styles.card} ${styles.front}`}><span>{props.title}</span></div>
          <div className={`${styles.card} ${styles.back}`}><span>{props.content}</span></div>
        </div>
      </div>
    </div>
  )
}

RotateTitle.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}