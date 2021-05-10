import theme from 'styles/theme'
import Image from 'next/image'
import Link from 'next/link'

const CurtoAdeus: React.FC = () => {
    return (
        <div className="hero__container--white">
            <style jsx>
                {`
                    .hero__container--white {
                        display: flex;
                        justify-content: center;
                        align-items: stretch;
                        background-color: ${theme.colors.white};

                        div {
                            flex: 1;
                        }

                        .image__mosaic {
                            display: flex;
                            justify-content: center;
                            align-items: stretch;

                            div {
                                flex: 1;
                            }
                        }

                        .hero__content {
                            display: flex;
                            justify-content: center;
                            flex-direction: column;
                            align-items: flex-start;
                            font-size: 56px;
                            padding: 77px;
                        }
                    }
                `}
            </style>
            <div className="hero__content">
                <p>O curto adeus, mais de 100K espectadores em horario nobre</p>
                <Link href="https://canaisglobo.globo.com/c/canal-brasil/">
                    <Image
                        className="partner__icon"
                        src="/canal-brasil.png"
                        alt="logo marca do canal Brasil"
                        width={104}
                        height={110}
                        layout="intrinsic"
                    />
                </Link>
            </div>
            <div className="image__mosaic">
                <div>
                    <Image
                        src="/curto-adeus-scene1.png"
                        alt=" A logo da Best Take em um formato onde parece que as duas Letras T forma uma claquete"
                        width={420}
                        height={412}
                        layout="responsive"
                    />
                    <Image
                        src="/curto-adeus-scene2.png"
                        alt=" A logo da Best Take em um formato onde parece que as duas Letras T forma uma claquete"
                        width={420}
                        height={548}
                        layout="responsive"
                    />
                </div>
                <div>
                    <Image
                        src="/curto-adeus-scene3.png"
                        alt=" A logo da Best Take em um formato onde parece que as duas Letras T forma uma claquete"
                        width={420}
                        height={960}
                        layout="responsive"
                    />
                </div>
            </div>
        </div>
    )
}

export default CurtoAdeus
