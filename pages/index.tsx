import { NextPage } from 'next'
import Navigation from 'components/navigation'
import Leadspace from 'components/leadspace'
import CurtoAdeus from 'components/curto-adeus'
import BracoDireito from 'components/braco-direito'
// import ImageGallery from 'components/image-gallery'
import AboutMe from 'components/about-me'

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
                    * {
                        margin: 0;
                        padding: 0;
                    }
                    .partner__icon {
                        cursor: pointer;
                    }
                    .ReactGridGallery_tile {
                        margin: 0 !important;
                    }
                `}
            </style>
            <Navigation />
            <Leadspace />
            <CurtoAdeus />
            <BracoDireito />
            {/* <ImageGallery /> */}
            <AboutMe />
        </main>
    )
}

export default IndexPage
