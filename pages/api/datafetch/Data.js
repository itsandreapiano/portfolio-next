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
} from "react-icons/fa";
import Link from "next/link";
import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiNextdotjs,
  SiMysql,
} from "react-icons/si";
import netflixList from "../../../public/assets/images/netflix.png";
import nextflix from "../../../public/assets/images/nextflix.png";
import greenpeace from "../../../public/assets/images/greenpeace.png";
import ras from "../../../public/assets/images/ras.png";
import sdl from "../../../public/assets/images/sdl.png";
import ecoEvents from "../../../public/assets/images/eco-events-vue-form.png";
export const navLinks = ["home", "about", "skills", "work", "contact"];

export const socialIcons = [
  <Link
    title="Facebook"
    target="_blank"
    href="https://www.facebook.com/andreapianolandia"
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
  <Link title="GitHub" target="_blank" href="https://github.com/ateyapayo">
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
    value: "+39 340 2871146",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "dev.andrea.piano@gmail.com",
  },
];

export const icons = [
  <FaCss3 title="CSS" />,
  <SiJavascript title="JavaScript" />,
  <SiTypescript title="TypeScript" />,
  <SiNodedotjs title="Node.js" />,
  <FaReact title="ReactJS" />,
  <SiNextdotjs title="Next.js" />,
  <SiMysql title="MySQL" />,
  <FaFigma title="Figma" />,
];

export const experiences = [
  {
    id: 1,
    year: "2024",
    position: "Mid Software Developer",
    company: "Proedis",
  },
  {
    id: 2,
    year: "2023",
    position: "Data Engineer",
    company: "Cardinality.io (Acquired by Elisa)",
  },
  {
    id: 3,
    year: "2022",
    position: "Frontend Developer",
    company: "Softfobia (Minsait)",
  },
  {
    di: 4,
    year: "2019",
    position: "Translator",
    company: "Quora, Inc.",
  },
  {
    id: 5,
    year: "2016",
    position: "Photographer",
    company: "Self-employed",
  },
  {
    id: 6,
    year: "2013",
    position: "Affiliate Partner / Marketing",
    company: "Macrolibrarsi.it",
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
    number: "33",
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
    img: nextflix,
    name: "My Netflix List",
    category: "solo",
    code: "https://github.com/ateyapayo/movies-next",
    link: "https://nextflix-uk.vercel.app",
  },
  {
    id: 4,
    img: ras,
    name: "RAS (Autonomous Region of Sardinia) website",
    category: "team",
    link: "https://www.regione.sardegna.it/",
  },

  {
    id: 5,
    img: netflixList,
    name: "My Netflix List",
    category: "solo",
    code: "https://github.com/ateyapayo/netflix-list",
    link: "https://ateyapayo.github.io/netflix-list",
  },
  {
    id: 6,
    img: ecoEvents,
    name: "Eco Events - Vue 3 Form",
    category: "solo",
    code: "https://github.com/ateyapayo/eco-events-vue-form",
    link: "https://ateyapayo.github.io/eco-events-vue-form",
  },
];

export const workNavs = ["All", "Solo", "Team"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Italy / Poland",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "dev.andrea.piano@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+39 340 2871146",
  },
];
