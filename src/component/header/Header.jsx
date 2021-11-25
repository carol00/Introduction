import styles from './header.module.sass'

const title = [
  {name: 'Introduction', href: '/'},
  {name: 'Education', href: '/education'},
  {name: 'Experience', href: '/experience'},
  {name: 'Goal', href: '/goal'},
]

export default function Header() {
  return (
    <div className={styles.root}>
      <ul>
        {title.map((value, index) => (
          <li key={index}><a href={value.href}>{value.name}</a></li>
        ))}
      </ul>
    </div>
  )
}