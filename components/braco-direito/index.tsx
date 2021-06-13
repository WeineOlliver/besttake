import theme from 'styles/theme'
import Image from 'next/image'

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
                            padding: 0px 77px 0px 77px;

                            .hero__paragraph {
                                &--medium {
                                    font-size: 36px;
                                }
                            }

                            p {
                                margin-bottom: 54px;
                            }

                            @media (max-width: 500px) {
                                height: 100vh;
                                padding: 25px;
                                margin-bottom: 50px;
                                margin-top: 50px;
                            }
                            .partner__icon {
                                padding-top: 50px;
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
                <p className="hero__paragraph--medium">
                    Com distribuição da O2 play, o drama/policial ”O Braço Direito” marca sua
                    estréia como diretor num longa-metragem ficcional.
                </p>
                <p className="hero__paragraph--medium">
                    Em Cartaz em todas as plataformas digitais.
                </p>
                <p className="hero__paragraph--medium">Em breve na Amazon</p>
                <span>
                    <a
                        target="_blank"
                        href="https://www.primevideo.com/ref=atv_nb_logo?_encoding=UTF8&language=pt_BR"
                        rel="noreferrer"
                    >
                        <Image
                            className="partner__icon"
                            src="/prime-video.png"
                            alt="logo marca do amazon prime"
                            width={541}
                            height={150}
                            layout="intrinsic"
                        />
                    </a>
                </span>
            </div>
        </div>
    )
}

export default BracoDireito
