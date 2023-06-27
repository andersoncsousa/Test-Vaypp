
import Navbar from "@/Components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/Components/Footer/Footer";
import styles from "../styles/helpCenter.module.scss";

const helpCenter = () => {

  return (
    <div className={styles.helpCenter}>
      <Navbar />
        <div className={styles.helpCenterContent}>
            <h3 className={styles.title}>
                <div className={styles.detail}></div> 
                Central de Ajuda
            </h3>
            <h4 className={styles.subTitle}>
                Olá, como podemos ajudar você?
            </h4>
        </div>

        <div className={styles.rowCards}>
            <div className={styles.cardHelp}>
                <Image className={styles.cardHelpImg} src={'/photo-test.png'} width={150} height={150} alt="Vaypp" />
                <h4>
                    Comprei pela Vaypp e preciso de ajuda
                </h4>
            </div>
            <div className={styles.cardHelp}>
                <Image className={styles.cardHelpImg} src={'/photo-test.png'} width={150} height={150} alt="Vaypp" />
                <h4>
                    Comprei pela Vaypp e preciso de ajuda
                </h4>
            </div>
            <div className={styles.cardHelp}>
                <Image className={styles.cardHelpImg} src={'/photo-test.png'} width={150} height={150} alt="Vaypp" />
                <h4>
                    Comprei pela Vaypp e preciso de ajuda
                </h4>
            </div>
            <div className={styles.cardHelp}>
                <Image className={styles.cardHelpImg} src={'/photo-test.png'} width={150} height={150} alt="Vaypp" />
                <h4>
                    Comprei pela Vaypp e preciso de ajuda
                </h4>
            </div>
        </div>

        <div className={styles.boxContact}>
            <h4>
                Quer receber ajuda personalizada? Nos envie uma mensagem.
            </h4>
            <Link href={'/'} title="Entre em contato" className={styles.btnContact}>
                Entre em contato
            </Link>    
        </div>

        <div className={styles.boxDoubt}>
            <h4>Talvez a sua dúvida pode estar aqui</h4>

            <div className={styles.rowCards}>
                <div className={styles.cardDoubt}>
                    <h5>Sua compra</h5>
                    <div>
                        <a href="#">Lorem ipsum dolor sit amet</a>
                        <a href="#">Lorem ipsum dolor sit amet</a>
                        <a href="#">Lorem ipsum dolor sit amet</a>
                        <a href="#">Lorem ipsum dolor sit amet</a>
                    </div>
                </div>
                <div className={styles.cardDoubt}>
                    <h5>Cancelamento e Reembolso</h5>
                    <div>
                        <a href="#">Lorem ipsum dolor sit amet</a>
                        <a href="#">Lorem ipsum dolor sit amet</a>
                        <a href="#">Lorem ipsum dolor sit amet</a>
                        <a href="#">Lorem ipsum dolor sit amet</a>
                    </div>
                </div>
                <div className={styles.cardDoubt}>
                    <h5>Conta e Cadastro</h5>
                    <div>
                        <a href="#">Lorem ipsum dolor sit amet</a>
                        <a href="#">Lorem ipsum dolor sit amet</a>
                        <a href="#">Lorem ipsum dolor sit amet</a>
                        <a href="#">Lorem ipsum dolor sit amet</a>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.boxTalkHelp}>
            <h4>
                Precisa falar com a gente?
            </h4>
            <p>
                Se nossos artigos não te ajudaram, entre em contato e vamos responder assim que possível
            </p>
            <Link href={'/'} className={styles.btnTalkHelp} title="Entrar em contato"> 
                Entrar em contato
            </Link>
        </div>
      <Footer />
    </div>
  );
};

export default helpCenter;
