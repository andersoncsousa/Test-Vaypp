import styles from "../styles/data.module.scss";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import {AiFillGoogleCircle, AiFillEye, AiFillEyeInvisible, AiOutlineMail, AiFillLock} from 'react-icons/ai'
import {PiUserSwitch} from 'react-icons/pi'

const data = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.Data}>
                <h3 className={styles.title}><div className={styles.detail}></div> Dados Pessoais</h3>
                
                <hr className={styles.line} />

                <div className={styles.boxPhoto}>
                    <Image className={styles.photo} src={'/photo.png'} width={70} height={100} alt="foto" />
                    <div className={styles.swithPhoto}>
                        <Link href="/" 
                        title="Trocar foto de perfil" 
                        className={styles.btnSwithPhoto}>
                        <PiUserSwitch style={{color:'#fff', width:'30px', fontSize:'20px'}}/>
                            Trocar foto de perfil
                        </Link>
                    </div>
                </div>

                <form action="" method="post" className={styles.dataForm}>

                    {/* Documentos */}
                    <div className={styles.boxForm}>
                        <h3 className={styles.titleForm}>Documentos</h3>

                        <h4 className={styles.subTitleForm}>Natureza</h4>

                        <div className={styles.rowInput}>
                            <div className={styles.boxInputsCheckbox}>
                                <label htmlFor="p-fisica" 
                                    className={styles.labelForm}>

                                    <input type="checkbox" name="p-fisica" 
                                    id="name" 
                                    placeholder="Digite seu nome completo"
                                    className={styles.inputCheckBoxForm} />
                                    <b>Sou pessoa física</b><br/>
                                    Possuo um CPF.
                                </label>
                            </div>
                            <div className={styles.boxInputsCheckbox}>
                                <label htmlFor="p-fisica" 
                                    className={styles.labelForm}>

                                    <input type="checkbox" name="p-fisica" 
                                    id="name" 
                                    placeholder="Digite seu nome completo"
                                    className={styles.inputCheckBoxForm} />
                                    <b>Sou pessoa física</b><br/>
                                    Possuo um CPF.
                                </label>
                            </div>

                            <div className={styles.boxInputsCheckbox}>
                                <label htmlFor="p-fisica" 
                                    className={styles.labelForm}>

                                    <input type="checkbox" name="p-fisica" 
                                    id="name" 
                                    placeholder="Digite seu nome completo"
                                    className={styles.inputCheckBoxForm} />
                                    <b>Sou pessoa física</b><br/>
                                    Possuo um CPF.
                                </label>
                            </div>
                        </div>
                        <div className={styles.colInput}>
                            <label htmlFor="numberCpf" 
                                className={styles.labelForm}>
                                CPF
                            </label>
                            <input type="text" name="numberCpf" 
                            id="numberCpf" 
                            placeholder="Digite seu CPF"
                            className={styles.inputForm} />
                        </div>

                    </div>

                    {/* Dados Pessoais */}
                    <div className={styles.boxForm}>
                        <h3 className={styles.titleForm}>Dados Pessoais</h3>

                        {/* <h4 className={styles.subTitleForm}>Nome completo</h4> */}

                        <div className={styles.rowInput}>
                            <label htmlFor="name" 
                            className={styles.labelForm}>
                                Nome completo
                            <input type="text" name="Nome completo" 
                            id="name" 
                            placeholder="Digite seu nome completo"
                            className={styles.inputForm} />
                            </label>

                            <label htmlFor="E-mail" 
                            className={styles.labelForm}>
                                E-mail
                            <input type="email" name="email" 
                            id="email" 
                            placeholder="Digite seu email"
                            className={styles.inputForm} />
                            </label>
                        </div>

                        <div className={styles.boxInputIdiomas}>
                            <label htmlFor="idioma">Idioma:</label>
                            <select id="idioma" className={styles.inputIdiomas}>
                                <option value="Português">Português (Brasil)</option>
                                <option value="Inglês">Inglês</option>
                                <option value="Espanhol">Espanhol</option>
                            </select>
                        </div>

                    </div>

                    {/* Endereço */}
                    <div className={styles.boxForm}>
                        <h3 className={styles.titleForm}>Endereço</h3>

                        <div className={styles.rowInput}>
                            <div className={styles.boxPaisResidencia}>
                                <label htmlFor="paisResidencia">País de residência</label>
                                <select id="paisResidencia" className={styles.inputPaisResidencia}>
                                    <option value="Brasil">Brasil</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="França">França</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="numberCep" 
                                    className={styles.labelForm}>
                                    Cep
                                </label>
                                <input type="text" name="numberCep" 
                                id="numberCep" 
                                placeholder="Digite seu Cep"
                                className={styles.inputForm} />
                            </div>

                            <div className={styles.boxPaisResidencia}>
                                <label htmlFor="estado">Estado</label>
                                <select id="estado" className={styles.inputPaisResidencia}>
                                    <option value="São Paulo">São Paulo</option>
                                    <option value="Bahia">Bahia</option>
                                    <option value="Céara">Céara</option>
                                </select>
                            </div>

                            <div className={styles.boxPaisResidencia}>
                                <label htmlFor="city">Cidade / Município</label>
                                <select id="city" className={styles.inputPaisResidencia}>
                                    <option value="São Paulo">São Paulo</option>
                                    <option value="Bahia">Bahia</option>
                                    <option value="Céara">Céara</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.rowInput}>
                            <div>
                                <label htmlFor="endereco" 
                                    className={styles.labelForm}>
                                    Endereço
                                </label>
                                <input type="text" name="endereco" 
                                id="endereco"
                                placeholder="Digite o seu endereço"
                                className={styles.inputForm} />
                            </div>

                            <div>
                                <label htmlFor="numberHouse" 
                                    className={styles.labelForm}>
                                    Número
                                </label>
                                <input type="text" name="numberHouse" 
                                id="numberHouse"
                                placeholder="Digite o seu número"
                                className={styles.inputForm} />
                            </div>

                            <div>
                                <label htmlFor="complementNumber" 
                                    className={styles.labelForm}>
                                    Complemento
                                </label>
                                <input type="text" name="complementNumber" 
                                id="complementNumber"
                                placeholder="Digite o seu número"
                                className={styles.inputForm} />
                            </div>

                            <div className={styles.boxPaisResidencia}>
                                <label htmlFor="bairro">Bairro</label>
                                <select id="bairro" className={styles.inputPaisResidencia}>
                                    <option value="São Paulo">São Paulo</option>
                                    <option value="Bahia">Bahia</option>
                                    <option value="Céara">Céara</option>
                                </select>
                            </div>
                        </div>


                    </div>

                    {/* Telefones */}
                    <div className={styles.boxForm}>
                        <h3 className={styles.titleForm}>Telefones</h3>

                        {/* <h4 className={styles.subTitleForm}>Nome completo</h4> */}

                        <div className={styles.rowInput}>
                            <label htmlFor="country-code" 
                            className={styles.labelForm}>
                                Código do país
                            <input type="text" name="country-code" 
                            id="country-code" 
                            placeholder=""
                            className={styles.inputForm} />
                            </label>

                            <label htmlFor="area-code" 
                            className={styles.labelForm}>
                                DDD
                            <input type="text" name="area-code" 
                            id="area-code" 
                            placeholder=""
                            className={styles.inputForm} />
                            </label>

                            <label htmlFor="number-device" 
                            className={styles.labelForm}>
                                Celular
                            <input type="text" name="number-device" 
                            id="number-device" 
                            placeholder=""
                            className={styles.inputForm} />
                            </label>
                        </div>

                        <div className={styles.rowInput}>
                            <label htmlFor="country-code2" 
                            className={styles.labelForm}>
                                Código do país
                            <input type="text" name="country-code2" 
                            id="country-code2" 
                            placeholder=""
                            className={styles.inputForm} />
                            </label>

                            <label htmlFor="area-code2" 
                            className={styles.labelForm}>
                                DDD
                            <input type="text" name="area-code2" 
                            id="area-code2" 
                            placeholder=""
                            className={styles.inputForm} />
                            </label>

                            <label htmlFor="number-tel" 
                            className={styles.labelForm}>
                                Telefone
                            <input type="text" name="number-tel" 
                            id="number-tel" 
                            placeholder=""
                            className={styles.inputForm} />
                            </label>
                        </div>

                    </div>

                    <div className={styles.boxBtnSend}>
                        <Link href="/" 
                        title="CADASTRAR" 
                        className={styles.btnSend}>
                            CADASTRAR
                        </Link>
                    </div>
                </form>

            </div>
            <Footer />
        </div>
    )
}

export default data;