import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninja" />
    </Head>
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dolorum quo molestias sint ab, neque architecto vel voluptatem officia nesciunt, esse modi illo, quas veritatis delectus itaque illum aliquam rerum!</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi rerum mollitia, ab accusamus incidunt tempore error suscipit. Molestiae ipsam illum excepturi quae! Maxime necessitatibus animi enim minima vitae eos autem.</p>
      <Link href="/ninjas">
          <a className={styles.btn}>See all ninjas</a> 
      </Link>
    </div>
    </>
  )
}
