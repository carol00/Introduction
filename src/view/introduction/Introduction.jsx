import styles from './introduction.module.sass'
import Image from '../../assets/avatar.jpg'
import RotateTitle from '../../component/rotateTitle/RotateTitle'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices'

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

const titleData = [{title: '出生地', content: '高雄'}, {title: '興趣', content: 'F1'}, {title: '運動', content: '羽球、撞球'}]

function Description() {
  return (
    <div className={styles.description}>
      {titleData.map((value, index) => (
        <RotateTitle key={index} title={value.title} content={value.content} />
      ))}
    </div>
  )
}

const Lightbulb = () => {
  return (
    <div className={styles.lightWrap}>
     <LightbulbIcon className={styles.lightBulbIcon} />
     <ElectricalServicesIcon className={styles.electricalIcon} />
    </div>
  )
}

export default function Introduction() {
  return (
    <div className={styles.root}>
      <About />
      <div className={styles.content}>
        <Lightbulb />
        <Description />
      </div>
    </div>
  )
}