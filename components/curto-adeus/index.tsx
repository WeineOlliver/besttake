import theme from 'styles/theme'
import Image from 'next/image'
import Link from 'next/link'

const CurtoAdeus: React.FC = () => {
    return (
        <div id="o-curto-adeus" className="hero__container--white">
            <style jsx>
                {`
                    .hero__container--white {
                        display: flex;
                        justify-content: center;
                        align-items: stretch;
                        background-color: ${theme.colors.white};
                        @media (max-width: 500px) {
                            flex-direction: column;
                        }
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

                            @media (max-width: 500px) {
                                height: 100vh;
                                padding: 25px;
                            }

                            a {
                                margin-top: 70px;
                            }
                            padding: 77px;
                        }
                    }
                `}
            </style>
            <div className="hero__content">
                <p>O curto adeus, mais de 100K espectadores em horario nobre</p>
                <Link href="https://canaisglobo.globo.com/c/canal-brasil/">
                    <a>
                        <Image
                            className="partner__icon"
                            src="/canal-brasil.png"
                            alt="logo marca do canal Brasil"
                            width={104}
                            height={110}
                            layout="intrinsic"
                        />
                    </a>
                </Link>
            </div>
            <div className="image__mosaic">
                <div>
                    <Image
                        src="/curto-adeus-scene1.png"
                        alt=" Dois homens se encarando perto de uma roda de agua "
                        width={420}
                        height={412}
                        layout="responsive"
                    />
                    <Image
                        src="/curto-adeus-scene2.png"
                        alt="A vista de uma pessoa dentro de um poço"
                        width={420}
                        height={548}
                        layout="responsive"
                    />
                </div>
                <div>
                    <Image
                        src="/curto-adeus-scene3.png"
                        alt="Um senhor de idade mirando com uma arma"
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
