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
// import { areaMembro } from "@/assets";

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

export const secondContent = [
  { 
    title: "Área de membros", 
    content: "Sinta a emoção de uma plataforma de filmes na nossa área de membros, com menus intuitivos e modernos!",
    // img: areaMembro,
  },
  { 
    title: "VayppZap", 
    content: "Com nossa ferramenta gratuita, resgate suas vendas pelo WhatsApp e dê um impulso ao seu negócio!", 
    // img: areaMembro,
  },
  { 
    title: "Aprovação imediata", 
    content: "Com a nossa plataforma, coloque seu produto e veja suas vendas aumentarem instantaneamente, sem preocupações!",
    // img: areaMembro,
  },
  { 
    title: "Placas de Premiações", 
    content: "Nós oferecemos as melhores premiações, que são muito mais do que simples placas, elas são um reconhecimento do seu esforço!", 
    // img: areaMembro,
  },
];

export const footer = {
  solucoes: [
    { name: "Central de Ajuda", url: "#" },
    { name: "Contato", url: "/contact" },
    { name: "Pagamentos", url: "#" },
    { name: "lorem", url: "#" },
    { name: "lorem", url: "#" },
  ],
  educacao: [
    { name: "Meu Perfil", url: "data" },
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
      url: "#",
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
      url: "#",
    },
  ],
};