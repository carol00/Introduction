import { useCallback, useState } from 'react'
import styles from './goal.module.sass'
import clsx from 'clsx'

const goalData = [
  {title: '短期', content: '學好React', src: 'bg17.jpg'},
  {title: '中期', content: '獨立完成維護工作', src: 'bg17.jpg'},
  {title: '長期', content: '看F1現場！！', src: 'bg17.jpg'}
]

const moveCloudAniName = [ 'moveCloud1', 'moveCloud2', 'moveCloud3' ]
const cloudPos = [ 'cloudPos1', 'cloudPos2', 'cloudPos3' ]

const Cloud = ({item, index}) => {
  const [ transform, setTransform ] = useState(false)
  const clickTransform = useCallback(() => {
    if (transform) return
    setTransform(!transform)
  }, [transform])

  return (
    <div className={clsx(styles.cloudWrap, styles[`${cloudPos[index]}`], transform && styles[moveCloudAniName[index]])}>
      <div className={clsx(styles.cloud)} onClick={() => clickTransform()}>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
      </div>
    </div>
  )
}

export default function Goal() {
  return (
    <div className={styles.root}>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.content)}>
          {goalData.map((item, index) => (
            <Cloud key={index} item={item} index={index}/>
          ))}
        </div>
      </div>
    </div>
  )
}