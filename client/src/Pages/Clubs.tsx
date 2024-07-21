import { Boxes } from "../Components/UI/BackgroundBoxes.tsx";
import { cn } from "../Lib/utils.ts";
import { HoverEffect } from "../Components/UI/CardHoverEffect.tsx";
import ntl from '../assets/ntl.png';
import tph from '../assets/tph.png';
import bc from '../assets/bc.png';
import gdsc from '../assets/gdsc.png';
import htb from '../assets/htb.png';
import kzilla from '../assets/kzilla.png';
import nscc from '../assets/nscc.png';
import gh from '../assets/gh.png';
import dbug from '../assets/dbugl.png';

export default function Clubs() {
  return (
    <div className="h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-start pt-5 rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-3xl text-xl bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent relative z-20")}>
        Here are all listed clubs in our college
      </h1>

      <div className="max-w-7xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>

    </div>
  );
}

export const projects = [
  {
    title: "NextTech Lab",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: ntl, 
  },
  {
    title: "The Product House X SRMIST",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime.",
    link: "https://netflix.com",
    image: tph,
  },
  {
    title: "BlockChain Club",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    image: bc, 
  },
  {
    title: "Google Developers Club",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    image: gdsc,
  },
  {
    title: "HackTheBox",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
    image: htb, 
  },
  {
    title: "SRMKZILLA",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software.",
    link: "https://microsoft.com",
    image: kzilla, 
  },
  {
    title: "Newton School Coding Club",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software.",
    link: "https://microsoft.com",
    image: nscc, 
  },
  {
    title: "GitHub Community",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software.",
    link: "https://microsoft.com",
    image: gh, 
  },
  {
    title: "DBug Labs",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software.",
    link: "https://microsoft.com",
    image: dbug, 
  },
];
