import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './introduction.module.sass'
import Image from '../../assets/avatar.jpg'
import RotateTitle from '../../component/rotateTitle/RotateTitle'
import LightBulb from '../../component/lightBulb/LightBulb'
import { fetchTitleData } from '../../redux/introductionSlice'
import Avatar from '../../component/avatar/Avatar'
import clsx from 'clsx'

function About() {
  return (
    <div className={styles.about}>
      <Avatar img={Image} width={200} height={200} />
      <div className={styles.name}>
        <h2>許佩蓉</h2>
        <p>Carol</p>
      </div>
    </div>
  )
}

function Description() {
  const titleData = useSelector(state => (state.introduction.titleData))

  return (
    <div className={styles.description}>
      {titleData.map((value, index) => (
        <RotateTitle key={index} title={value.title} content={value.content} />
      ))}
    </div>
  )
}

const lightLevel = ['dark', 'light', 'brighter']

export default function Introduction() {
  const rotateTitleTotal = useSelector(state => state.rotateTitle.total)
  const [ fullState, setFullState ] = useState(false)
  const fullAmount = 3
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTitleData())
    if (rotateTitleTotal === fullAmount) {
      setFullState(true)
    }
  }, [dispatch, fullState, rotateTitleTotal])

  return (
    <div className={styles.root}>
      <div className={clsx(styles.wrap, rotateTitleTotal && styles[`${lightLevel[rotateTitleTotal - 1]}`])}>
        <div className={styles.stars}></div>
        <div className={styles.container}>
          <About />
          <div className={styles.content}>
            <LightBulb switcher={fullState} />
            <Description />
          </div>
        </div>
      </div>
    </div>
  )
}