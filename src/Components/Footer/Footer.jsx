import styles from "./Footer.module.scss";
import { footer } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { social } = footer;
  const { solucoes } = footer;
  const { educacao } = footer;
  const { vaypp } = footer;

  const renderSocial = social.map((social, i) => (
    <Link key={i} className={styles.link} href={social.url} target="_blank">
      <i>{social.component}</i>
    </Link>
  ));

  const renderSolucoes = solucoes.map((solucoes, i) => (
    <Link key={i} className={styles.link} href={solucoes.url} target="_blank">
      {solucoes.name}
    </Link>
  ));

  const renderEducacao = educacao.map((educacao, i) => (
    <Link key={i} className={styles.link} href={educacao.url} target="_blank">
      {educacao.name}
    </Link>
  ));

  const renderVaypp = vaypp.map((vaypp, i) => (
    <Link key={i} className={styles.link} href={vaypp.url} target="_blank">
      {vaypp.name}
    </Link>
  ));

  return (
    <footer className={styles.footer}>
      <div>
        <Link href="/" title="Vaypp">
          <Image src="/vaypp2.png" alt="Vaypp" width={180} height={50} />
        </Link>
      </div>
      <div>
        <h3>Soluções</h3>
        <ul>
          <li>
            {renderSolucoes}
          </li>
        </ul>
      </div>
      <div>
        <h3>Educação</h3>
        <ul>
          <li>
            {renderEducacao}
          </li>
        </ul>
      </div>
      <div>
        <h3>Vaypp</h3>
        <ul>
          <li>
            {renderVaypp}
          </li>
        </ul>
        <div className={styles.social}>
          <li>{renderSocial}</li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
