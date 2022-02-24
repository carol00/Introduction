import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from 're-carousel'
import { fetchPhotoData } from '../../redux/kyushuSlice'
import ArtWorkPic from '../../component/artWorkPic/ArtWorkPic'
import Icon from '@mdi/react'
import { mdiFishbowlOutline } from '@mdi/js';
import { mdiJellyfishOutline } from '@mdi/js';
import { mdiCastle } from '@mdi/js';
import { mdiBeeFlower } from '@mdi/js';
import { mdiStoreAlert } from '@mdi/js';

import styles from './kyushu.module.sass'
import clsx from 'clsx'

const imgWidth = 270
const imgHeight = 270

const TitleContent = ({title, iconName}) => {
  return (
  <div className={styles.titleContent}>
    <div className={styles.icon}>
      <Icon path={iconName} />
    </div>
    <h1>{title}</h1>
  </div>
  )
}

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
      <div style={{backgroundColor: 'white', height: '100%'}} className={clsx(styles.container, styles.bg1)}>
        <div className={styles.content}>
          <TitleContent title={'九州(2018)'} iconName={mdiCastle} />
          <div className={styles.picContent}>
            {groupPicData.map((value, index) => (
              <ArtWorkPic key={index} img={value.src} title='' width={400} height={400} />
            ))}
          </div>
        </div>
      </div>
      <div style={{height: '100%'}} className={clsx(styles.container, styles.bg2)}>
        <div className={styles.content}>
          <TitleContent title={'豪斯登堡'} iconName={mdiBeeFlower} />
          <div className={styles.picContent}>
            {parkData.map((value, index) => (
              <ArtWorkPic key={index} img={value.src} title='' width={imgWidth} height={280} />
            ))}
          </div>
        </div>
      </div>
      <div style={{height: '100%'}} className={clsx(styles.container, styles.bg3)}>
        <div className={styles.content}>
          <TitleContent title={'豪斯登堡'} iconName={mdiStoreAlert} />
          <div className={styles.picContent}>
            {landscape.map((value, index) => (
              <ArtWorkPic key={index} img={value.src} title='' width={imgWidth} height={imgHeight} />
            ))}
          </div>
        </div>
      </div>
      <div style={{height: '100%'}} className={clsx(styles.container, styles.bg4)}>
        <div className={styles.content}>
          <TitleContent title={'西海珍珠水族館'} iconName={mdiFishbowlOutline} />
          <div className={styles.picContent}>
            {aquarium.map((value, index) => (
              <ArtWorkPic key={index} img={value.src} title='' width={imgWidth} height={imgHeight} />
            ))}
          </div>
          </div>
      </div>
      <div style={{height: '100%'}} className={clsx(styles.container, styles.bg5)}>
        <div className={styles.content}>
          <TitleContent title={'挖珍珠'} iconName={mdiJellyfishOutline} />
          <div className={styles.picContent}>
            {pearl.map((value, index) => (
              <ArtWorkPic key={index} img={value.src} title='' width={imgWidth} height={imgHeight} />
            ))}
          </div>
          </div>
      </div>
    </Carousel>
  )
}