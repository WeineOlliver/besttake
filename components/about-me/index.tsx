import theme from 'styles/theme'
import Image from 'next/image'

const AboutMe: React.FC = () => {
    return (
        <>
            <div className="about__container">
                <style jsx>
                    {`
                        .about__container {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: center;
                            background-color: ${theme.colors.black};
                            color: ${theme.colors.white};
                            font-size: 56px;
                            @media (max-width: 500px) {
                                flex-direction: column;
                            }

                            div {
                                margin-top: 150px;
                                flex: 1;

                                @media (max-width: 500px) {
                                    margin-top: 75px;
                                }
                            }
                        }

                        .about__content {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: center;
                            align-items: flex-start;
                            font-size: 56px;
                            margin-bottom: 85px;

                            @media (max-width: 500px) {
                                flex-direction: column;
                            }
                        }
                        .about__heading {
                            text-align: center;
                            flex: 0 0 100%;
                            font-size: 48px;

                            @media (max-width: 500px) {
                                width: 100%;
                            }
                        }

                        .about__profile {
                            &--card {
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                margin-bottom: 87px;

                                @media (max-width: 500px) {
                                    margin-bottom: 0px;
                                }
                            }
                        }
                        .about__paragraph {
                            font-size: 18px;
                            font-weight: 100;
                            margin-top: 24px;
                        }
                        .about__subheading {
                            margin-top: 40px;
                            font-size: 24px;
                        }

                        hr {
                            flex: 100%;
                            height: 1px;
                            margin-right: 70px;
                            margin-left: 70px;
                            border: none;
                            background: rgba(255, 255, 255, 0.5);

                            @media (max-width: 500px) {
                                margin-right: 25px;
                                margin-left: 25px;
                            }
                        }

                        .about__social {
                            margin-right: 70px;
                            margin-left: 70px;
                            display: flex;
                            margin-top: 0px !important;
                            flex: 100%;
                            background-color: ${theme.colors.black};

                            a {
                                text-decoration: none;
                                color: rgba(24, 160, 251, 1);
                            }

                            @media (max-width: 500px) {
                                flex-direction: column;
                                align-items: center;
                                margin-right: 25px;
                                margin-left: 25px;
                            }

                            div {
                                flex: 50%;
                                margin-top: 42px !important;
                                margin-bottom: 70px;
                                font-size: 15px;

                                @media (max-width: 500px) {
                                    margin-top: 20px !important;
                                    margin-bottom: 10px !important;
                                }
                            }

                            .about__follow {
                                display: flex;
                                justify-content: flex-end;
                                align-items: center;

                                @media (max-width: 500px) {
                                    justify-content: center;
                                }
                            }

                            .social__icon {
                                margin-right: 5px;
                                margin-left: 5px;
                            }
                        }
                    `}
                </style>
                <div className="about__content">
                    <p className="about__heading">Realizadores</p>
                    <div className="about__profile--card">
                        <Image
                            className="about__image"
                            src="/rodrigo-reinhardt.png"
                            alt="Foto de Rodrigo reinhardt"
                            width={423}
                            height={288}
                            layout="intrinsic"
                        />
                        <p className="about__subheading">Rodrigo Reinhardt</p>
                    </div>
                    <div className="about__profile--card">
                        <Image
                            className="about__image"
                            src="/guilherme-oliveira.png"
                            alt="Foto de Guilherme de Oliveira"
                            width={423}
                            height={288}
                            layout="intrinsic"
                        />
                        <p className="about__subheading">Guilherme de Oliveira</p>
                    </div>
                    <div className="about__profile--card">
                        <Image
                            className="about__image"
                            src="/rodrigo-mallmann.png"
                            alt="Foto de Rodrigo Mallmann"
                            width={423}
                            height={288}
                            layout="intrinsic"
                        />
                        <p className="about__subheading">Rodrigo Mallmann</p>
                    </div>
                </div>
                <hr />
                <div id="contato" className="about__social">
                    <div>
                        <p>
                            Contato:
                            <a href="mailto:best.take.pf@gmail.com"> best.take.pf@gmail.com</a>
                        </p>
                    </div>
                    <div className="about__follow">
                        <span>Follow us: </span>
                        {/* <img
                            className="social__icon"
                            src="/facebook-icon.png"
                            alt="icone do facebook"
                            width={32}
                            height={32}
                        /> */}
                        <a
                            target="_blank"
                            href="https://www.instagram.com/rodrigosreinhardt/?hl=pt-br"
                            rel="noreferrer"
                        >
                            <img
                                className="social__icon"
                                src="/instagram-icon.png"
                                alt="icone do instagram"
                                width={32}
                                height={32}
                            />
                        </a>
                        {/* <img
                            className="social__icon"
                            src="/pinterest-icon.png"
                            alt="icone do pinterest"
                            width={32}
                            height={32}
                        />
                        <img
                            className="social__icon"
                            src="/youtube-icon.png"
                            alt="icone do youtube"
                            width={32}
                            height={32}
                        /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe
