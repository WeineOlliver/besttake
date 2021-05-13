import { NextPage } from 'next'
import smoothscroll from 'smoothscroll-polyfill'
import Navigation from 'components/navigation'
import Leadspace from 'components/leadspace'
import CurtoAdeus from 'components/curto-adeus'
import BracoDireito from 'components/braco-direito'
import AboutMe from 'components/about-me'

smoothscroll.polyfill()

const IndexPage: NextPage = () => {
    return (
        <main>
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
