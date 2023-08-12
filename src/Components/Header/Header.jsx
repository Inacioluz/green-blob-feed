import styles from './Header.module.css'
import igniteLogo from '../../assets/Ignite-logo.svg'

export function Header() {
  return (
    <div>
      <header className={styles.header}>
 
       <img src={igniteLogo} alt="Logo Ignite" />
       <strong >Green Blob</strong>
       </header>
    </div>
  )
}
