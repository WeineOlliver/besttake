import { NextPage } from 'next'
import { useEffect } from 'react'
import Head from 'next/head'
import smoothscroll from 'smoothscroll-polyfill'

import Navigation from 'components/navigation'
import Leadspace from 'components/leadspace'
import CurtoAdeus from 'components/curto-adeus'
import BracoDireito from 'components/braco-direito'
import AboutMe from 'components/about-me'
import ChamadaCanais from 'components/chamada-canais'
import ProcuraDeDayse from 'components/procura-de-dayse'

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
                <meta
                    property="og:title"
                    content="Best Take Filmes - Rodrigo Reinhardt"
                    key="title"
                />
                <meta name="title" content="Best Take Filmes - Rodrigo Reinhardt" />
                <meta
                    name="description"
                    content="A Best Take Filmes é uma produtora de cinema sediada em São Paulo (SP),
fundada em 2017 e dirigida pelo cineasta Rodrigo Reinhardt."
                />
                <meta
                    name="keywords"
                    content="Best Take, rodrigo reinhardt, produtora de filmes, takefilmes, best take sao paulo, take filmes sao paulo, best take filmes, take filmes"
                />
                <meta name="author" content="Weine Oliveira" />
                <meta name="robots" content="index, follow" />
                <meta property="og:image:type" content="logo/png" />
                <meta property="og:url" content="https://besttake.com.br" />
                <meta property="og:site_name" content="Best Take Filmes - Rodrigo Reinhardt" />
                <title>Best Take Filmes - Rodrigo Reinhardt</title>
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
            <ChamadaCanais />
            <ProcuraDeDayse />
            <AboutMe />
        </main>
    )
}

export default IndexPage
