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
                <a href="#" className={styles.btnBanner} title="Criei sua conta Grátis"> Criei sua conta Grátis</a>
            </div>
            <div className={styles.BannerImg}>
                <Image
                    src="/banner-principal.png"
                    alt=""
                    width={725}
                    height={500}
                />
            </div>
        </div>
    </div>
  );
};

export default BannerPrincipal;