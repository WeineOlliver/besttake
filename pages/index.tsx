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
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/android-icon-192x192.png"
                />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#111111" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#111111" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:title" content="BestTake - Rodrigo Reinhardt" key="title" />
                <meta name="description" content="BestTake is a Film Maker by Rodrigo Reinhardt" />
                <meta
                    name="keywords"
                    content="best take, rodrigo reinhardt, rodrigo sicolli, braço direito, o curto adeus, braco direito"
                />
                <meta name="author" content="Weine Oliveira" />
                <meta name="robots" content="index, follow" />
                <meta property="og:image:type" content="logo/png" />
                <meta property="og:url" content="https://besttake.com" />
                <meta property="og:site_name" content="BestTake - Rodrigo Reinhardt" />
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
