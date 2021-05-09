import theme from 'styles/theme'

const Navigation: React.FC = () => {
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

                    button {
                        background-color: ${theme.colors.white};
                        border: none;
                        width: 10%;
                        font-size: 15px;
                        line-height: 18px;
                    }
                }
            `}</style>
            <button>O curto adeus</button>
            <button>O braço direito</button>
            <button>Contato</button>
        </div>
    )
}

export default Navigation
