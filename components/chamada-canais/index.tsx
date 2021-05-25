import theme from 'styles/theme'
import Image from 'next/image'
import Link from 'next/link'

const ChamadaCanais: React.FC = () => {
    return (
        <div className="hero__container--white">
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

                            h3 {
                                font-size: 48px;
                                line-height: 72px;
                            }

                            p {
                                margin-top: 59px;
                                font-size: 36px;
                                line-height: 50px;
                            }

                            @media (max-width: 500px) {
                                height: 100vh;
                                padding: 25px;
                                margin-top: 50px;
                            }
                            padding: 77px;
                        }

                        .platform__icons {
                            display: flex;
                            flex: 1;
                            width: 100%;
                            justify-content: space-around;
                            max-height: 243px;
                            align-items: center;
                            flex-wrap: wrap;
                            margin-top: 108px;

                            @media (max-width: 500px) {
                                margin-top: 70px;
                                justify-content: space-between;
                                align-items: center;
                                margin-bottom: 30px;
                            }

                            a {
                                flex-basis: 33.3333%;

                                @media (max-width: 500px) {
                                    flex-basis: 26%;
                                }
                            }
                        }
                    }
                `}
            </style>
            <div className="hero__content">
                <h3>Um thriller que vai te prender do primeiro ao ultimo minuto</h3>
                <p>Assista já na sua casa</p>
                <div className="platform__icons">
                    <Link href="https://tv.apple.com/br/movie/o-braco-direito/umc.cmc.2ugrs91g3geiy63mx5qvsd1bi">
                        <a>
                            <Image
                                className="partner__icon"
                                src="/apple-tv.png"
                                alt="logo marca da apple tv"
                                width={123}
                                height={76}
                                layout="intrinsic"
                            />
                        </a>
                    </Link>
                    <Link href="https://play.google.com/store/movies/details/O_Bra%C3%A7o_Direito?id=xW_jxpVKBRk.P&hl=pt-br">
                        <a>
                            <Image
                                className="partner__icon"
                                src="/playstore.png"
                                alt="logo marca da playstore"
                                width={71}
                                height={76}
                                layout="intrinsic"
                            />
                        </a>
                    </Link>
                    <Link href="https://www.vivoplay.com.br/details/movie/o-braco-direito-11327387">
                        <a>
                            <Image
                                className="partner__icon"
                                src="/vivo-play.png"
                                alt="logo marca do vivo play"
                                width={76}
                                height={76}
                                layout="intrinsic"
                            />
                        </a>
                    </Link>
                    <Link href="https://www.claro.com.br/now">
                        <a>
                            <Image
                                className="partner__icon"
                                src="/now.png"
                                alt="logo marca do net now"
                                width={151}
                                height={76}
                                layout="intrinsic"
                            />
                        </a>
                    </Link>
                    <Link href="https://www.looke.com.br/filmes/o-braco-direito">
                        <a>
                            <Image
                                className="partner__icon"
                                src="/looke.png"
                                alt="logo marca do looke"
                                width={76}
                                height={76}
                                layout="intrinsic"
                            />
                        </a>
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=WWCN_PyLnek">
                        <a>
                            <Image
                                className="partner__icon"
                                src="/youtube.png"
                                alt="logo marca do youtube"
                                width={76}
                                height={76}
                                layout="intrinsic"
                            />
                        </a>
                    </Link>
                </div>
            </div>
            <div>
                <Image
                    src="/braco-direito-hero.png"
                    alt=" Tres homens numa floresta olhando na mesma direção"
                    width={840}
                    height={960}
                    layout="responsive"
                />
            </div>
        </div>
    )
}

export default ChamadaCanais
