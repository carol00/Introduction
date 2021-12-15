import { Link, useLocation  } from "react-router-dom";
import styles from './header.module.sass'
import clsx from "clsx";
import Switcher from '../switcher/Switcher'

const title = [
  {name: 'Introduction', to: '/'},
  {name: 'Family', to: '/family'},
  {name: 'Hand Made', to: '/handMade'},
  {name: 'Experience', to: '/experience'},
  {name: 'Goal', to: '/goal'},
]

export default function Header() {
  const location = useLocation();

  return (
    <div className={styles.root}>
      <ul>
        {title.map((value, index) => (
          <li key={index}>
            <Link to={value.to}  className={clsx(location.pathname === `${value.to}` && styles.active)}>{value.name}</Link>
          </li>
        ))}
        <Switcher />
      </ul>
    </div>
  )
}