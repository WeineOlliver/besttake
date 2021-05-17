import theme from 'styles/theme'
import Image from 'next/image'

const AboutMe: React.FC = () => {
    return (
        <>
            <div id="contato" className="about__container">
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
                            }
                        }

                        .about__content {
                            display: flex;
                            margin-left: 77px;
                            flex-wrap: wrap;
                            justify-content: center;
                            flex-direction: column;
                            align-items: flex-start;
                            font-size: 56px;
                            margin-bottom: 85px;

                            @media (max-width: 500px) {
                                flex-direction: column;
                                margin-left: 25px;
                            }
                        }
                        .about__heading {
                            font-size: 48px;
                            margin-bottom: 87px;
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
                        .about__email {
                            display: flex;
                            flex-direction: column;
                            justify-content: space-evenly;
                            width: 622px;
                            height: 439px;
                            border: solid ${theme.colors.white} 1px;
                            margin-right: 138px;
                            margin-left: 95px;
                            margin-top: 233px !important;

                            @media (max-width: 500px) {
                                width: 350px;
                                margin-right: 0px;
                                margin-left: 30px;
                                margin-top: 0px !important;
                                margin-bottom: 45px;
                            }

                            .about__subheading {
                                margin-left: 64px;

                                @media (max-width: 500px) {
                                    margin-left: 45px;
                                }
                            }

                            input {
                                width: auto;
                                height: 40px;
                                border: 1px solid rgba(255, 255, 255, 0.5);
                                background: rgba(17, 17, 17, 1);
                                margin-left: 64px;
                                margin-right: 64px;

                                @media (max-width: 500px) {
                                    margin-left: 45px;
                                    margin-right: 45px;
                                }
                                &.input__message {
                                    height: 120px !important;
                                }
                            }

                            button {
                                background: rgba(24, 160, 251, 1);
                                border-radius: 6px;
                                color: ${theme.colors.white};
                                height: 40px;
                                width: 130px;
                                border-radius: 6px;
                                margin-left: 64px;

                                @media (max-width: 500px) {
                                    margin-left: 45px;
                                }
                            }
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
                    <p className="about__heading">Rodrigo Reinhardt</p>
                    <Image
                        className="about__image"
                        src="/rodrigo-reinhardt.png"
                        alt=" A logo da Best Take em um formato onde parece que as duas Letras T forma uma claquete"
                        width={200}
                        height={200}
                        layout="intrinsic"
                    />
                    <p className="about__subheading">Sed ut perspiciatis</p>
                    <p className="about__paragraph">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                        nesciunt. Neque porro quisquam est.
                    </p>
                </div>
                <div className="about__email">
                    <p className="about__subheading">Envie sua mensagem</p>
                    <input type="text" />
                    <input className="input__message" type="text" />
                    <button type="submit">Enviar</button>
                </div>
                <hr />
                <div className="about__social">
                    <div>
                        <p>© Besttake, Inc. 2019. We love our users!</p>
                    </div>
                    <div className="about__follow">
                        <span>Follow us: </span>
                        <img
                            className="social__icon"
                            src="/facebook-icon.png"
                            alt="icone do facebook"
                            width={32}
                            height={32}
                        />
                        <img
                            className="social__icon"
                            src="/instagram-icon.png"
                            alt="icone do instagram"
                            width={32}
                            height={32}
                        />
                        <img
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
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe
