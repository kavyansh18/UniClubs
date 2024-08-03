import { CardSpotlight } from "../Components/UI/CardSpotlight.tsx";
import { useState } from "react";
import ntl from "../assets/ntl.webp";
import tph from "../assets/tph.webp";
import bc from "../assets/bc.webp";
import gdsc from "../assets/gdsc.webp";
import htb from "../assets/htb.webp";
import kzilla from "../assets/kzilla.webp";
import nscc from "../assets/nscc.webp";
import gh from "../assets/gh.webp";
import dbug from "../assets/dbugl.webp";
import dsc from "../assets/dsc.webp";
import dsa from "../assets/dsa.webp";
import ar from "../assets/aarush.webp";
import "../index.css";
import { Modal } from "../Components/Modal.tsx";

export default function CardSpotlightDemo() {
  const [selectedItem, setSelectedItem] = useState<{
    title: string;
    description: string;
    image: string;
    type: string;
    website: string;
    socialLinks: { platform: string; link: string }[];
  } | null>(null);

  const handleOpenModal = (item: {
    title: string;
    description: string;
    image: string;
    type: string;
    website: string;
    socialLinks: { platform: string; link: string }[];
  }) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };
  return (
    <div className="bg-gradient-to-r from-slate-500 to-slate-800 pb-10">
      <h1 className="flex justify-center items-center mb-10 pt-6 lg:text-2xl text-sm text-black font-bold font-mono">
        Here are the listed clubs in out college
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-10 w-full mx-auto lg:px-28">
        <div className="flex justify-center items-center">
        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
          <div>
            <div>
              <img className="w-32 relative z-20" src={ntl} alt="" />
            </div>
            <div className="text-white text-[30px] relative z-20">
              NextTech Lab
            </div>
            <div className="text-white text-xl relative z-20">
              Technology Research Lab
            </div>
            <div>
              <button
                onClick={() => handleOpenModal(projects[0])}
                className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
              >
                <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  View More
                </span>
              </button>
            </div>
          </div>
        </CardSpotlight>
        </div>

        <div className="flex justify-center items-center">
        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
          <div>
            <div>
              <img className="w-28 mb-4 relative z-20" src={tph} alt="" />
            </div>
            <div className="text-white text-[30px] relative z-20">
              TPH X SRMIST
            </div>
            <div className="text-white text-xl relative z-20">
              Blockchain Club
            </div>
            <div>
            <button
                onClick={() => handleOpenModal(projects[1])}
                className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
              >
                <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  View More
                </span>
              </button>
            </div>
          </div>
        </CardSpotlight>
        </div>

        <div className="flex justify-center items-center">
        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
          <div>
            <div>
              <img className="w-32 relative z-20" src={bc} alt="" />
            </div>
            <div className="text-white text-[30px] relative z-20">
              BlockChain Club
            </div>
            <div className="text-white text-xl relative z-20">
              Blockchain Based Club
            </div>
            <div>
            <button
                onClick={() => handleOpenModal(projects[2])}
                className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
              >
                <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  View More
                </span>
              </button>
            </div>
          </div>
        </CardSpotlight>
        </div>

        <div className="flex justify-center items-center">
        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
          <div>
            <div>
              <img className="w-32 relative z-20" src={gdsc} alt="" />
            </div>
            <div className="text-white text-[24px] relative z-20">
              Google Developers Club
            </div>
            <div className="text-white text-xl relative z-20">
              Developers Club
            </div>
            <div>
            <button
                onClick={() => handleOpenModal(projects[3])}
                className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
              >
                <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  View More
                </span>
              </button>
            </div>
          </div>
        </CardSpotlight>
        </div>

        <div className="flex justify-center items-center">
        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
          <div>
            <div>
              <img className="w-28 mb-3 relative z-20" src={htb} alt="" />
            </div>
            <div className="text-white text-[30px] relative z-20">
              HackTheBox
            </div>
            <div className="text-white text-xl relative z-20">
              Cyber Security Club
            </div>
            <div>
            <button
                onClick={() => handleOpenModal(projects[4])}
                className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
              >
                <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  View More
                </span>
              </button>
            </div>
          </div>
        </CardSpotlight>
        </div>

        <div className="flex justify-center items-center">
        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
          <div>
            <div>
              <img className="w-28 mb-3 relative z-20" src={kzilla} alt="" />
            </div>
            <div className="text-white text-[30px] relative z-20">
              SRMKZILLA
            </div>
            <div className="text-white text-xl relative z-20">
              Technology Club
            </div>
            <div>
            <button
                onClick={() => handleOpenModal(projects[5])}
                className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
              >
                <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  View More
                </span>
              </button>
            </div>
          </div>
        </CardSpotlight>
        </div>

        <div className="flex justify-center items-center">
        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
          <div>
            <div>
              <img className="w-32 relative z-20" src={nscc} alt="" />
            </div>
            <div className="text-white text-[20px] relative z-20">
              Newton School Coding Club
            </div>
            <div className="text-white text-xl relative z-20">Coding Club</div>
            <div>
            <button
                onClick={() => handleOpenModal(projects[6])}
                className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
              >
                <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  View More
                </span>
              </button>
            </div>
          </div>
        </CardSpotlight>
        </div>

        <div className="flex justify-center items-center">
        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
          <div>
            <div>
              <img className="w-28 mb-2 relative z-20" src={gh} alt="" />
            </div>
            <div className="text-white text-[30px] relative z-20">
              GitHub Community
            </div>
            <div className="text-white text-xl relative z-20">
              Technology Club
            </div>
            <div>
            <button
                onClick={() => handleOpenModal(projects[7])}
                className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
              >
                <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  View More
                </span>
              </button>
            </div>
          </div>
        </CardSpotlight>
        </div>

        <div className="flex justify-center items-center">
        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
          <div>
            <div>
              <img className="w-32 relative z-20" src={dsc} alt="" />
            </div>
            <div className="text-white text-[23px] relative z-20">
              Data Science Community
            </div>
            <div className="text-white text-xl relative z-20">
              Data Science Club
            </div>
            <div>
            <button
                onClick={() => handleOpenModal(projects[8])}
                className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
              >
                <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  View More
                </span>
              </button>
            </div>
          </div>
        </CardSpotlight>
        </div>

        <div className="flex justify-center items-center">
        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
          <div>
            <div>
              <img className="w-32 relative z-20" src={dbug} alt="" />
            </div>
            <div className="text-white text-[30px] relative z-20">
              DBug Labs
            </div>
            <div className="text-white text-xl relative z-20">
              Technology Club
            </div>
            <div>
            <button
                onClick={() => handleOpenModal(projects[9])}
                className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
              >
                <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  View More
                </span>
              </button>
            </div>
          </div>
        </CardSpotlight>
        </div>

        <div className="flex justify-center items-center">
        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
          <div>
            <div>
              <img className="w-32 mb-3 relative z-20" src={dsa} alt="" />
            </div>
            <div className="text-white text-[19px] relative z-20">
              Directorate of Student Affairs
            </div>
            <div className="text-white text-xl relative z-20">
              Cultural Club
            </div>
            <div>
            <button
                onClick={() => handleOpenModal(projects[10])}
                className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
              >
                <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  View More
                </span>
              </button>
            </div>
          </div>
        </CardSpotlight>
        </div>

        <div className="flex justify-center items-center">
        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
          <div>
            <div>
              <img className="w-32 relative z-20" src={ar} alt="" />
            </div>
            <div className="text-white text-[30px] relative z-20">Aarush</div>
            <div className="text-white text-xl relative z-20">
              Cultural Club
            </div>
            <div>
            <button
                onClick={() => handleOpenModal(projects[11])}
                className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
              >
                <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  View More
                </span>
              </button>
            </div>
          </div>
        </CardSpotlight>
        </div>
      </div>

      {selectedItem && (
        <Modal
          isOpen={!!selectedItem}
          onClose={handleCloseModal}
          title={selectedItem.title}
          description={selectedItem.description}
          image={selectedItem.image}
          type={selectedItem.type}
          website={selectedItem.website}
          socialLinks={selectedItem.socialLinks}
        />
      )}
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
      {
        platform: "LinkedIn",
        link: "https://linkedin.com/company/nexttechlab",
      },
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
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/company/tph-srmist",
      },
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
      {
        platform: "Instagram",
        link: "https://www.instagram.com/blockchainsrm/",
      },
      { platform: "Twitter", link: "https://twitter.com/BlockchainSRM" },
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/company/blockchain-club-srm/",
      },
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
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/company/htbsrmist/",
      },
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
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/company/srmkzilla/",
      },
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
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/company/newton-school-coding-club-srmist/mycompany/",
      },
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
      {
        platform: "Instagram",
        link: "https://www.instagram.com/githubsrm/?hl=en",
      },
      { platform: "Twitter", link: "https://twitter.com/githubsrm" },
      {
        platform: "LinkedIn",
        link: "https://in.linkedin.com/company/githubsrm",
      },
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
      {
        platform: "Instagram",
        link: "https://www.instagram.com/dscommunity_srm/",
      },
      { platform: "Twitter", link: "https://twitter.com/dscommunitysrm" },
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/company/datasciencecommunitysrm",
      },
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
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/company/dbuglabs/",
      },
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
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/in/directorate-of-student-affairs-srmist-dsa/?originalSubdomain=in",
      },
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
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/company/aaruush-srm-ist/",
      },
    ],
  },
];
