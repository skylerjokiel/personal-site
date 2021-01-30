import Head from 'next/head'
import Layout, { name } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{name}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My small slice of this wonderly vast internet.</p>
          <a className={utilStyles.floatchild} href="https://twitter.com/skylerjokiel">
            <img style={{ maxHeight:'72px'}} src="/images/Twitter_Social_Icon_Square_Color.png" alt="Twitter"></img>
          </a>
          <a className={utilStyles.floatchild}  href="https://www.linkedin.com/in/skylerjokiel/">
            <img style={{ maxHeight:'72px'}} src="/images/In-Blue-72.png" alt="Linkedin"></img>
          </a>
          <a className={utilStyles.floatchild}  href="https://medium.com/@skylerjokiel">
            <img style={{ maxHeight:'72px'}} src="/images/Medium-Symbol-Black.png" alt="Medium"></img>
          </a>
          <a className={utilStyles.floatchild}  href="https://www.goodreads.com/user/show/62972222-skyler-jokiel">
            <img style={{ maxHeight:'72px'}} src="/images/goodreads-logo.jpeg" alt="Goodreads"></img>
          </a>
      </section>
    </Layout>
  )
}