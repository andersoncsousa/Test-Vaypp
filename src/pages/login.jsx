import Line from "@/Components/Line/Line";
import styles from "../styles/login.module.scss";

import {AiFillGoogleCircle, AiFillEye, AiFillEyeInvisible, AiOutlineMail, AiFillLock} from 'react-icons/ai'

const Login = () => {
    return (
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

                    <a href="http://" target="_blank" className={styles.btnLink}>Esqueci minha senha</a>

                    <a href="#" title="Entrar" className={styles.btnLogin}>Entrar</a>

                    <p>Não tem uma conta? <a href="#" 
                    target="_blank" className={styles.btnLink}>Registre-se</a>
                    </p>

                    <hr className={styles.line} />

                    <div className={styles.boxGoogle}>
                        <p>Ou entre com</p>
                        <a href="http://" target="_blank" className={styles.btnGoogle}>
                            <AiFillGoogleCircle style={{color:'#0B96C266', width:'24px'}}/>
                            Google
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;