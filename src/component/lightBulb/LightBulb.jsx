import styles from './lightBulb.module.sass'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices'
import clsx from 'clsx'
import PropTypes from 'prop-types'

export default function LightBulb(switcher) {
  const open = switcher.switcher
  return (
    <div className={styles.root}>
      <LightbulbIcon className={clsx(styles.lightBulbIcon, open && styles.openLightBulb)} />
      <ElectricalServicesIcon className={clsx(styles.electricalIcon, open && styles.openElectrical)} />
    </div>
  )
}

LightBulb.propTypes = {
  switcher: PropTypes.bool
}