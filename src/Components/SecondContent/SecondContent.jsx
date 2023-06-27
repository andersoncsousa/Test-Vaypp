import Image from "next/image";
import styles from "./SecondContent.module.scss";
// import { areaMembro } from "@/assets";
import Link from "next/link";
import { secondContent } from "@/constants";

const SecondContent = () => {

    return (
        <div className={styles.secondContent}>
            <h3 className={styles.title}>
                Prepare-se para mudar o rumo do seu negócio com as ferramentas que irão
                alavancar seu sucesso!
            </h3>
            <div className={styles.boxSecond}>
                <div className={styles.iconsBox}>
                    <Image src='./area-membro.svg' alt="Área de membros" width={80} height={80} />
                    <div className={styles.boxText}>
                        <h3>Área de membros</h3>
                        <p>
                            Sinta a emoção de uma plataforma de filmes na nossa 
                            área de membros, com menus intuitivos e modernos!
                        </p>
                    </div>
                </div>
                <div className={styles.iconsBox}>
                    <Image src='./vayypZap.svg' alt="VayppZap" width={80} height={80} />
                    <div className={styles.boxText}>
                        <h3 style={{paddingBottom: '4rem'}}>VayppZap</h3>
                        <p>
                            Com nossa ferramenta gratuita, resgate suas 
                            vendas pelo WhatsApp e dê um impulso ao seu negócio!
                        </p>
                    </div>
                </div>
                <div className={styles.iconsBox}>
                    <Image src='./aprovacaoImediata.svg' alt="Aprovação imediata" width={80} height={80} />
                    <div className={styles.boxText}>
                        <h3>Aprovação imediata</h3>
                        <p>
                            Com a nossa plataforma, coloque seu produto e 
                            veja suas vendas aumentarem instantaneamente, 
                            sem preocupações!
                        </p>
                    </div>
                </div>
                <div className={styles.iconsBox}>
                    <Image src='./placasPremiacao.svg' alt="Placas de Premiações" width={80} height={80} />
                    <div className={styles.boxText}>
                        <h3>Placas de Premiações</h3>
                        <p>
                            Nós oferecemos as melhores premiações, que 
                            são muito mais do que simples placas, elas 
                            são um reconhecimento do seu esforço!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondContent;
