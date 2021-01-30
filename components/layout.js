import { useEffect, useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownContent}  from 'react-simple-dropdown';
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
                    <NavBar
                        home={home}
                        blog={blog}
                        photography={photography}
                        resume={resume}
                        books={books}
                        projects={projects} />
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
            <div className={styles.footer}>
                <p>© Skyler Jokiel</p>
            </div>
        </>
    )
}

function NavBar(props) {
    return (
        <div className={styles.topnav}>
            <span>
                <Link href='/'><a className={props.home ? styles.active : ''}>Home</a></Link>
                <Link href='/resume'><a className={props.resume ? styles.active : ''}>Resume</a></Link>
                <Link href='/blog'><a className={props.blog ? styles.active : ''}>Blog</a></Link>
            </span>
            <span>
                <Link href='/photography'><a className={props.photography ? styles.active : ''}>Photography</a></Link>
                <Link href='/books'><a className={props.books ? styles.active : ''}>Books</a></Link>
                <Link href='/projects'><a className={props.projects ? styles.active : ''}>Projects</a></Link>
            </span>
        </div >
    );
}

function useEvent(event, handler, triggers) {
    useEffect(() => {
        // initiate the event handler
        window.addEventListener(event, handler)
        // run the handler once at the beginning to make sure once the component is mounted it's in the
        // correct state
        handler();
        // this will clean up the event every time the component is re-rendered
        return function cleanup() {
            window.removeEventListener(event, handler)
        }
    }, triggers)
}