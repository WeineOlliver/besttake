import { SyntheticEvent } from 'react'
import theme from 'styles/theme'

const Navigation: React.FC = () => {
    const handleClick = (event: SyntheticEvent, reference: string): void => {
        event.preventDefault()
        return document.getElementById(reference)?.scrollIntoView({
            behavior: 'smooth',
        })
    }

    return (
        <div className="nav__container">
            <style jsx>{`
                .nav__container {
                    position: fixed;
                    color: ${theme.colors.black};
                    background-color: ${theme.colors.white};
                    width: 100%;
                    height: 60px;
                    display: flex;
                    justify-content: center;
                    z-index: 1;
                    border-bottom: solid 1px #cacaca;

                    @media (max-width: 500px) {
                        justify-content: space-around;
                        button {
                            flex: 1;
                        }
                    }

                    button {
                        background-color: ${theme.colors.white};
                        border: none;
                        width: 10%;
                        font-size: 15px;
                        line-height: 18px;
                        @media (max-width: 500px) {
                            overflow-wrap: break-word;
                            text-overflow: ellipsis;
                        }
                    }
                }
            `}</style>
            <button onClick={(e) => handleClick(e, 'o-curto-adeus')}> O Curto Adeus</button>
            <button onClick={(e) => handleClick(e, 'braco-direito')}> O Braço Direito</button>
            <button onClick={(e) => handleClick(e, 'procura-de-dayse')}>À Procura de Dayse</button>
            <button onClick={(e) => handleClick(e, 'contato')}>Contato</button>
        </div>
    )
}

export default Navigation
