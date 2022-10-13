import styles from './links.module.css'

export default function Links({children}) {
  return (
    <>
      <div className={styles.links}>{children}</div>
    </>
  )
}
