import { NextPage } from 'next'
import { useEffect } from 'react'
import Head from 'next/head'
import smoothscroll from 'smoothscroll-polyfill'

import Navigation from 'components/navigation'
import Leadspace from 'components/leadspace'
import CurtoAdeus from 'components/curto-adeus'
import BracoDireito from 'components/braco-direito'
import AboutMe from 'components/about-me'

const IndexPage: NextPage = () => {
    useEffect(function onFirstMout() {
        smoothscroll.polyfill()
    })

    return (
        <main>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="Best take - Rodrigo Reinhardt" key="title" />
                <meta name="description" content="Best take is a Film Maker by Rodrigo Reinhardt" />
                <meta
                    name="keywords"
                    content="best take, rodrigo reinhardt, rodrigo sicolli, braço direito, o curto adeus, braco direito"
                />
                <meta name="author" content="Weine Oliveira" />
                <meta name="robots" content="index, follow" />
                <meta property="og:image:type" content="logo/png" />
                <meta property="og:url" content="https://besttake.com" />
                <meta property="og:site_name" content="Best take - Rodrigo Reinhardt" />
                <title>Best take - Rodrigo Reinhardt</title>
            </Head>
            <style jsx global>
                {`
                    @font-face {
                        font-family: 'Montserrat';
                        src: url('/fonts/montserrat/Montserrat-Regular.ttf');
                        font-style: normal;
                        font-weight: 400;
                        font-display: swap;
                    }
                    html {
                        font-family: 'Montserrat', sans-serif;
                    }
                    html,
                    body {
                        overflow-x: hidden;
                    }
                    * {
                        margin: 0;
                        padding: 0;
                    }
                    .partner__icon {
                        cursor: pointer;
                    }
                `}
            </style>
            <Navigation />
            <Leadspace />
            <CurtoAdeus />
            <BracoDireito />
            <AboutMe />
        </main>
    )
}

export default IndexPage
