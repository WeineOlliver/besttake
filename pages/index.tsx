import { NextPage } from 'next'
import theme from 'styles/theme'
import Navigation from 'components/navigation'
import Leadspace from 'components/leadspace'

const IndexPage: NextPage = () => {
    return (
        <main>
            <style jsx global>
                {`
                    html {
                        fontfamily: ${theme.fontFamily};
                    }
                    * {
                        margin: 0;
                        padding: 0;
                    }
                `}
            </style>
            <Navigation />
            <Leadspace />
        </main>
    )
}

export default IndexPage
