import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './introduction.module.sass'
import Image from '../../assets/avatar.jpg'
import RotateTitle from '../../component/rotateTitle/RotateTitle'
import LightBulb from '../../component/lightBulb/LightBulb'
import { fetchTitleData } from '../../redux/introductionSlice'
import Avatar from '../../component/avatar/Avatar'

function About() {
  return (
    <div className={styles.about}>
      <Avatar img={Image} width={150} height={150} />
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
      <About />
      <div className={styles.content}>
        <LightBulb switcher={fullState} />
        <Description />
      </div>
    </div>
  )
}