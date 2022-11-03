import styles from './links.module.css'
import Image from 'next/image'

export default function Links({children}) {
  return (
    <>
      <div className={styles.links}>{children}</div>
    </>
  )
}
