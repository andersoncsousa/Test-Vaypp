
import Navbar from "@/Components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/Components/Footer/Footer";
import styles from "../styles/meusCursos.module.scss";
import { AiFillStar } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsArrowDownCircle } from "react-icons/bs";
// import bootstrap from 'bootstrap'

const meusCursos = () => {

  return (
    <div className={styles.meusCursos}>
        <Navbar />
            {/* <div className={styles.meusCursosContent}>
                <div className={styles.meusCursosBanner}>
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div class="carousel-item active">
                            <Image width={1660} height={900} src={"/cursos.png"} className="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <Image width={1660} height={900} src={"/cursos.png"} className="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <Image width={1660} height={900} src={"/cursos.png"} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <h3 className={styles.title}>
                    <div className={styles.detail}></div>
                    Meus cursos
                </h3>
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
                </div>
            </div> */}
        <Footer />
    </div>
  );
};

export default meusCursos;
