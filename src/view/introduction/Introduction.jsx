import styles from './introduction.module.sass'
import Image from '../../avatar.jpg'

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

export default function Introduction() {
  return (
    <div className={styles.root}>
      <About />
    </div>
  )
}