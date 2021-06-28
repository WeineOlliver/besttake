import theme from 'styles/theme'
import Image from 'next/image'

const ProcuraDeDayse: React.FC = () => {
    return (
        <div id="procura-de-dayse" className="hero__container--black">
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

                            .hero__paragraph {
                                &--light {
                                    font-size: 36px;
                                    font-weight: 100px;
                                }
                            }

                            p {
                                margin-bottom: 54px;
                                &:nth-child(1) {
                                    font-size: 25px;
                                }
                                &:nth-child(2) {
                                    font-size: 25px;
                                }

                                &:nth-child(3) {
                                    font-size: 30px;
                                    text-align: right;
                                }
                            }

                            @media (max-width: 500px) {
                                height: 75vh;
                                padding: 25px;
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
                    src="/procura-de-dayse-1.png"
                    alt="A silueta de um homem encapuzado segurando uma arma com um background bege com uma chamada para o longa metragem Braço direito de Rodrigo Reinhardt"
                    width={840}
                    height={480}
                    layout="responsive"
                />
                <Image
                    src="/procura-de-dayse-2.png"
                    alt="A silueta de um homem encapuzado segurando uma arma com um background bege com uma chamada para o longa metragem Braço direito de Rodrigo Reinhardt"
                    width={840}
                    height={480}
                    layout="responsive"
                />
            </div>
            <div className="hero__content">
                <p>”À Procura de Dayse”</p>
                <p className="hero__paragraph--light">
                    Dayse Tenório foi vista por 60 milhões de pessoas. Quem é Dayse Tenório?
                </p>
                <p className="hero__paragraph--light">
                    Longa-metragem de estréia de Guilherme de Oliveira, documentário com lançamento
                    para 2022.
                </p>
            </div>
        </div>
    )
}

export default ProcuraDeDayse
