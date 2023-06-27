import Image from "next/image";
import styles from "./ThirdContent.module.scss";

const ThirdContent = () => {
    return(
        <div className={styles.ThirdContent} id="solucoes">
            <h3>
                Juntos, podemos alavancar seus lucros e aumentar a escalabilidade do seu negócio!
            </h3>
            <div className={styles.boxContent}>
                <div className={styles.card}>
                    <Image src='./nossasTaxas.svg' alt="Nossas Taxas" width={70} height={70} />
                    <div className={styles.boxText}>
                        <h4>Nossas Taxas</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </p>
                    </div>
                    <Image src='./seta.svg' alt="seta" className={styles.seta} width={95} height={15} />
                </div>
                <div className={styles.card}>
                    <Image src='./checkout.svg' alt="Checkout V-Pro" width={70} height={70} />
                    <div className={styles.boxText}>
                        <h4>Checkout V-Pro</h4>
                        <p>
                            Imagine o impacto positivo no seu negócio 
                            com o nosso Checkout Personalizado de Alta 
                            Conversão, planejado para amplificar suas vendas!
                        </p>
                    </div>
                    <Image src='./seta.svg' alt="seta" className={styles.seta2} width={95} height={15} />
                </div>
                <div className={styles.card}>
                    <Image src='./upsell.svg' alt="Upsell One Click" width={70} height={70} />
                    <div className={styles.boxText}>
                        <h4>Upsell One Click</h4>
                        <p>
                            O nosso UPSELL ONE CLICK pode trazer um crescimento 
                            sem precedentes para suas vendas, elevando sua 
                            lucratividade a um novo patamar!
                        </p>
                    </div>
                    <Image src='./seta.svg' alt="seta" className={styles.seta} width={95} height={15} />
                </div>
                <div className={styles.card}>
                    <Image src='./relatorioVenda.svg' alt="Relatório de Vendas" width={70} height={70} />
                    <div className={styles.boxText}>
                        <h4>Relatório de Vendas</h4>
                        <p>
                            Aumente sua produtividade e conquiste novos patamares 
                            de sucesso com um relatório de vendas e desempenho 
                            que oferece insights poderosos e estratégias comprovadas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdContent;