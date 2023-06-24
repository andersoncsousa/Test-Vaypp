import Line from "@/Components/Line/Line";
import styles from "../styles/login.module.scss";

import {AiFillGoogleCircle, AiFillEye, AiFillEyeInvisible, AiOutlineMail, AiFillLock} from 'react-icons/ai'

const Registre = () => {
    return (
        <div className={styles.Login}>
            <div className={styles.boxForm}>
                <h3>Crie sua conta</h3>
                <form action=""className={styles.Form}>

                    <input type="email" placeholder="Email" className={styles.inputForm} />

                    <input type="name" placeholder="Seu nome" className={styles.inputForm} />

                    <input type="password" placeholder="Senha" className={styles.inputForm} />

                    <input type="password" placeholder="Confirme sua senha" className={styles.inputForm} />

                    <a href="http://" target="_blank" >Eai vamos começar?</a>

                    <div className={styles.boxBtns}>
                        <a href="#" title="vender meus produtos" className={styles.btnVenda}>vender meus produtos</a>

                        <p>Não tem uma conta? <a href="#" 
                        target="_blank" className={styles.btnComprar}>Comprar Cursos</a>
                        </p>

                    </div>


                    <hr className={styles.line} />

                    <div className={styles.boxGoogle}>
                         <a href="#" title="Cadastrar" className={styles.btnLogin}>Cadastrar</a>
                    </div>
                </form>
            </div>
            <div className={styles.boxText}>
                <h2>
                    Vaypp
                </h2>
                <h3>
                    Faça seu login
                    na plataforma
                </h3>
            </div>
        </div>
    )
}

export default Registre;