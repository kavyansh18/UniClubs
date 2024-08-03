import { Boxes } from "../Components/UI/BackgroundBoxes.tsx";
import { cn } from "../Lib/utils.ts";
import { HoverEffect } from "../Components/UI/CardHoverEffect.tsx";
import ntl from '../assets/ntl.webp';
import tph from '../assets/tph.webp';
import bc from '../assets/bc.webp';
import gdsc from '../assets/gdsc.webp';
import htb from '../assets/htb.webp';
import kzilla from '../assets/kzilla.webp';
import nscc from '../assets/nscc.webp';
import gh from '../assets/gh.webp';
import dbug from '../assets/dbugl.webp';
import dsc from '../assets/dsc.webp';
import dsa from '../assets/dsa.webp';
import ar from '../assets/aarush.webp';
import { motion } from "framer-motion";

export default function Clubs() {
  return (
    <div className="h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-start pt-5 rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
          >
      <h1 className={cn("md:text-3xl text-xl bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent relative z-20")}>
        Here are all listed clubs in our college
      </h1>
      </motion.div>

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
      website: "https://next-tech-site.vercel.app/",
      socialLinks: [
        { platform: "Instagram", link: "https://instagram.com/nexttechlab" },
        { platform: "Twitter", link: "https://twitter.com/nexttechlab" },
        { platform: "LinkedIn", link: "https://linkedin.com/company/nexttechlab" },
      ],
    },
    {
      title: "TPH X SRMIST",
      description:
        "Welcome to TPHXSRM, the Product House SRM Web3 Club! We're a community exploring Web3 and blockchain, offering a platform for learning and innovation. Join us to work on real projects, interact with industry experts, and shape the digital future. Let's lead the next wave of technology together!",
      image: tph,
      type: "Blockchain Club",
      website: "https://0xsrmist.xyz/",
      socialLinks: [
        { platform: "Instagram", link: "https://www.instagram.com/0xsrmist/" },
        { platform: "Twitter", link: "https://twitter.com/0xsrmist" },
        { platform: "LinkedIn", link: "https://www.linkedin.com/company/tph-srmist" },
      ],
    },
    {
      title: "BlockChain Club",
      description:
        "Blockchain Club SRM is the pioneer student-led club around concepts of Web3 and distributed consensus. We are a club of 40+ strong members with expertise in various domains and technologies. Blockchain Club SRM is a student driven community dedicated to improving the web3 sector.",
      image: bc,
      type: "Blockchain Club",
      website: "https://www.blockchainclubsrm.com/",
      socialLinks: [
        { platform: "Instagram", link: "https://www.instagram.com/blockchainsrm/" },
        { platform: "Twitter", link: "https://twitter.com/BlockchainSRM" },
        { platform: "LinkedIn", link: "https://www.linkedin.com/company/blockchain-club-srm/" },
      ],
    },
    {
      title: "Google Developers Club",
      description:
        "Google Developer Student Club (GDSC) is a program for university students to learn mobile and web development. Open to all skill levels, GDSC offers a space to explore ideas, collaborate, and enhance development skills. Join us to innovate and solve development challenges together!",
      image: gdsc,
      type: "Developers Club",
      website: "https://gdscsrm.com/",
      socialLinks: [
        { platform: "Instagram", link: "https://www.instagram.com/gdsc.srm/" },
        { platform: "Twitter", link: "https://twitter.com/gdscsrm" },
        { platform: "LinkedIn", link: "http://www.linkedin.com/company/gdscsrm" },
      ],
    },
    {
      title: "HackTheBox",
      description:
        "HackTheBox SRMIST focuses on training the next-gen of cyber-warriors transforming the cyber space in SRMIST and beyond.",
      image: htb,
      type: "Cyber Security Club",
      website: "https://www.htbsrmist.tech/",
      socialLinks: [
        { platform: "Instagram", link: "https://www.instagram.com/htbsrmist/" },
        { platform: "Twitter", link: "https://twitter.com/htbsrmist" },
        { platform: "LinkedIn", link: "https://www.linkedin.com/company/htbsrmist/" },
      ],
    },
    {
      title: "SRMKZILLA",
      description:
        "SRMZKILLA is an open-source student dev community at SRM Institute of Science and Technology. We bridge the gap between academics and practical skills through collaborative projects, workshops, and hackathons. Our mentorship programs and networking events connect students with industry professionals and alumni.",
      image: kzilla,
      type: "Technology Club",
      website: "https://www.srmkzilla.net/",
      socialLinks: [
        { platform: "Instagram", link: "https://www.instagram.com/srmkzilla/" },
        { platform: "Twitter", link: "https://twitter.com/SRMKZILLA_Club" },
        { platform: "LinkedIn", link: "https://www.linkedin.com/company/srmkzilla/" },
      ],
    },
    {
      title: "Newton School Coding Club",
      description:
        "Welcome to Newton School Coding Club SRM! We're proud to offer an excellent platform for students who want to do well in coding and technology. Our club has three parts: Technical, Creatives, and Non-Technical. Each part helps you learn and grow in different ways. We organize fun events that teach you a lot.",
      image: nscc,
      type: "Coding Club",
      website: "https://www.nsccsrm.tech/",
      socialLinks: [
        { platform: "Instagram", link: "https://www.instagram.com/nscc_srm/" },
        { platform: "Twitter", link: "https://twitter.com/nsccsrm?lang=en" },
        { platform: "LinkedIn", link: "https://www.linkedin.com/company/newton-school-coding-club-srmist/mycompany/" },
      ],
    },
    {
      title: "GitHub Community",
      description:
        "GitHub Community SRM is the foremost student-led community spearheading the Open Source Revolution at SRMIST, Chennai.",
      image: gh,
      type: "Technology Club",
      website: "http://githubsrm.tech/",
      socialLinks: [
        { platform: "Instagram", link: "https://www.instagram.com/githubsrm/?hl=en" },
        { platform: "Twitter", link: "https://twitter.com/githubsrm" },
        { platform: "LinkedIn", link: "https://in.linkedin.com/company/githubsrm" },
      ],
    },
    {
      title: "Data Science Community",
      description:
        "We are a technology-driven Data Science-based student-led innovation community at SRM IST. Our aim is to foster development and entrepreneurial skills among students and work as a community that inspires thousands.",
      image: dsc,
      type: "Data Science Club",
      website: "https://www.dscommunity.in/",
      socialLinks: [
        { platform: "Instagram", link: "https://www.instagram.com/dscommunity_srm/" },
        { platform: "Twitter", link: "https://twitter.com/dscommunitysrm" },
        { platform: "LinkedIn", link: "https://www.linkedin.com/company/datasciencecommunitysrm" },
      ],
    },
    {
      title: "DBug Labs",
      description:
        "Found a bug? You came to the right place to fix it. We are a team that wants to make a big change in the ever-changing programming and software development world.",
      image: dbug,
      type: "Technology Club",
      website: "https://dbuglabs.vercel.app/",
      socialLinks: [
        { platform: "Instagram", link: "https://www.instagram.com/dbuglabs/" },
        { platform: "Twitter", link: "https://twitter.com/dbuglabs" },
        { platform: "LinkedIn", link: "https://www.linkedin.com/company/dbuglabs/" },
      ],
    },
    {
      title: "Directorate of Student Affairs",
      description:
        "Welcome to the Directorate of Student Affairs (DSA) at SRMIST, Kattankulathur. We offer students opportunities beyond the classroom with 16 clubs and 8 houses, fostering holistic development and collaboration. Join us to explore your potential and embody SRMIST's motto: LEARN. LEAP. LEAD.",
      image: dsa,
      type: "Cultural Club",
      website: "https://dsaweb18.wixsite.com/dsa-recrutiment/about-us",
      socialLinks: [
        { platform: "Instagram", link: "https://www.instagram.com/srmist_dsa/" },
        { platform: "Twitter", link: "https://twitter.com/dsasrmist" },
        { platform: "LinkedIn", link: "https://www.linkedin.com/in/directorate-of-student-affairs-srmist-dsa/?originalSubdomain=in" },
      ],
    },
    {
      title: "Aarush",
      description:
        "Since 1985, SRMIST has been a premier institution with over 50,000 students from 64+ countries. It offers top-ranked programs in Engineering, Management, Medicine, Health Sciences, and Science and Humanities. With state-of-the-art facilities, SRMIST is accredited by UGC and NAAC with an 'A++' grade",
      image: ar,
      type: "Cultural Club",
      website: "https://aaruush.org/",
      socialLinks: [
        { platform: "Instagram", link: "https://www.instagram.com/aaruush_srm/" },
        { platform: "Twitter", link: "https://twitter.com/aaruushsrmist" },
        { platform: "LinkedIn", link: "https://www.linkedin.com/company/aaruush-srm-ist/" },
      ],
    },
  ];
  