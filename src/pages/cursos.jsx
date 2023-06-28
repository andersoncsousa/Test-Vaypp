
import Navbar from "@/Components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/Components/Footer/Footer";
import styles from "../styles/cursosPage.module.scss";
import { AiFillStar } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg"
import { BsArrowDownCircle } from "react-icons/bs"

const cursosPage = () => {

  return (
    <div className={styles.cursosPage}>
        <Navbar />
            <div className={styles.cursosPageContent}>
                <div className={styles.cursosHeader}>
                    <div className={styles.cursosHeaderImg}>
                        {/* <Image
                        src="/cursos.png"
                        alt="Vaypp"
                        width={750}
                        height={535}
                        title="Vaypp"
                        className={styles.logo}
                        /> */}
                    </div>
                    <div className={styles.cursosHeaderText}>
                        <div className={styles.boxTextTitle}>
                            <h2>
                                PENSE COMO RICO
                            </h2>
                            <h3>
                                antes de ser um
                            </h3>
                        </div>
                        <div className={styles.boxTextLegend}>
                            <p>2023</p>
                            <p>Finanças e Negócios</p>
                            <p>4.9<AiFillStar className={styles.iconCursos}/></p>
                            <p><MdLanguage className={styles.iconCursos} />Português</p>
                        </div>
                        <div className={styles.boxBtnHeader}>
                            <Link
                                href="/registre"
                                title="Iniciar Jornada"
                                className={styles.btnIniciar}
                            >
                                Iniciar Jornada
                            </Link>
                            <Link
                                href="/registre"
                                title="Mais informações"
                                className={styles.btnInfo}
                            >
                                Mais informações
                            </Link>
                        </div>
                    </div>
                    <div className={styles.boxSeta}>
                        <Link href={'/'} alt="" >
                            <BsArrowDownCircle className={styles.iconCursos}/>
                        </Link>
                    </div>
                </div>
                
                <div className={styles.cursosDescription}>
                    <div className={styles.cursosDescriptionText}>
                        <h2>
                            Pense como rico antes de ser um
                        </h2>
                        <div className={styles.boxTextLegend}>
                            <p>2023</p>
                            <p>Finanças e Negócios</p>
                            <p>4.9<AiFillStar className={styles.iconCursos}/></p>
                            <p><MdLanguage className={styles.iconCursos} />Português</p>
                        </div>
                        <div className={styles.boxTextLegend}>
                            <p>Autor(a):</p>
                            <p>Original Vaypp</p>
                        </div>
                        <div className={styles.boxDescription}>
                            <h3>
                                Descrição do curso: 
                            </h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                            Venenatis cras sed felis eget velit aliquet sagittis id. Magna ac placerat vestibulum lectus. Vestibulum rhoncus est pellentesque elit ullamcorper. Blandit turpis cursus in hac habitasse platea dictumst. Tellus mauris a diam maecenas sed enim ut sem viverra. Lacus laoreet non curabitur gravida.
                            </p>
                        </div>

                        <div className={styles.cursosDescriptionLine}></div>
                    </div>
                    <div className={styles.cursosDescriptionContent}>
                        <h3>R$ 149,90</h3>
                        <p>em 4x de 39,00 * no cartão</p>

                        <Link href={'/'} 
                        className={styles.btnComprarCurso}
                        title="Comprar agora">
                            Comprar agora <FaShoppingCart className={styles.iconComprarCurso}/>
                        </Link>

                        <div className={styles.boxTextLegend}>
                            <p>4.9<AiFillStar className={styles.iconCursos}/></p>
                            <p className={styles.tagCurso}>BEM AVALIADO</p>
                        </div>

                        <div className={styles.cursosDescriptionLine}></div>

                        <div className={styles.boxDescriptionFormat}>
                            <p><span>Categoria:</span>  Finanças e Negócios </p>
                            <p><span>Formato:</span>    Cursos Online e Serviços de Assinatura </p>
                        </div>

                        <div className={styles.cursosDescriptionLine}></div>

                        <div className={styles.boxCursoAuth}>
                            <CgProfile className={styles.iconCursosProfile}/>
                            <div className={styles.boxAuth}>
                                <h3 className={styles.titleAuth}>Autor(a):</h3>
                                <h4 className={styles.nameAuth}>Original Vaypp</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.contentCurso}>
                    <div className={styles.boxBtns}>
                        <Link
                            href="/registre"
                            title="Conteúdo"
                            className={styles.btnConteudo}
                        >
                            Conteúdo
                        </Link>
                        <Link
                            href="/registre"
                            title="Detalhe"
                            className={styles.btnDetalhe}
                        >
                            Detalhe
                        </Link>
                    </div>
                    <div className={styles.boxConteudo}>
                        <div className={styles.listConteudo}>
                            <Link 
                            href="/registre"
                            title="Módulo 1 - Informações"
                            className={styles.btnConteudo}>Módulo 1 - Informações</Link>

                            <Link 
                            href="/registre"
                            title="Módulo 2 - Apresentação"
                            className={styles.btnConteudo}>Módulo 2 - Apresentação</Link>

                            <Link 
                            href="/registre"
                            title="Módulo 3 - Mude seus hábitos"
                            className={styles.btnConteudo}>Módulo 3 - Mude seus hábitos</Link>

                            <Link 
                            href="/registre"
                            title="Módulo 4 - Mindset milionário"
                            className={styles.btnConteudo}>Módulo 4 - Mindset milionário</Link>

                            <Link 
                            href="/registre"
                            title="Módulo 5 - Pense fora da caixa"
                            className={styles.btnConteudo}>Módulo 5 - Pense fora da caixa</Link>

                            <Link 
                            href="/registre"
                            title="Módulo 6 - Como ganhar mais e gastar menos"
                            className={styles.btnConteudo}>Módulo 6 - Como ganhar mais e gastar menos</Link>

                            <Link 
                            href="/registre"
                            title="Módulo 7 - Renda fixa e variável"
                            className={styles.btnConteudo}>Módulo 7 - Renda fixa e variável</Link>

                            <Link 
                            href="/registre"
                            title="Módulo 8 - A renda dos sonhos"
                            className={styles.btnConteudo}>Módulo 8 - A renda dos sonhos</Link>

                            <Link 
                            href="/registre"
                            title="Módulo 9 - Em ação "
                            className={styles.btnConteudo}>Módulo 9 - Em ação </Link>
                        </div>
                    </div>
                <div className={styles.cursosDescriptionLine}></div>
                </div>
                
                <div className={styles.contentComents}>
                    <h3>
                        O que dizem os alunos desse curso
                    </h3>
                    <div className={styles.contentRate}>
                        <h4>
                            4.9
                        </h4>
                        <div className={styles.boxRate}>
                            <AiFillStar className={styles.iconCursos}/>
                            <p>11 avaliações</p>
                        </div>
                    </div>
                    <div className={styles.listComents}>
                        <div className={styles.comentsCard}>
                            <div className={styles.comentsCardText}>
                                <p>
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Volutpat est velit egestas dui id ornare arcu odio. 
                                    Id consectetur purus ut faucibus pulvinar.”
                                </p>
                            </div>
                            <div className={styles.comentsCardDescription}>
                                <div className={styles.comentsCardPerfil}>
                                    <Image 
                                        className={styles.comentsCardPhoto}
                                        src={'/photoperfil1.png'} 
                                        width={46} 
                                        height={40} 
                                        alt="vaypp" 
                                    />
                                    <h3>
                                        Luis Fernando
                                    </h3>
                                </div>
                                <div className={styles.boxComentsCardRate}>
                                    <p>
                                        4.9
                                    </p>
                                    <AiFillStar className={styles.iconCursos}/>
                                </div>
                            </div>
                        </div>

                        <div className={styles.comentsCard}>
                            <div className={styles.comentsCardText}>
                                <p>
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Volutpat est velit egestas dui id ornare arcu odio. 
                                    Id consectetur purus ut faucibus pulvinar.”
                                </p>
                            </div>
                            <div className={styles.comentsCardDescription}>
                                <div className={styles.comentsCardPerfil}>
                                    <Image 
                                        className={styles.comentsCardPhoto}
                                        src={'/photoperfil2.png'} 
                                        width={46} 
                                        height={40} 
                                        alt="vaypp" 
                                    />
                                    <h3>
                                        Luiza
                                    </h3>
                                </div>
                                <div className={styles.boxComentsCardRate}>
                                    <p>
                                        4
                                    </p>
                                    <AiFillStar className={styles.iconCursos}/>
                                </div>
                            </div>
                        </div>

                        <div className={styles.comentsCard}>
                            <div className={styles.comentsCardText}>
                                <p>
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Volutpat est velit egestas dui id ornare arcu odio. 
                                    Id consectetur purus ut faucibus pulvinar.”
                                </p>
                            </div>
                            <div className={styles.comentsCardDescription}>
                                <div className={styles.comentsCardPerfil}>
                                    <Image 
                                        className={styles.comentsCardPhoto}
                                        src={'/photoperfil3.png'} 
                                        width={46} 
                                        height={40} 
                                        alt="vaypp" 
                                    />
                                    <h3>
                                        Jonas
                                    </h3>
                                </div>
                                <div className={styles.boxComentsCardRate}>
                                    <p>
                                        5
                                    </p>
                                    <AiFillStar className={styles.iconCursos}/>
                                </div>
                            </div>
                        </div>

                        <div className={styles.comentsCard}>
                            <div className={styles.comentsCardText}>
                                <p>
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Volutpat est velit egestas dui id ornare arcu odio. 
                                    Id consectetur purus ut faucibus pulvinar.”
                                </p>
                            </div>
                            <div className={styles.comentsCardDescription}>
                                <div className={styles.comentsCardPerfil}>
                                    <Image 
                                        className={styles.comentsCardPhoto}
                                        src={'/photoperfil4.png'} 
                                        width={46} 
                                        height={40} 
                                        alt="vaypp" 
                                    />
                                    <h3>
                                        Thiago Santos
                                    </h3>
                                </div>
                                <div className={styles.boxComentsCardRate}>
                                    <p>
                                        5
                                    </p>
                                    <AiFillStar className={styles.iconCursos}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        <Footer />
    </div>
  );
};

export default cursosPage;
