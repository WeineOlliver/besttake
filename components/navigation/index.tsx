import theme from 'styles/theme'

const Navigation: React.FC = () => {
    return (
        <div className="nav__container">
            Hello im navigation
            <style jsx>{`
                .nav__container {
                    color: ${theme.colors.black};
                }
            `}</style>
        </div>
    )
}

export default Navigation
