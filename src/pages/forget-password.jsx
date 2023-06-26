import Line from "@/Components/Line/Line";
import styles from "../styles/login.module.scss";
import Link from "next/link";

import {AiFillGoogleCircle, AiFillEye, AiFillEyeInvisible, AiOutlineMail, AiFillLock} from 'react-icons/ai'

const ForgetPassword = () => {
    return (
        <div className={styles.ForgetPassword}>
            <h3>Recuperar senha</h3>
            <div className={styles.boxForm}>
                <form action=""className={styles.Form}>

                    <input type="email" 
                    placeholder="Digite seu e-mail" 
                    className={styles.inputForm} />

                    <Link href="/" 
                    title="Recuperar" 
                    className={styles.btnLogin}>
                        Recuperar
                    </Link>
                    <Link href="/login" 
                    title="Voltar" 
                    className={styles.btnBack}>
                        Voltar
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword;