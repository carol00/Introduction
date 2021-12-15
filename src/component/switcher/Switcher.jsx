import styles from './switcher.module.sass'
import clsx from 'clsx'

export default function Switcher() {
  return (
    <div>
      <label className={styles.root}>
        <input type="checkbox" />
        <span className={clsx(styles.slider)}></span>
      </label>
    </div>
  )
}