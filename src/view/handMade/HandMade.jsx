import React, { useState, useCallback, useEffect } from 'react'
import { useTransition, animated, useSpringRef } from '@react-spring/web'
import { useDispatch } from 'react-redux'
import { fetchHandMadeData } from '../.././redux/handMadeSlice'
import styles from './handMade.module.sass'

const pages = [
  ({ style }) => React.createElement(animated.div, { style: Object.assign(Object.assign({}, style)) }, "A"),
  ({ style }) => React.createElement(animated.div, { style: Object.assign(Object.assign({}, style)) }, "B"),
  ({ style }) => React.createElement(animated.div, { style: Object.assign(Object.assign({}, style)) }, "C"),
];

export default function HandMade() {
  const dispatch = useDispatch()
  dispatch(fetchHandMadeData())

  const [index, set] = useState(0);
  const onClick = useCallback(() => set(state => (state + 1) % 3), []);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(0,100%,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0%,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-50%,0)' },
  });
  useEffect(() => {
    transRef.start();
  }, [index, transRef]);
  return (React.createElement("div", { className: `${styles.root}`, onClick: onClick }, transitions((style, i) => {
    const Page = pages[i];
    return React.createElement(Page, { style: style });
  })));
}