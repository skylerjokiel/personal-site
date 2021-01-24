import Head from 'next/head'
import Layout, { name } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
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
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  )
}
