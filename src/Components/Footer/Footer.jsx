import styles from './Footer.module.scss';
import { footer } from '@/constants';

const Footer = () => {
  // const { copy } = footer;
  return (
    <footer className={styles.footer}>
      {/* <span className='p light'>{copy}</span> */}
      Footer
    </footer>
  );
};

export default Footer;