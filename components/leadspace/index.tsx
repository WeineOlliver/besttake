import Image from 'next/image'
import theme from 'styles/theme'

const Leadspace: React.FC = () => {
    return (
        <div className="leadspace">
            <style jsx>
                {`
                    .leadspace {
                        background-color: ${theme.colors.black};
                        width: 100vw;
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                    }
                `}
            </style>
            <Image
                src="/logo.png"
                alt=" A logo da Best Take em um formato onde parece que as duas Letras T forma uma claquete"
                width={800}
                height={'100%'}
            />
        </div>
    )
}

export default Leadspace
