import styles from "./RangeHelp.module.scss";

const RangeHelp = () =>{
    return(
        <div className={styles.RangeHelp}>
            <h3>Ficou com alguma dúvida?</h3>
            <a href="http://" target="_blank" 
            rel="noopener noreferrer">Tirar dúvidas</a>
        </div>
    )
}

export default RangeHelp;