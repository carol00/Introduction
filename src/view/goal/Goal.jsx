import { useCallback, useState } from 'react'
// import Icon from '@mdi/react'
// import { mdiFlagCheckered } from '@mdi/js'
import styles from './goal.module.sass'
import clsx from 'clsx'

const goalData = [
  {title: '短期', content: '學好React', src: 'bg17.jpg'},
  {title: '中期', content: '獨立完成維護工作', src: 'bg17.jpg'},
  {title: '長期', content: '看F1現場！！', src: 'bg17.jpg'}
]

// const scaleName = [ 'scale0', 'scale1', 'scale2' ]
// const flagTranslate = [
//   {width: '120px', x: '-146px', y: '455px'},
//   {width: '90px',x: '-143px', y: '191px'},
//   {width: '30px',x: '-130px', y: '-62px'},
// ]

const cloudPos = [ 'cloudPos1', 'cloudPos2', 'cloudPos3' ]

export default function Goal() {
  const [ items, setItems ] = useState(0)
  const totalItems = 2

  const transform = useCallback(() => {
    if (items >= totalItems) return
    setItems(items + 1)
  }, [items])

  return (
    <div className={styles.root} onClick={() => transform()}>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.content)}>
          {goalData.map((item, index) => (
            <div key={index} className={clsx(styles.cloudWrap, styles[`${cloudPos[index]}`])}>
              <div className={clsx(styles.cloud)} onClick={() => transform()}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}