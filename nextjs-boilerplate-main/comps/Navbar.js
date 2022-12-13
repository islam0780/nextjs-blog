import Link from 'next/link'

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

          <Link
            href="/almesrah"
            
          >
            <div className={styles.card}>
            <h2>Almesrah &rarr;</h2>
            </div>
          </Link>
          
          {/* <Link
            href="/Projects"
            
          >
            <div className={styles.card}>
            <h2>Projects &rarr;</h2>
            </div>
          </Link> */}

          <Link
            href="/posts"
            
          >
            <div className={styles.card}>
            <h2>Projects &rarr;</h2>
            </div>
          </Link>

         {/*  <Link
            href="/index1"
            
          >
            <div className={styles.card}>
            <h2>index1 &rarr;</h2>
            </div>
          </Link> */}
          

        </div>
      </main>
      
    </nav>
  );
}
 
export default Navbar;