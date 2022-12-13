import styles from '../../styles/Home.module.css'
import Link from 'next/link'
//import clientPromise from '../lib/mongodb'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  
  const data = await res.json();

  return {
    props: { almesrah: data }
  }
}

const Almesrah = ({ almesrah }) => {
  console.log(almesrah)

  return (
    <div>
      <h1>All Almesrah</h1>
      {almesrah.map(almesrah => (
        <Link href={'/almesrah/' + almesrah.id} key={almesrah.id}>
          <dev className={styles.single}>
            <h3>{ almesrah.name }</h3>
          </dev>
        </Link>
      ))}
    </div>
  );
}
 
export default Almesrah;