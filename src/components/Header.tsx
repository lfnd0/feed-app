import styles from './Header.module.css'
import logo from '../assets/feed-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo Feed" />
    </header>
  )
}
