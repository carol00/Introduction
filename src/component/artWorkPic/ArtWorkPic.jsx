import PropTypes from 'prop-types'
import styles from './artWorkPic.module.sass'

export default function ArtWorkPic({img, title, width, height}) {
  return (
    <div className={styles.content} style={{width: width, height: height}}>
      <img src={img} alt="" />
      {title && 
        <div className={styles.title}>
          <p>{title}</p>
        </div>
      }
    </div>
  )
}

ArtWorkPic.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}