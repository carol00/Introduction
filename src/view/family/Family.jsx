import Avatar from '../../component/avatar/Avatar'
import styles from './family.module.sass'
import Icon from '@mdi/react'
import { mdiHomeAnalytics } from '@mdi/js'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotoData } from './familySlice'

const AvatarArea = () => {
  const avatarData = useSelector(state => state.family.avatar)
  const imgSize = 75
  return (
    <div className={styles.avatarContainer}>
      <div className={styles.avatarContent}>
        {avatarData.map((value, index) => (
          <Avatar key={index} img={value.src} width={imgSize} height={imgSize} />
        ))}
      </div>
      <div className={styles.iconContent}>
        <div className={styles.scaleUnbalanced}>
          <Icon path={mdiHomeAnalytics } />
        </div>
      </div>
    </div>
  )
}

const LifePhoto = () => {
  const photoData = useSelector(state => state.family.photo)

  return (
    <div className={styles.festivalContainer}>
      {photoData.map((value, index) => (
        <div key={index} className={styles.picContent}>
          <div>
            <img src={value.src} alt="" />
            {value.title &&
              <p className={styles.title}>{value.title}</p>
            }
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Family() {
  const dispatch = useDispatch()
  dispatch(fetchPhotoData())

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <AvatarArea />
        <LifePhoto />
      </div>
    </div>
  )
}