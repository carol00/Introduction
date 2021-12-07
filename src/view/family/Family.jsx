import Avatar from '../../component/avatar/Avatar'
import Image from '../../assets/avatar.jpg'
import styles from './family.module.sass'
import Icon from '@mdi/react'
import { mdiHomeAnalytics } from '@mdi/js';

const AvatarArea = () => {
  const imgSize = 75
  return (
    <div className={styles.avatarArea}>
      <div className={styles.avatarContent}>
          <Avatar img={Image} width={imgSize} height={imgSize} />
          <Avatar img={Image} width={imgSize} height={imgSize}/>
          <Avatar img={Image} width={imgSize} height={imgSize}/>
      </div>
      <div className={styles.iconContent}>
        <div className={styles.scaleUnbalanced}>
          <Icon path={mdiHomeAnalytics } />
        </div>
      </div>
    </div>
  )
}

export default function Family() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <AvatarArea />
      </div>
    </div>
  )
}