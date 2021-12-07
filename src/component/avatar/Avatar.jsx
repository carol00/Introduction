import styles from './avatar.module.sass'
import PropTypes from 'prop-types'

export default function Avatar({img, width, height}) {
  return (
    <div className={styles.root}>
      <div className={styles.container} style={{width: width, height: height}}>
        <img src={img} alt="" />
      </div>
    </div>
  )
}

Avatar.propTypes = {
  img: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}