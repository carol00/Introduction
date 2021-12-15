import styles from './switcher.module.sass'
import clsx from 'clsx'
import { useSelector, useDispatch } from 'react-redux'
import { lightSwitcher } from '../../redux/switcherSlice'
import { useCallback } from 'react'

export default function Switcher() {
  const light = useSelector(state => state.switcher.light)
  const dispatch = useDispatch()

  const toggleLight = useCallback(() => {
    dispatch(lightSwitcher())
  }, [dispatch])

  return (
    <div>
      <label className={styles.root}>
        <input type="checkbox" />
        <span onClick={() => toggleLight()} className={clsx(styles.slider, light && styles.switch)}></span>
      </label>
    </div>
  )
}
