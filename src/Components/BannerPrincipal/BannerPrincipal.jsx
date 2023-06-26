import Image from "next/image";
import styles from "./BannerPrincipal.module.scss";

const BannerPrincipal = () => {
  return (
    <div>
        <div className={styles.Banner}>
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
        </div>
    </div>
  );
};

export default BannerPrincipal;