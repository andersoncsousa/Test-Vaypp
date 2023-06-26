import styles from "../styles/contact.module.scss";
import Link from "next/link";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.Contact}>
                <h3 className={styles.title}><div className={styles.detail}></div> Entre em contato</h3>
                
                <hr className={styles.line} />

                <div className={styles.BoxFormContact}>
                    <form action="" method="post" className={styles.FormContact}>
                        <h3 className={styles.titleForm}>Preencha o formulário</h3>

                        <label htmlFor="name" 
                        className={styles.labelForm}>
                            Nome completo
                        </label>
                        <input type="text" name="Nome completo" 
                        id="name" 
                        placeholder="Digite seu nome completo"
                        className={styles.inputForm} />

                        <label htmlFor="tel" 
                        className={styles.labelForm}>
                            Telefone
                        </label>
                        <input type="text" name="tel" 
                        id="tel" 
                        placeholder="Digite seu telefone"
                        className={styles.inputForm} />

                        <label htmlFor="email" 
                        className={styles.labelForm}>
                            E-mail
                        </label>
                        <input type="text" name="E-mail" 
                        id="email" 
                        placeholder="Digite seu e-mail"
                        className={styles.inputForm} />

                        <label htmlFor="subject" 
                        className={styles.labelForm}>
                            Motivo do contato
                        </label>
                        <input type="text" name="subject" 
                        id="subject" placeholder="Dúvida sobre a plataforma"
                        className={styles.inputForm} />

                        <label htmlFor="mensagem" 
                        className={styles.labelForm}>
                            Mensagem
                        </label>
                        <textarea rows="4" cols={'100%'} type="textarea" name="Motivo do contato" 
                        id="mensagem" placeholder="Escreva seu comentário aqui"
                        className={styles.inputFormTextArea} />

                        <Link href="/" 
                        title="Enviar" 
                        className={styles.btnSend}>
                            Enviar
                        </Link>
                    </form>
                    <div className={styles.BoxTextContact}>
                        <h3>Envie-nos uma mensagem</h3>
                        <h4>que retornaremos o<br/> mais breve possível.</h4>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;