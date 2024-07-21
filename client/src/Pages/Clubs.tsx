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
        "⁠The Next Tech Lab pioneers advancements in AI, Cryptography, IoT, Blockchain, and Extended Reality. We foster collaboration to develop transformative solutions like AI-driven automation, secure cryptographic techniques, interconnected IoT systems, transparent blockchain transactions, and immersive XR experiences, driving technological progress and innovation.",
      image: ntl,
      type: "Technology Research Lab",
      website: "https://nexttechlab.org",
      socialLinks: [
        { platform: "Instagram", link: "https://instagram.com/nexttechlab" },
        { platform: "Twitter", link: "https://twitter.com/nexttechlab" },
        { platform: "LinkedIn", link: "https://linkedin.com/company/nexttechlab" },
      ],
    },
    {
      title: "TPH X SRMIST",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime.",
      image: tph,
      type: "Media Club",
      website: "https://theproducthouse.com",
      socialLinks: [
        { platform: "Instagram", link: "https://instagram.com/theproducthouse" },
        { platform: "Twitter", link: "https://twitter.com/theproducthouse" },
        { platform: "LinkedIn", link: "https://linkedin.com/company/theproducthouse" },
      ],
    },
    {
      title: "BlockChain Club",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      image: bc,
      type: "Finance Club",
      website: "https://blockchainclub.org",
      socialLinks: [
        { platform: "Instagram", link: "https://instagram.com/blockchainclub" },
        { platform: "Twitter", link: "https://twitter.com/blockchainclub" },
        { platform: "LinkedIn", link: "https://linkedin.com/company/blockchainclub" },
      ],
    },
    {
      title: "Google Developers Club",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      image: gdsc,
      type: "Technology Club",
      website: "https://developers.google.com",
      socialLinks: [
        { platform: "Instagram", link: "https://instagram.com/googledevs" },
        { platform: "Twitter", link: "https://twitter.com/googledevs" },
        { platform: "LinkedIn", link: "https://linkedin.com/company/googledevs" },
      ],
    },
    {
      title: "HackTheBox",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      image: htb,
      type: "Technology Club",
      website: "https://hackthebox.com",
      socialLinks: [
        { platform: "Instagram", link: "https://instagram.com/hackthebox" },
        { platform: "Twitter", link: "https://twitter.com/hackthebox" },
        { platform: "LinkedIn", link: "https://linkedin.com/company/hackthebox" },
      ],
    },
    {
      title: "SRMKZILLA",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software.",
      image: kzilla,
      type: "Technology Club",
      website: "https://srmkzilla.net",
      socialLinks: [
        { platform: "Instagram", link: "https://instagram.com/srmkzilla" },
        { platform: "Twitter", link: "https://twitter.com/srmkzilla" },
        { platform: "LinkedIn", link: "https://linkedin.com/company/srmkzilla" },
      ],
    },
    {
      title: "Newton School Coding Club",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software.",
      image: nscc,
      type: "Coding Club",
      website: "https://newtonschool.co",
      socialLinks: [
        { platform: "Instagram", link: "https://instagram.com/newtonschool" },
        { platform: "Twitter", link: "https://twitter.com/newtonschool" },
        { platform: "LinkedIn", link: "https://linkedin.com/company/newtonschool" },
      ],
    },
    {
      title: "GitHub Community",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software.",
      image: gh,
      type: "Technology Club",
      website: "https://github.com",
      socialLinks: [
        { platform: "Instagram", link: "https://instagram.com/github" },
        { platform: "Twitter", link: "https://twitter.com/github" },
        { platform: "LinkedIn", link: "https://linkedin.com/company/github" },
      ],
    },
    {
      title: "DBug Labs",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software.",
      image: dbug,
      type: "Technology Club",
      website: "https://dbuglabs.com",
      socialLinks: [
        { platform: "Instagram", link: "https://instagram.com/dbuglabs" },
        { platform: "Twitter", link: "https://twitter.com/dbuglabs" },
        { platform: "LinkedIn", link: "https://linkedin.com/company/dbuglabs" },
      ],
    },
  ];
  