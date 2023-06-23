import styles from "./FourthContent.module.scss";

const FourthContent = () =>{
    return(
        <div className={styles.FourthContent}>
            <h3>
                Faça parte da revolução!
                Conecte-se e brilhe conosco.
            </h3>
            <div className={styles.FourthCardBox}>
                <div className={styles.FourthCard}>
                    <h5>
                        Sou produtor(a)!
                    </h5>
                    <h4>
                        Adicione seus produtos
                    </h4>
                    <p>
                        Maximize seu potencial de lucro como 
                        produtor em nossa plataforma, onde oferecemos recursos 
                        exclusivos e suporte personalizado.
                    </p>
                    <a href="http://" target="_blank" 
                    rel="noopener noreferrer" 
                    title="Quero ser produtor(a)!">
                    Quero ser produtor(a)!
                    </a>
                </div>
                <div className={styles.FourthCard}>
                    <h5>
                        Sou Afiliado(a)!
                    </h5>
                    <h4>
                        Alcance seu sucesso 
                    </h4>
                    <p>
                        Não perca tempo! Seja um afiliado em nossa plataforma 
                        e comece a ganhar dinheiro de forma fácil e divertida, 
                        compartilhando produtos incríveis com seu público.
                    </p>
                    <a href="http://" target="_blank" 
                    rel="noopener noreferrer" 
                    title="Quero ser produtor(a)!">
                        Quero ser afiliado(a)!
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FourthContent;