import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync
} from './testSlice'

export default function TestView() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      {count}
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>add mount</button>
        <button onClick={() => dispatch(incrementAsync(Number(incrementAmount)))}>add async</button>
      </div>    
    </div>
  )
}