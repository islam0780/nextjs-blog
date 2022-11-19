import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <nav>
       <main className={styles.main}>
        <h2 className={styles.title}>
        Almesrah
        </h2>

        <div className={styles.grid}>
          <Link href="/" >
            <div className={styles.card}>
            <h2>Home &rarr;</h2>
            </div>
          </Link>

          <Link href="/about" >
          <div className={styles.card}>
            <h2>About &rarr;</h2>
            </div>
          </Link>

          <Link
            href="/contact"
            
          >
            <div className={styles.card}>
            <h2>Contact &rarr;</h2>
            </div>
          </Link>

        </div>
      </main>
      
    </nav>
  );
}
 
export default Navbar;