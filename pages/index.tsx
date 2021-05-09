import { NextPage } from 'next'
import theme from 'styles/theme'
import Navigation from 'components/navigation'

const IndexPage: NextPage = () => {
    return (
        <main>
            <style jsx global>
                {`
                    html {
                        fontfamily: ${theme.fontFamily};
                    }
                `}
            </style>
            <Navigation />
            <h1> Hello World </h1>
        </main>
    )
}

export default IndexPage
