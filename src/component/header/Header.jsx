import { Link } from "react-router-dom";
import styles from './header.module.sass'

const title = [
  {name: 'Introduction', to: '/'},
  {name: 'Family', to: '/family'},
  {name: 'Hand Made', to: '/handMade'},
  {name: 'Experience', to: '/experience'},
  {name: 'Goal', to: '/goal'},
]

export default function Header() {
  return (
    <div className={styles.root}>
      <ul>
        {title.map((value, index) => (
          <li key={index}>
            <Link to={value.to}>{value.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}