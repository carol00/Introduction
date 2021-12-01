import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './rotateTitle.module.sass'
import clsx from 'clsx'

export default function RotateTitle(props) {
  const [ title, setTitle ] = useState(props.title)
  const [ flipped, setFlipped ] = useState(false)

  const changeState = () => {
    if (flipped) return
    setTitle(props.content)
    setFlipped(!flipped)
  }

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={clsx(styles.content, flipped && styles.flip)} onClick={() => changeState()}>
          <div className={`${styles.card} ${styles.front}`}><span>{title}</span></div>
          <div className={`${styles.card} ${styles.back}`}><span>{title}</span></div>
        </div>
      </div>
    </div>
  )
}

RotateTitle.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}