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
                            justify-content: center;
                            background-color: ${theme.colors.black};
                            color: ${theme.colors.white};
                            font-size: 56px;

                            div {
                                margin-top: 150px;
                                flex: 1;
                            }
                        }

                        .about__content {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: center;
                            flex-direction: column;
                            align-items: flex-start;
                            font-size: 56px;
                            padding-left: 139px;
                            margin-bottom: 85px;
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

                            .about__subheading {
                                margin-left: 64px;
                            }

                            input {
                                width: auto;
                                height: 40px;
                                border: 1px solid rgba(255, 255, 255, 0.5);
                                background: rgba(17, 17, 17, 1);
                                margin-left: 64px;
                                margin-right: 64px;

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
                            }
                        }

                        hr {
                            height: 1px;
                            width: 1520px;
                            border-radius: 0px;
                            background: rgba(255, 255, 255, 0.5);
                        }

                        .about__social {
                            background-color: ${theme.colors.black};
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
            </div>
            {/* <hr />
            <div className="about__social">
                <div>
                    <p>© Besttake, Inc. 2019. We love our users!</p>
                </div>
                <div className="about__follow">
                    <span>Follow us: </span>
                </div>
            </div> */}
        </>
    )
}

export default AboutMe
