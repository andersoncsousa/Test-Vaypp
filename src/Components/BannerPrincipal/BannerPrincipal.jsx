import Image from "next/image";
import styles from "./BannerPrincipal.module.scss";
import Link from "next/link";
import {AiFillGoogleCircle} from 'react-icons/ai'

const BannerPrincipal = () => {
  return (
    <div>
        {/* <div className={styles.Banner}>
            <div className={styles.BannerText}>
                <h2>
                    Juntos, Vamos fazer seu <br/>
                    negócio decolar! <br />
                </h2>
                <h3>
                    Seja produtor, info-produtor ou afiliado<br/>
                    nossa plataforma é o passaporte<br />
                    para seu sucesso garantido
                </h3>
                <a href="#" className={styles.btnBanner} title="Crie sua conta Grátis"> Crie sua conta Grátis</a>
            </div>
            <div >
                <Image
                    src="/banner-principal2.png"
                    alt=""
                    width={650}
                    height={500}
                    className={styles.BannerImg}
                />
            </div>
        </div> */}

        <div className={styles.Login}>
            <div className={styles.boxText}>
                <h2>
                    Vaypp
                </h2>
                <h3>
                    Faça seu login
                    na plataforma
                </h3>
            </div>

            <div className={styles.boxForm}>
                <form action=""className={styles.Form}>
                    <input type="email" placeholder="Email" className={styles.inputForm} />

                    <input type="password" placeholder="Senha" className={styles.inputForm} />

                    <Link href="/forget-password" 
                    target="_blank" 
                    className={styles.btnLink}
                    >
                        Esqueci minha senha
                    </Link>

                    <a href="#" title="Entrar" className={styles.btnLogin}>Entrar</a>

                    <p>Não tem uma conta ?   <Link 
                            href="/registre" 
                            target="_blank" 
                            className={styles.btnLink}>
                                Registre-se
                        </Link>
                    </p>

                    <hr className={styles.line} />

                    <div className={styles.boxGoogle}>
                        <p>Ou entre com</p>
                        <Link href="http://" target="_blank" className={styles.btnGoogle}>
                            <AiFillGoogleCircle className={styles.iconGoogle}/>
                            
                            Google
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default BannerPrincipal;