import styles from './switcher.module.sass'
import clsx from 'clsx'
import { useSelector, useDispatch } from 'react-redux'
import { lightSwitcher } from '../../redux/switcherSlice'
import { useCallback, useEffect } from 'react'

export default function Switcher() {
  const light = useSelector(state => state.switcher.light)
  const dispatch = useDispatch()

  const switchLight = useCallback(() => {
    dispatch(lightSwitcher())
  }, [dispatch])

  useEffect(() => {
    if (light) {
      document.querySelector('html').style.background = 'white'
      return;
    }
    document.querySelector('html').style.background = 'black'
  }, [light]);

  return (
    <div>
      <label className={styles.root}>
        <input type="checkbox" />
        <span onClick={() => switchLight()} className={clsx(styles.slider, light && styles.switch)}></span>
      </label>
    </div>
  )
}
