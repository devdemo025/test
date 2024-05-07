import {
  battle,
  book,
  terrain,
  boss,
  googleDrive,
  mega,
  mediafire,
  gmail,
  linkedin,
  facebook,
  unity,
  csharp,
  vscode,
  aseprite,
  reactsvg,
  tailwind,
} from "../assets/icons";

import { book_red, book_black, book_white } from "../assets/images";

export const features = [
  {
    id: "feature-1",
    icon: battle,
    title: "Combat",
    content:
      "The game has combat sysmtem with weapon systems. All weapons has different animation combo",
  },

  {
    id: "feature-2",
    icon: book,
    title: "Quiz",
    content:
      "The game has quiz system that used c++ fundamentals as a question",
  },

  {
    id: "feature-3",
    icon: terrain,
    title: "Terrain",
    content:
      "The game has three terrain concept depends on the monster that you can encounter ",
  },

  {
    id: "feature-4",
    icon: boss,
    title: "Boss",
    content:
      "The game has 3 boss on each terrain with different skills and damage",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#gameplay", label: "Gameplay" },
  { href: "#download", label: "Download" },
];

export const downloadLinkHref = "#download";

export const downloadLinks = [
  {
    id: "google",
    icon: googleDrive,
    title: "Google",
    size: "322 MB",
    href: "https://drive.google.com/file/d/1J46ml6dSuoNfzjjnrqRXA1yeVjuTj0oW/view?usp=sharing",
  },
  {
    id: "mega",
    icon: mega,
    title: "MEGA",
    size: "322 MB",
    href: "https://mega.nz/file/Bvl1QbzD#6ku2AmIpenYvibkLgxWPssjtr5c3Ynp3Y17OV5R0P70",
  },
  {
    id: "mediafire",
    icon: mediafire,
    title: "MediaFire",
    size: "322 MB",
    href: "https://www.mediafire.com/file/e7b860cdopus5nd/Game.rar/file",
  },
];

export const contactLink = [
  {
    id: "email",
    icon: gmail,
    label: "Reyniel.t.mahinay@gmail.com",
  },
  {
    id: "linkedin",
    icon: linkedin,
    label: "Linkedin",
    href: "https://www.linkedin.com/in/reyniel-mahinay-20327028a/",
  },

  {
    id: "facebook",
    icon: facebook,
    label: "Facebook",
    href: "https://www.facebook.com/knoxx00/",
  },
];

export const books = [
  {
    id: "red",
    image: book_red,
  },
  {
    id: "black",
    image: book_black,
  },
  {
    id: "white",
    image: book_white,
  },
];

export const gametech = [
  {
    id: "unity",
    icon: unity,
  },
  {
    id: "csharp",
    icon: csharp,
  },
  {
    id: "vscode",
    icon: vscode,
  },
  {
    id: "aseprite",
    icon: aseprite,
  },
];

export const webtech = [
  {
    id: "react",
    icon: reactsvg,
  },

  {
    id: "tailwind",
    icon: tailwind,
  },
  {
    id: "vscode",
    icon: vscode,
  },
];
