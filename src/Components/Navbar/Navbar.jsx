import Link from 'next/link';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import { navLinks } from '@/constants';
import { useState } from 'react';
import {
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { motion } from 'framer-motion';

const Navbar = () => {
 
  const renderLinks = navLinks.map((link, i) => (
    <li key={i}>
      <a href={link.url} title={link.name}>{link.name}</a>
    </li>
  ));

  return (
    <section className={styles.navbar}>
      <div>
        <Link href='/'>
          <Image src='/vaypp.png' alt='Vaypp' width={100} height={25} />
        </Link>
      </div>
      <nav>
        <ul className={styles.links}>{renderLinks}</ul>
        <div className={styles.navBoxBtn}>
          <a href='#' title='Cadastrar' className={styles.navBtnSingup}>Cadastrar </a>
          <a href='#' title='Entrar' className={styles.navBtnLogin}>Entrar </a>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
