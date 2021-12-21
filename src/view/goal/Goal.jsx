import { useCallback, useState } from 'react'
import Icon from '@mdi/react'
import { mdiFlagCheckered } from '@mdi/js'
import styles from './goal.module.sass'

const goalData = [
  {title: '短期', content: '學好react', src: 'bg17.jpg'},
  {title: '中期', content: '能夠獨立完成維護工作', src: 'bg17.jpg'},
  {title: '長期', content: '看F1現場！！', src: 'bg17.jpg'}
]

// const scale = [ 0, 1.6, 2.8 ]
const flagTranslate = [
  {width: '120px', x: '-146px', y: '455px'},
  {width: '90px',x: '-143px', y: '191px'},
  {width: '30px',x: '-130px', y: '-62px'},
]

export default function Goal() {
  const [ items, setItems ] = useState(0)
  const totalItems = 2
  const transformTest = useCallback(() => {
    console.log('test');
    if (items >= totalItems) return
    setItems(items + 1)
  }, [items])

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.content}>
          {goalData.map((item, index) => (
            <div key={index} className={styles.item} style={{transform: `translate(${flagTranslate[index].x}, ${flagTranslate[index].y})`}}
              onClick={() => transformTest()}>
              <div className={styles.text}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
              <div className={styles.flag} style={{width: flagTranslate[index].width}} >
                <Icon path={mdiFlagCheckered } />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}