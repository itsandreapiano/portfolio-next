import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaFigma,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaInstagram,
  FaLinkedin,
  FaVuejs,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import netflixList from "../public/assets/images/netflix.png";
import ladyKiron from "../public/assets/images/ladykiron.png";
import ecoEvents from "../public/assets/images/eco-events-vue-form.png";
import memeGenerator from "../public/assets/images/meme-generator.png";
import airBnb from "../public/assets/images/airbnb.png";
import workshop from "../public/assets/images/photography-workshop.png";

export const navLinks = ["home", "about", "skills", "work", "contact"];

export const socialIcons = [
  <Link target="_blank" href="https://www.facebook.com/andreapianolandia">
    <FaFacebook />
  </Link>,
  <Link target="_blank" href="https://www.instagram.com/ateyapayo">
    <FaInstagram />
  </Link>,
  <Link target="_blank" href="https://www.linkedin.com/in/andreapiano">
    <FaLinkedin />
  </Link>,
  <Link target="_blank" href="https://github.com/ateyapayo">
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
  <FaHtml5 title="HTML5" />,
  <FaCss3 title="CSS3" />,
  <FaSass title="SASS" />,
  <FaFigma title="Figma" />,
  <DiJavascript title="JavaScript" />,
  <SiTypescript title="TypeScript" />,
  <FaReact title="React" />,
  <FaVuejs title="VueJS" />,
];

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Front-end Developer",
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
    img: netflixList,
    name: "My Netflix List",
    category: "app",
    code: "https://github.com/ateyapayo/netflix-list",
    link: "https://ateyapayo.github.io/netflix-list",
  },
  {
    id: 2,
    img: ladyKiron,
    name: "Lady Kyron's Blog",
    category: "web",
    code: "https://github.com/ateyapayo/ladykiron",
    link: "https://ateyapayo.github.io/ladykiron",
  },
  {
    id: 3,
    img: ecoEvents,
    name: "Eco Events - Vue 3 Form",
    category: "form",
    code: "https://github.com/ateyapayo/eco-events-vue-form",
    link: "https://ateyapayo.github.io/eco-events-vue-form",
  },
  {
    id: 4,
    img: memeGenerator,
    name: "Meme Generator",
    category: "app",
    code: "https://scrimba.com/scrim/cMQE48sL",
    link: "https://scrimba.com/scrim/cMQE48sL",
  },
  {
    id: 5,
    img: workshop,
    name: "Street Photography Workshop Form",
    category: "form",
    code: "https://github.com/ateyapayo/photographyworkshop",
    link: "https://ateyapayo.github.io/photographyworkshop",
  },
  {
    id: 6,
    img: airBnb,
    name: "AirBnb Clone",
    category: "web",
    code: "https://scrimba.com/scrim/cL3PmqT6",
    link: "https://scrimba.com/scrim/cL3PmqT6",
  },
];

export const workNavs = ["All", "Web", "App", "Form"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Europe",
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
