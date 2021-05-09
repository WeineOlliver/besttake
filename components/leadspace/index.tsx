import Image from 'next/image'
import theme from 'styles/theme'

const Leadspace: React.FC = () => {
    return (
        <div className="leadspace">
            <style jsx>
                {`
                    .leadspace {
                        background-color: ${theme.colors.black};
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                    }
                `}
            </style>
            <Image
                src="/logo.png"
                alt=" A logo da Best Take em um formato onde parece que as duas Letras T forma uma claquete"
                layout="fill"
                objectFit="contain"
            />
        </div>
    )
}

export default Leadspace
