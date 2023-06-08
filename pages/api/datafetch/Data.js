import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaFigma,
  FaGit,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";
import { SiNextdotjs, SiTypescript, SiJavascript } from "react-icons/si";
import netflixList from "../../../public/assets/images/netflix.png";
import nextflix from "../../../public/assets/images/nextflix.png";
import greenpeace from "../../../public/assets/images/greenpeace.png";
import ras from "../../../public/assets/images/ras.png";
import ladyKiron from "../../../public/assets/images/ladykiron.png";
import ecoEvents from "../../../public/assets/images/eco-events-vue-form.png";
import memeGenerator from "../../../public/assets/images/meme-generator.png";
import airBnb from "../../../public/assets/images/airbnb.png";
import workshop from "../../../public/assets/images/photography-workshop.png";

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
    href="https://www.instagram.com/ateyapayo"
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
    value: "(039) 340 28 71 146",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "dev.andrea.piano@gmail.com",
  },
];

export const icons = [
  <FaFigma title="Figma" />,
  <FaGit title="Git" />,
  <FaHtml5 title="HTML5" />,
  <FaCss3 title="CSS3" />,
  <SiJavascript title="JavaScript" />,
  <SiTypescript title="TypeScript" />,
  <FaReact title="ReactJS" />,
  <SiNextdotjs title="NextJS" />,
];

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Software Developer",
    company: "Softfobia (An Indra Company)",
  },
  {
    di: 2,
    year: "2019",
    position: "Translator",
    company: "Quora, Inc.",
  },
  {
    id: 3,
    year: "2016",
    position: "Photographer",
    company: "Self-employed",
  },
  {
    id: 4,
    year: "2013",
    position: "Affiliate Partner / Marketing",
    company: "Macrolibrarsi.it",
  },
];
export const finishes = [
  {
    id: 1,
    number: "1+",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: "15",
    itemName: "Projects Completed",
  },
  {
    id: 3,
    number: "C1",
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
    img: nextflix,
    name: "My Netflix List",
    category: "solo",
    code: "https://github.com/ateyapayo/movies-next",
    link: "https://nextflix-uk.vercel.app",
  },
  {
    id: 3,
    img: ras,
    name: "RAS (Autonomous Region of Sardinia) website",
    category: "team",
    link: "https://www.regione.sardegna.it/",
  },

  {
    id: 4,
    img: netflixList,
    name: "My Netflix List",
    category: "solo",
    code: "https://github.com/ateyapayo/netflix-list",
    link: "https://ateyapayo.github.io/netflix-list",
  },
  {
    id: 5,
    img: ladyKiron,
    name: "Lady Kyron's Blog",
    category: "solo",
    code: "https://github.com/ateyapayo/ladykiron",
    link: "https://ateyapayo.github.io/ladykiron",
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
    infoText: "Italy / UK",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "dev.andrea.piano@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "(039) 340 28 71 146",
  },
];
