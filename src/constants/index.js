import {
  AiOutlineHeart,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineYoutube,
} from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import {
  SlSocialLinkedin,
  SlSocialTwitter,
  SlSocialGithub,
  SlSocialFacebook,
  SlSocialYoutube,
} from "react-icons/sl";

const heart = <AiOutlineHeart />,
  locker = <AiOutlineLock />,
  computer = <MdComputer />,
  instagram = <AiOutlineInstagram />,
  linkedin = <SlSocialLinkedin />,
  twitter = <SlSocialTwitter />,
  github = <SlSocialGithub />,
  whatsapp = <AiOutlineWhatsApp />,
  email = <AiOutlineMail />,
  facebook = <AiOutlineFacebook />,
  youtube = <AiOutlineYoutube />;

export const navLinks = [
  { name: "Vantagens", url: "#vantagens" },
  { name: "Soluções", url: "#solucoes" },
  { name: "Ajuda", url: "#ajuda" },
];

export const footer = {
  solucoes: [
    { name: "Central de Ajuda", url: "#" },
    { name: "Contato", url: "#" },
    { name: "Pagamentos", url: "#" },
    { name: "lorem", url: "#" },
    { name: "lorem", url: "#" },
  ],
  educacao: [
    { name: "Meu Perfil", url: "#" },
    { name: "lorem", url: "#" },
    { name: "lorem", url: "#" },
    { name: "lorem", url: "#" },
    { name: "lorem", url: "#" },
  ],
  vaypp: [
    { name: "Sobre Nós", url: "#" },
    { name: "Trabalhe Conosco", url: "#" },
    { name: "lorem", url: "#" },
    { name: "lorem", url: "#" },
    { name: "lorem", url: "#" },
  ],
  copy: " © Copyright",
  social: [
    {
      name: "Facebook",
      component: facebook,
      url: "#",
    },
    {
      name: "Instagram",
      component: instagram,
      url: "https://www.instagram.com/caiqueira/",
    },
    {
      name: "Twitter",
      component: twitter,
      url: "#",
    },
    {
      name: "Youtube",
      component: youtube,
      url: "#",
    },
    {
      name: "Github",
      component: github,
      url: "https://github.com/andersoncsousa",
    },
  ],
};