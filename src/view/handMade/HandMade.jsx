import React, { useState, useCallback, useEffect } from 'react'
import { useTransition, animated, useSpringRef } from '@react-spring/web'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHandMadeData } from '../.././redux/handMadeSlice'
import ArtWorkPic from '../../component/artWorkPic/ArtWorkPic'
import styles from './handMade.module.sass'

const imgWidth = 270
const imgHeight = 270

// 浮游花
const Herbarium = ({data}) => {
  const herbariumData = data.herbarium
  return (
    <div className={styles.picContent}>
      {herbariumData.map((value, index) => (
        <ArtWorkPic key={index} img={value.src} title={value.title} width={imgWidth} height={imgHeight} />
      ))}
    </div>
  )
}
// 水晶花
const Crystal = ({data}) => {
  const herbariumData = data.crystal
  return (
    <div className={styles.picContent}>
      {herbariumData.map((value, index) => (
        <ArtWorkPic key={index} img={value.src} title={value.title} width={imgWidth} height={imgHeight} />
      ))}
    </div>
  )
}
// 進階水晶花
const AdvancedCrystal = ({data}) => {
  const advancedCrystalData = data.advancedCrystal
  return (
    <div className={styles.picContent}>
      {advancedCrystalData.map((value, index) => (
        <ArtWorkPic key={index} img={value.src} title={value.title} width={imgWidth} height={imgHeight} />
      ))}
    </div>
  )
}
// 蛋糕 乾燥花 音樂盒
const Birthday = ({data}) => {
  const herbariumData = data.birthday
  return (
    <div className={styles.picContent}>
      {herbariumData.map((value, index) => (
        <ArtWorkPic key={index} img={value.src} title={value.title} width={imgWidth} height={imgHeight} />
      ))}
    </div>
  )
}
// 項圈
const Dog = ({data}) => {
  const herbariumData = data.dog
  return (
    <div className={styles.picContent}>
      {herbariumData.map((value, index) => (
        <ArtWorkPic key={index} img={value.src} title={value.title} width={imgWidth} height={imgHeight} />
      ))}
    </div>
  )
}
// 進階項圈
const AdvancedDog = ({data}) => {
  const advancedDogData = data.advancedDog
  return (
    <div className={styles.picContent}>
      {advancedDogData.map((value, index) => (
        <ArtWorkPic key={index} img={value.src} title={value.title} width={imgWidth} height={260} />
      ))}
    </div>
  )
}

const pages = [
  ({ style, data }) => React.createElement(animated.div, { className: `${styles.container}`, style: Object.assign(Object.assign({}, style)) }, <Crystal data={data} />),
  ({ style, data }) => React.createElement(animated.div, { className: `${styles.container}`, style: Object.assign(Object.assign({}, style)) }, <AdvancedCrystal data={data} />),
  ({ style, data }) => React.createElement(animated.div, { className: `${styles.container}`, style: Object.assign(Object.assign({}, style)) }, <Herbarium data={data} />),
  ({ style, data }) => React.createElement(animated.div, { className: `${styles.container}`, style: Object.assign(Object.assign({}, style)) }, <Birthday data={data} />),
  ({ style, data }) => React.createElement(animated.div, { className: `${styles.container}`, style: Object.assign(Object.assign({}, style)) }, <Dog data={data} />),
  ({ style, data }) => React.createElement(animated.div, { className: `${styles.container}`, style: Object.assign(Object.assign({}, style)) }, <AdvancedDog data={data} />),
];

export default function HandMade() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.handMade)

  const [index, set] = useState(0);
  const onClick = useCallback(() => set(state => (state + 1) % 6), []);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(0,100%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0%,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-50%,0)' },
    data: data
  });

  useEffect(() => {
    dispatch(fetchHandMadeData())
    transRef.start();
  }, [dispatch, index, transRef]);

  return (React.createElement("div", { className: `${styles.root}`, onClick: onClick }, transitions((style, i) => {
    const Page = pages[i];
    return React.createElement(Page, { style: style, data: data });
  })));
}