import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './goal.module.sass'
import clsx from 'clsx'
import { addAmount } from '../../redux/cloudAmountSlice'

const goalData = [
  {title: '短期', content: '學好React'},
  {title: '中期', content: '能夠獨立完成維護工作'},
  {title: '長期', content: '看F1現場！！'}
]

const moveCloudAniName = [ 'moveCloud1', 'moveCloud2', 'moveCloud3' ]
const cloudPos = [ 'cloudPos1', 'cloudPos2', 'cloudPos3' ]

const Cloud = ({item, index}) => {
  const dispatch = useDispatch()
  const clickCloudAmount = useSelector(state => state.cloudAmount.amount)
  const cloudTotal = 2
  const [ transform, setTransform ] = useState(false)
  const clickTransform = useCallback(() => {
    if (transform || clickCloudAmount === cloudTotal) return
    dispatch(addAmount())
    setTransform(!transform)
  }, [dispatch, transform, clickCloudAmount])

  return (
    <div className={clsx(styles.cloudWrap, styles[`${cloudPos[index]}`], transform && styles[moveCloudAniName[index]])}>
      <div className={clsx(styles.cloud)} onClick={() => clickTransform()}>
        <h3>{item.title}</h3>
        <p className={styles.depiction}>{item.content}</p>
      </div>
    </div>
  )
}

export default function Goal() {
  const clickCloudAmount = useSelector(state => state.cloudAmount.amount)
  const cloudTotal = 2

  return (
    <div className={styles.root}>
      <div className={clsx(styles.container, clickCloudAmount === cloudTotal && styles.showF1)}>
        <div className={clsx(styles.content)}>
          {goalData.map((item, index) => (
            <Cloud key={index} item={item} index={index}/>
          ))}
        </div>
      </div>
    </div>
  )
}