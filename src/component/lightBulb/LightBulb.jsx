import styles from './lightBulb.module.sass'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices'

export default function LightBulb() {
  return (
    <div className={styles.root}>
      <LightbulbIcon className={styles.lightBulbIcon} />
      <ElectricalServicesIcon className={styles.electricalIcon} />
    </div>
  )
}