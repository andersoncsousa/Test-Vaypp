import Line from "@/Components/Line/Line";
import styles from "../styles/login.module.scss";
import Link from "next/link";

import {AiFillGoogleCircle, AiFillEye, AiFillEyeInvisible, AiOutlineMail, AiFillLock} from 'react-icons/ai'

const Registre = () => {
    return (
        <div className={styles.Registro}>
            <div className={styles.boxForm}>
                <form action=""className={styles.Form}>
                    <h3>Crie sua conta</h3>

                    <input type="email" placeholder="Seu Email" className={styles.inputForm} />

                    <input type="text" placeholder="Seu nome" className={styles.inputForm} />

                    <input type="password" placeholder="Sua Senha" className={styles.inputForm} />

                    <input type="password" placeholder="Confirme sua senha" className={styles.inputForm} />


                    <div className={styles.boxFormBtns}>
                        <p>Eai vamos começar?</p>
                        <div className={styles.boxBtns}>
                            <a href="#" title="vender meus produtos" className={styles.btnVenda}>vender meus produtos</a>
                            <a href="#" 
                            target="_blank" className={styles.btnComprar}>Comprar Cursos</a>
                        </div>
                    </div>

                    <hr className={styles.line} />

                    <div className={styles.boxTermos}>
                        <p>Ao se registrar, você aceita nossos  
                                <a href="http://" target="_blank">
                                termos de uso
                            </a>e a nossa   
                            <a href="http://" target="_blank">
                                política de privacidade
                            </a>
                        </p>
                    </div>

                    <div className={styles.boxGoogle}>
                         <a href="#" title="Cadastrar" className={styles.btnLogin}>Cadastrar</a>
                    </div>
                </form>
            </div>
            <div className={styles.boxTextRegistro}>
                <h2>
                    Vaypp
                </h2>
                <h3>
                    Faça o seu registro
                    e venha crescer
                    com a gente!
                </h3>
                <h4>Já tem uma conta? 
                    <Link href="/login"
                    className={styles.linkBack} 
                    title="Voltar para login"> Voltar para login</Link>
                </h4>
            </div>
        </div>
    )
}

export default Registre;