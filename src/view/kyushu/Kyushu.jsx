import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from 're-carousel'
import { fetchPhotoData } from '../../redux/kyushuSlice'
import styles from './kyushu.module.sass'
import clsx from 'clsx'

export default function Kyushu() {
  const dispatch = useDispatch()
  const groupPicData = useSelector(state => state.kyushu.groupPic)
  const parkData = useSelector(state => state.kyushu.park)
  const landscape = useSelector(state => state.kyushu.landscape)
  const aquarium = useSelector(state => state.kyushu.aquarium)
  const pearl = useSelector(state => state.kyushu.pearl)

  useEffect(() => {
    dispatch(fetchPhotoData())
  }, [dispatch]);

  return (
    <Carousel loop className={styles.root}>
      <div style={{backgroundColor: 'white', height: '100%'}} className={styles.container}>
        <div className={styles.content}>
          <h1>九州(2018)</h1>
          <div className={styles.picContent}>
            {groupPicData.map((value) => (
              <div>
                <img alt='' src={value.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{height: '100%'}} className={clsx(styles.container)}>
        <div className={styles.content}>
          <h1>豪斯登堡</h1>
          <div className={styles.picContent}>
            {parkData.map((value) => (
              <div>
                <img alt='' src={value.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{backgroundColor: 'white', height: '100%'}} className={styles.container}>
        <div className={styles.content}>
          <h1>豪斯登堡</h1>
          <div className={styles.picContent}>
            {landscape.map((value) => (
              <div>
                <img alt='' src={value.src} />
              </div>
            ))}
          </div>
          </div>
      </div>
      <div style={{backgroundColor: 'white', height: '100%'}} className={styles.container}>
        <div className={styles.content}>
          <h1>西海珍珠水族館</h1>
          <div className={styles.picContent}>
            {aquarium.map((value) => (
              <div>
                <img alt='' src={value.src} />
              </div>
            ))}
          </div>
          </div>
      </div>
      <div style={{backgroundColor: 'white', height: '100%'}} className={styles.container}>
        <div className={styles.content}>
          <h1>挖珍珠</h1>
          <div className={styles.picContent}>
            {pearl.map((value) => (
              <div>
                <img alt='' src={value.src} />
              </div>
            ))}
          </div>
          </div>
      </div>
    </Carousel>
  )
}