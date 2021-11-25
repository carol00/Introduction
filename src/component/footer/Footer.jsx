import styles from './footer.module.sass'

const content = [ 'carol1330s@gmail.com' ]

export default function Footer() {
  return (
    <div className={styles.root}>
      {content.map((value, index) => (
        <div key={index}>{value}</div>
      ))}
    </div>
  )
}