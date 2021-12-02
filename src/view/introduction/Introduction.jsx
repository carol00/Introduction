import styles from './introduction.module.sass'
import Image from '../../assets/avatar.jpg'
import RotateTitle from '../../component/rotateTitle/RotateTitle'
import LightBulb from '../../component/lightBulb/LightBulb'

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.pic}>
        <img src={Image} alt="C" />
      </div>
      <div className={styles.name}>
        <h2>許佩蓉</h2>
        <p>Carol</p>
      </div>
    </div>
  )
}

const titleData = [{title: '出生地', content: '高雄'}, {title: '興趣', content: 'F1、手做'}, {title: '運動', content: '羽球、撞球'}]

function Description() {
  return (
    <div className={styles.description}>
      {titleData.map((value, index) => (
        <RotateTitle key={index} title={value.title} content={value.content} />
      ))}
    </div>
  )
}

export default function Introduction() {
  return (
    <div className={styles.root}>
      <About />
      <div className={styles.content}>
        <LightBulb />
        <Description />
      </div>
    </div>
  )
}