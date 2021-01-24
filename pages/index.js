import Link from 'next/link'
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
        <p>Software engineer, Climber, Photographer, Woodworker</p>
        <p>
          <a href="https://twitter.com/skylerjokiel">Twitter</a>
          <br/>
          <a href="https://www.linkedin.com/in/skylerjokiel/">Linkedin</a>
        </p>
      </section>
      <p>
        <Link href={`/blog`}>Blog</Link>
      </p>
    </Layout>
  )
}
