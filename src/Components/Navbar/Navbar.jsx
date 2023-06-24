import Link from "next/link";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import { navLinks } from "@/constants";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const listMotionProps = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "28rem" },
  };

  const itemMotionProps = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 50 },
  };

  const renderLinks = navLinks.map((link, i) => (
    <motion.li variants={itemMotionProps} key={i}>
      <a href={link.url} title={link.name}>
        {link.name}
      </a>
    </motion.li>
  ));

  const toggleIsMobile = () => setIsMobile((prevState) => !prevState);

  // const renderLinks = navLinks.map((link, i) => (
  //   <li key={i}>
  //     <a href={link.url} title={link.name}>{link.name}</a>
  //   </li>
  // ));

  return (
    <section className={styles.navbar}>
        <div className={styles.logoBox}>
            <Link href="/">
                <Image
                    src="/vaypp.png"
                    alt="Vaypp"
                    width={100}
                    height={25}
                    className={styles.logo}
                />
            </Link>
        </div>
      {/* <nav>
        <ul className={styles.links}>{renderLinks}</ul>
        <div className={styles.navBoxBtn}>
          <a href='#' title='Cadastrar' className={styles.navBtnSingup}>Cadastrar </a>
          <a href='#' title='Entrar' className={styles.navBtnLogin}>Entrar </a>
        </div>
      </nav> */}
      <nav id="home">
        
        <ul className={styles.links}>{renderLinks}</ul>
        <div className={styles.navBoxBtn}>
          
            <Link href="/registre" title="Cadastrar" className={styles.navBtnSingup}>
                Cadastrar
            </Link>
          
            <Link href="/login" title="Entrar" className={styles.navBtnLogin}>
                Entrar
            </Link>
        </div>
        <AiOutlineMenu onClick={toggleIsMobile} className={styles.menu} />
        <motion.ul
          variants={listMotionProps}
          animate={isMobile ? "open" : "closed"}
          transition={{
            when: "beforeChildren",
            staggerChildren: 0.2,
            type: "just",
            duration: 0.3,
          }}
          className={styles["mobile-links"]}
        >
          <AiOutlineClose onClick={toggleIsMobile} />
          {renderLinks}
        <div className={styles.navBoxBtn}>
            <Link href="/registre" title="Cadastrar" className={styles.navBtnSingup}>
                Cadastrar
            </Link>
          
            <Link href="/login" title="Entrar" className={styles.navBtnLogin}>
                Entrar
            </Link>
        </div>
        </motion.ul>
      </nav>
    </section>
  );
};

export default Navbar;
