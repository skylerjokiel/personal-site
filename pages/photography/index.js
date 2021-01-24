import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function PhotographyPage({ allPostsData }) {
    return (
        <Layout photography>
            <Head>
                <title>Photography</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                photos coming soon... 
            </section>
        </Layout>
    )
}
