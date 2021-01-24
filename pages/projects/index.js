import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function ProjectsPage() {
    return (
        <Layout projects>
            <Head>
                <title>Projects</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                coming soon... 
            </section>
        </Layout>
    )
}
