import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const name = 'Skyler Jokiel'

export default function Layout({
    children,
    home,
    blog,
    photography,
    resume,
    books,
    projects
}) {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="description"
                        content="Learn how to build a personal website using Next.js"
                    />
                    <meta
                        property="og:image"
                        content={`https://og-image.now.sh/${encodeURI(
                            name
                        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                    />
                    <meta name="og:title" content={name} />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>
                <header className={styles.header}>
                    {/* Header Nav Bar */}
                    <div className={styles.topnav}>
                        <Link href='/'><a className={home ? styles.active : ''}>Home</a></Link>
                        <Link href='/resume'><a className={resume ? styles.active : ''}>Resume</a></Link>
                        <Link href='/blog'><a className={blog ? styles.active : ''}>Blog</a></Link>
                        <Link href='/photography'><a className={photography ? styles.active : ''}>Photography</a></Link>
                        <Link href='/books'><a className={books ? styles.active : ''}>Books</a></Link>
                        <Link href='/projects'><a className={projects ? styles.active : ''}>Projects</a></Link>
                    </div>


                    {/* Header Image and Name */}
                    {home ? (
                        <>
                            <img
                                src="/images/profile.jpg"
                                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                                alt={name}
                            />
                            <h1 className={utilStyles.heading2Xl}>{name}</h1>
                        </>
                    ) : (
                            <>
                                <Link href="/">
                                    <a>
                                        <img
                                            src="/images/profile.jpg"
                                            className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                            alt={name}
                                        />
                                    </a>
                                </Link>
                                <br />
                            </>
                        )}
                </header>
                <main>{children}</main>
            </div>
            <div class={styles.footer}>
                <p>© Skyler Jokiel</p>
            </div>
        </>
    )
}