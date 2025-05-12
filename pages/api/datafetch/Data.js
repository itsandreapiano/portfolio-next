import {
  FaCss3,
  FaReact,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaFigma,
  FaHtml5,
} from "react-icons/fa";
import Link from "next/link";
import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiNextdotjs,
  SiMysql,
  SiVercel,
  SiPrisma,
  SiTailwindcss,
} from "react-icons/si";

import netflixList from "../../../public/assets/images/netflix.png";
import nextflix from "../../../public/assets/images/nextflix.png";
import greenpeace from "../../../public/assets/images/greenpeace.png";
import ras from "../../../public/assets/images/ras.png";
import sdl from "../../../public/assets/images/sdl.png";
import istellas from "../../../public/assets/images/istellas.png";

export const navLinks = ["home", "about", "skills", "work", "contact"];

export const socialIcons = [
  <Link
    title="Facebook"
    target="_blank"
    href="https://www.facebook.com/itsandreapiano"
  >
    <FaFacebook />
  </Link>,
  <Link
    title="Instagram"
    target="_blank"
    href="https://www.instagram.com/itsandreapiano"
  >
    <FaInstagram />
  </Link>,
  <Link
    title="LinkedIn"
    target="_blank"
    href="https://www.linkedin.com/in/andreapiano"
  >
    <FaLinkedin />
  </Link>,
  <Link title="GitHub" target="_blank" href="https://github.com/itsandreapiano">
    <FaGithub />
  </Link>,
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Andrea",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+48 600 967 307",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "dev.andrea.piano@gmail.com",
  },
];

export const icons = [
  <FaHtml5 title="HTML5" />,
  <FaCss3 title="CSS" />,
  <SiTailwindcss title="Tailwind" />,
  <FaFigma title="Figma" />,
  <SiJavascript title="JavaScript" />,
  <SiTypescript title="TypeScript" />,
  <SiNodedotjs title="Node.js" />,
  <SiMysql title="MySQL" />,
  <FaReact title="ReactJS" />,
  <SiNextdotjs title="Next.js" />,
  <SiPrisma title="Prisma" />,
  <SiVercel title="Vercel" />,
];

export const experiences = [
  {
    id: 1,
    year: "2024",
    position: "Frontend Engineer",
    company: "Bringer Agency (Fiverr)",
  },
  {
    id: 2,
    year: "2024",
    position: "Mid Software Developer",
    company: "Proedis",
  },
  {
    id: 3,
    year: "2022",
    position: "Frontend Developer",
    company: "Softfobia (Minsait)",
  },
];
export const finishes = [
  {
    id: 1,
    number: "2+",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: "35",
    itemName: "Projects Completed",
  },
  {
    id: 3,
    number: "C2",
    itemName: "English",
  },
  {
    id: 4,
    number: "∞",
    itemName: "Ambition",
  },
];
export const workImages = [
  {
    id: 1,
    img: greenpeace,
    name: "Greenpeace Italia - Donations Portal",
    category: "team",
    link: "https://sostenitori.greenpeace.it/",
  },
  {
    id: 2,
    img: sdl,
    name: "Sardegna Digital Library",
    category: "team",
    link: "https://www.sardegnadigitallibrary.it",
  },
  {
    id: 3,
    img: istellas,
    name: "iStellas - Where astrology meets community.",
    category: "solo",
    code: "https://github.com/itsandreapiano/istellas",
    link: "https://istellas.vercel.app/",
  },
  {
    id: 4,
    img: nextflix,
    name: "My Netflix List",
    category: "solo",
    code: "https://github.com/itsandreapiano/movies-next",
    link: "https://nextflix-uk.vercel.app",
  },
  {
    id: 5,
    img: ras,
    name: "RAS (Autonomous Region of Sardinia) website",
    category: "team",
    link: "https://www.regione.sardegna.it/",
  },

  {
    id: 6,
    img: netflixList,
    name: "My Netflix List",
    category: "solo",
    code: "https://github.com/itsandreapiano/netflix-list",
    link: "https://itsandreapiano.github.io/netflix-list",
  },
];

export const workNavs = ["All", "Solo", "Team"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Poznań, Wielkopolskie, Poland",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "dev.andrea.piano@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+48 600 967 307",
  },
];
