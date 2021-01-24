import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function BooksPage({ allPostsData }) {
    return (
        <Layout books>
            <Head>
                <title>Books</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                coming soon... 
            </section>
        </Layout>
    )
}
