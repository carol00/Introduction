import { useState } from 'react'
import styles from './introduction.module.sass'
import Image from '../../assets/avatar.jpg'

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.pic}>
        <img src={Image} alt="C" />
      </div>
      <div className={styles.name}>
        <h3>許佩蓉</h3>
        <p>Carol</p>
      </div>
    </div>
  )
}

function Description() {
  const [birth, setBirth] = useState('出生地')
  const [interest, setInterest] = useState('興趣')
  const [sports, setSports] = useState('運動')

  return (
    <div className={styles.description}>
      <div onClick={() => setBirth('高雄')}><span>{birth}</span></div>
      <div onClick={() => setInterest('看F1')}><span>{interest}</span></div>
      <div onClick={() => setSports('打撞球、羽球')}><span>{sports}</span></div>
    </div>
  )
}

export default function Introduction() {
  return (
    <div className={styles.root}>
      <About />
      <Description />
    </div>
  )
}