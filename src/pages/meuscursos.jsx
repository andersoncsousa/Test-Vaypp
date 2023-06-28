import Navbar from "@/Components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/Components/Footer/Footer";
import styles from "../styles/meusCursos.module.scss";

const meusCursos = () => {

  return (
    <div className={styles.meusCursos}>
        <Navbar />
            <div className={styles.meusCursosContent}>
                <div className={styles.meusCursosBanner}>
                    <div id="carouselExampleCaptions" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div class="carousel-item active">
                            <Image width={1660} height={500} src={"/cursos.png"} className="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <Image width={1660} height={500} src={"/cursos.png"} className="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <Image width={1660} height={500} src={"/cursos.png"} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className={styles.boxTitle}>
                    <div className={styles.detail}></div>
                    <h3 className={styles.title}>Meus cursos</h3> 

                    <div className={styles.boxBtnCursos}>
                        <Link className={styles.btnCursos} href={'/'}>
                            Completos
                        </Link>
                        <Link className={styles.btnCursos} href={'/'}>
                            Recentes
                        </Link>
                    </div>
                </div>

                <div className={styles.meusCursosList}>
                    <Link href={'/'} 
                        title="PENSE COMO RICO" 
                        className={styles.cardCurso}>
                            <h3>
                                PENSE COMO RICO
                            </h3>
                            <h4>
                                antes de ser um
                            </h4>
                    </Link>
                    <Link href={'/'} 
                        title="PENSE COMO RICO" 
                        className={styles.cardCurso}>
                            <h3>
                                PENSE COMO RICO
                            </h3>
                            <h4>
                                antes de ser um
                            </h4>
                    </Link>
                    <Link href={'/'} 
                        title="PENSE COMO RICO" 
                        className={styles.cardCurso}>
                            <h3>
                                PENSE COMO RICO
                            </h3>
                            <h4>
                                antes de ser um
                            </h4>
                    </Link>
                    <Link href={'/'} 
                        title="PENSE COMO RICO" 
                        className={styles.cardCurso}>
                            <h3>
                                PENSE COMO RICO
                            </h3>
                            <h4>
                                antes de ser um
                            </h4>
                    </Link>
                    <Link href={'/'} 
                        title="PENSE COMO RICO" 
                        className={styles.cardCurso}>
                            <h3>
                                PENSE COMO RICO
                            </h3>
                            <h4>
                                antes de ser um
                            </h4>
                    </Link>
                    <Link href={'/'} 
                        title="PENSE COMO RICO" 
                        className={styles.cardCurso}>
                            <h3>
                                PENSE COMO RICO
                            </h3>
                            <h4>
                                antes de ser um
                            </h4>
                    </Link>
                    <Link href={'/'} 
                        title="PENSE COMO RICO" 
                        className={styles.cardCurso}>
                            <h3>
                                PENSE COMO RICO
                            </h3>
                            <h4>
                                antes de ser um
                            </h4>
                    </Link>
                    <Link href={'/'} 
                        title="PENSE COMO RICO" 
                        className={styles.cardCurso}>
                            <h3>
                                PENSE COMO RICO
                            </h3>
                            <h4>
                                antes de ser um
                            </h4>
                    </Link>
                    <Link href={'/'} 
                        title="PENSE COMO RICO" 
                        className={styles.cardCurso}>
                            <h3>
                                PENSE COMO RICO
                            </h3>
                            <h4>
                                antes de ser um
                            </h4>
                    </Link>
                    <Link href={'/'} 
                        title="PENSE COMO RICO" 
                        className={styles.cardCurso}>
                            <h3>
                                PENSE COMO RICO
                            </h3>
                            <h4>
                                antes de ser um
                            </h4>
                    </Link>
                    <Link href={'/'} 
                        title="PENSE COMO RICO" 
                        className={styles.cardCurso}>
                            <h3>
                                PENSE COMO RICO
                            </h3>
                            <h4>
                                antes de ser um
                            </h4>
                    </Link>
                    <Link href={'/'} 
                        title="PENSE COMO RICO" 
                        className={styles.cardCurso}>
                            <h3>
                                PENSE COMO RICO
                            </h3>
                            <h4>
                                antes de ser um
                            </h4>
                    </Link>
                    <Link href={'/'} 
                        title="PENSE COMO RICO" 
                        className={styles.cardCurso}>
                            <h3>
                                PENSE COMO RICO
                            </h3>
                            <h4>
                                antes de ser um
                            </h4>
                    </Link>
                        <Link href={'/'} 
                        title="PENSE COMO RICO" 
                        className={styles.cardCurso}>
                            <h3>
                                PENSE COMO RICO
                            </h3>
                            <h4>
                                antes de ser um
                            </h4>
                    </Link>
                    <Link href={'/'} 
                        title="PENSE COMO RICO" 
                        className={styles.cardCurso}>
                            <h3>
                                PENSE COMO RICO
                            </h3>
                            <h4>
                                antes de ser um
                            </h4>
                    </Link>
                </div>

                <Link className={styles.btnBuscaMaisCursos} href={'/'}>
                    Buscar mais cursos
                </Link>
                
            </div>
        <Footer />
    </div>
  );
};

export default meusCursos;
