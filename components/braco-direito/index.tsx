import theme from 'styles/theme'
import Image from 'next/image'
import Link from 'next/link'

const BracoDireito: React.FC = () => {
    return (
        <div id="braco-direito" className="hero__container--black">
            <style jsx>
                {`
                    .hero__container--black {
                        display: flex;
                        justify-content: center;
                        align-items: stretch;
                        background-color: ${theme.colors.black};
                        color: ${theme.colors.white};

                        @media (max-width: 500px) {
                            flex-direction: column-reverse;
                        }

                        div {
                            flex: 1;
                        }

                        .hero__content {
                            display: flex;
                            justify-content: center;
                            flex-direction: column;
                            align-items: flex-start;
                            font-size: 56px;
                            padding: 77px;

                            @media (max-width: 500px) {
                                height: 100vh;
                                padding: 25px;
                            }
                            span {
                                padding-top: 30px;
                            }
                        }
                    }
                `}
            </style>
            <div>
                <Image
                    src="/braco-direito.png"
                    alt="A silueta de um homem encapuzado segurando uma arma com um background bege com uma chamada para o longa metragem Braço direito de Rodrigo Reinhardt"
                    width={840}
                    height={960}
                    layout="responsive"
                />
            </div>
            <div className="hero__content">
                <p>
                    Distribuição O2 play, em cartaz em todas plataformas digitais. Em breve no
                    <span>
                        <Link href="https://www.primevideo.com/ref=atv_nb_logo?_encoding=UTF8&language=pt_BR">
                            <span>
                                <Image
                                    className="partner__icon"
                                    src="/prime-video.png"
                                    alt="logo marca do amazon prime"
                                    width={672}
                                    height={186}
                                    layout="intrinsic"
                                />
                            </span>
                        </Link>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default BracoDireito
