import { useState, useEffect } from "react";
import { CardSpotlight } from "../Components/UI/CardSpotlight";
import ntl from "../assets/ntl.webp";
import tph from "../assets/tph.webp";
import bc from "../assets/bc.webp";
import gdsc from "../assets/gdsc.webp";
import htb from "../assets/htb.webp";
import "../index.css";
import { Modal } from "../Components/Modal";
import { motion } from "framer-motion";
import ReactGA from "react-ga";
import kzilla from "../assets/kzilla.webp";
import nscc from "../assets/nscc.webp";
import gh from "../assets/gh.webp";
import dbug from "../assets/dbugl.webp";
import dsc from "../assets/dsc.webp";
import dsa from "../assets/dsa.webp";
import ar from "../assets/aarush.webp";
import cherry from "../assets/cherry.png";
import gen from "../assets/gen.png";
import q from "../assets/quantumsrm_logo.jpeg";
import cn from "../assets/cn.png";
import sq from "../assets/sq.webp";
import mlsa from "../assets/mlsa.png";
import spike from "../assets/spike.png";
import ad from "../assets/ad.png";
import rc from "../assets/rc.jpeg";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  type: string;
  website: string;
  socialLinks: { platform: string; link: string }[];
  filters: string[];
}

const projects: Project[] = [
  {
    id: "tech",
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
    filters: ["tech", "research"],
  },
  {
    id: "blockchain",
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
    filters: ["tech", "blockchain"],
  },
  {
    id: "blockchain",
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
    filters: ["blockchain", "tech"],
  },
  {
    id: "developer",
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
    filters: ["developer", "tech"],
  },
  {
    id: "tech",
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
    filters: ["tech", "cybersec"],
  },
  {
    id: "tech",
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
    filters: ["tech"],
  },
  {
    id: "tech",
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
    filters: ["tech"],
  },
  {
    id: "tech",
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
    filters: ["tech"],
  },
  {
    id: "tech",
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
    filters: ["tech", "datasc"],
  },
  {
    id: "tech",
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
    filters: ["tech"],
  },
  {
    id: "non-tech",
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
    filters: ["non-tech"],
  },
  {
    id: "non-tech",
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
    filters: ["non-tech"],
  },
  {
    id: "tech",
    title: "Cherry+ Network",
    description:
      "We offer internships, skill-development workshops, and courses to students, particularly those who are new to vocational education.We strive to build a community of creative thinkers where students can choose the field they want to follow as a career and receive support as they advance in that profession.",
    image: cherry,
    type: "Technical Club",
    website: "https://www.cherrynetwork.in/",
    socialLinks: [
      {
        platform: "Instagram",
        link: "https://www.instagram.com/cherry.network/",
      },
      { platform: "Twitter", link: "https://not-foundd.netlify.app/" },
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/company/cherry-network/",
      },
    ],
    filters: ["tech"],
  },
  {
    id: "tech",
    title: "Nextgen Al Club",
    description:
      "CINTEL’s NEXT-GEN AI offers a transformative journey in learning and personal growth. Our club is not just about acquiring knowledge but about preparing for the future by doing. Join us to embark on a memorable journey where learning meets action, and end with tangible success.",
    image: gen,
    type: "AI Club",
    website:
      "https://www.srmist.edu.in/department/department-of-computational-intelligence/nextgen-al/",
    socialLinks: [
      { platform: "Instagram", link: "https://www.instagram.com/next_gen.ai/" },
      { platform: "Twitter", link: "https://not-foundd.netlify.app/" },
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/company/cintels-next-gen-ai/?originalSubdomain=in",
      },
    ],
    filters: ["tech"],
  },
  {
    id: "tech",
    title: "Quantum Computing Club SRM",
    description:
      "A student-led Quantum community focused on Quantum Education & Skilling to accelerate tomorrow's quantum workforce by providing undergrads exposure to research and training.",
    image: q,
    type: "Quantum Club",
    website: "https://not-foundd.netlify.app/",
    socialLinks: [
      { platform: "Instagram", link: "https://www.instagram.com/quantum_srm/" },
      { platform: "Twitter", link: "https://not-foundd.netlify.app/" },
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/company/quantumsrm/",
      },
    ],
    filters: ["tech", "Quantum"],
  },
  {
    id: "tech",
    title: "Coding Ninjas SRM",
    description:
      "Welcome to Coding Ninjas Club SRM! We are a community of passionate coders dedicated to exploring technology and creating innovative solutions. Our club hosts events like Hackathons, Workshops, and Gaming Events, encouraging members to use their skills to solve real-world problems.",
    image: cn,
    type: "Coding Club",
    website: "https://cnwebsite22.vercel.app/",
    socialLinks: [
      {
        platform: "Instagram",
        link: "https://www.instagram.com/coding.ninjas/?hl=en",
      },
      { platform: "Twitter", link: "https://x.com/ninjassrm" },
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/company/coding-ninjas-club-srm/?originalSubdomain=in",
      },
    ],
    filters: ["tech"],
  },
  {
    id: "tech",
    title: "SRM Qkrishi",
    description:
      "Qrishi to establish the SRM Qkrishi Center of Excellence in Quantum Information and Computing. This interdisciplinary research center focuses on advancing quantum software, algorithms education, and research, supporting India's skilling mission.",
    image: sq,
    type: "Quantum Club",
    website: "https://srm-quic.vercel.app/",
    socialLinks: [
      { platform: "Instagram", link: "https://www.instagram.com/sq_quic/" },
      { platform: "Twitter", link: "https://x.com/sqquic" },
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/company/sq-quic/about/",
      },
    ],
    filters: ["tech", "Quantum"],
  },
  {
    id: "tech",
    title: "Microsoft Learn Student Ambassadors",
    description:
      "Led by Microsoft Learn Student Ambassadors, our technical club Microsoft Learn Student Ambassadors SRM focuses on lighting a fire under zealous and spirited thinkers. Starting years back, we’ve been committed to serving the community. We regularly conduct events, organize workshops, technical talks, webinars, build community projects to develop young minds, and help them recognize and uncover their potential.",
    image: mlsa,
    type: "Technical Club",
    website: "https://mlsasrm.in/",
    socialLinks: [
      {
        platform: "Instagram",
        link: "https://www.instagram.com/mlsa.srm/?hl=en",
      },
      { platform: "Twitter", link: "https://x.com/mlsasrm" },
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/company/mlsa-srm/?originalSubdomain=in",
      },
    ],
    filters: ["tech"],
  },

  {
    id: "non-tech",
    title: "SRM Spikers",
    description:
      "Welcome to the Sports Club at SRM! We promote physical fitness, teamwork, and sportsmanship through a variety of activities, including basketball, soccer, tennis, and swimming. Whether you're an experienced athlete or a beginner, join us to stay active, make friends, and enjoy the thrill of competition.",
    image: spike,
    type: "Sports Club",
    website:
      "https://www.srmist.edu.in/events/spikers-24-battle-of-the-champions/",
    socialLinks: [
      { platform: "Instagram", link: "https://www.instagram.com/spikers_srm/" },
      { platform: "Twitter", link: "https://not-foundd.netlify.app/" },
      {
        platform: "LinkedIn",
        link: "https://not-foundd.netlify.app/",
      },
    ],
    filters: ["non-tech", "sports"],
  },

  {
    id: "tech",
    title: "Alexa Developers SRM",
    description:
      "Our Goal is to build a Community of Voice First developers through alexa Skills Workshops, Events, Hackathons and many more. Join us for an amazing experience on Amazon's Virtual Assistant alexa.",
    image: ad,
    type: "Technical Club",
    website: "http://alexadevsrm.com/",
    socialLinks: [
      { platform: "Instagram", link: "https://www.instagram.com/alexadevsrm/" },
      { platform: "Twitter", link: "https://not-foundd.netlify.app/" },
      {
        platform: "LinkedIn",
        link: "https://in.linkedin.com/company/alexa-developers-srm",
      },
    ],
    filters: ["tech"],
  },

  {
    id: "tech",
    title: "SRM Team Robocon",
    description:
      "SRM Team Robocon, the Robotics Team of SRM Institute Of Science And Technology, Chennai, focuses on competitive robotics and R&D in various robotic structures and mechanisms. Our diverse team of passionate engineers from different branches and years collaborates to innovate and excel in technology.",
    image: rc,
    type: "Robotics Club",
    website: "https://www.srmteamrobocon.com/",
    socialLinks: [
      {
        platform: "Instagram",
        link: "https://www.instagram.com/srmteamrobocon/",
      },
      { platform: "Twitter", link: "https://not-foundd.netlify.app/" },
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/company/srmteamrobocon/?originalSubdomain=in",
      },
    ],
    filters: ["tech", "robotics"],
  },
];

export default function CardSpotlightDemo() {
  const [selectedItem, setSelectedItem] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);

    if (filter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.filters.includes(filter))
      );
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [filter]);

  const handleOpenModal = (item: Project) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <div className="bg-gradient-to-r from-slate-500 to-slate-800 pb-10 height">
        <div>
          <motion.h1
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: "easeInOut",
            }}
          >
            <h1 className="flex justify-center items-center mb-5 pt-6 lg:text-2xl text-lg text-black font-bold font-mono">
              Here are listed clubs in SRM
            </h1>

            <div className="flex justify-start lg:justify-center items-center mb-6 overflow-x-auto custom-scrollbar px-4 lg:px-8">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleFilterChange("all")}
                  className={`px-4 py-2 mx-2 glass ${
                    filter === "all"
                      ? "bg-blue-500 text-blue-800 font-bold"
                      : "bg-gray-300 text-black"
                  } rounded-md`}
                >
                  All
                </button>
                <button
                  onClick={() => handleFilterChange("tech")}
                  className={`px-4 py-2 mx-2 glass ${
                    filter === "tech"
                      ? "bg-blue-500 text-blue-800"
                      : "bg-gray-300 text-black"
                  } rounded-md`}
                >
                  Tech
                </button>
                <button
                  onClick={() => handleFilterChange("non-tech")}
                  className={`min-w-[110px] px-2 py-2 mx-2 glass ${
                    filter === "non-tech"
                      ? "bg-blue-500 text-blue-800"
                      : "bg-gray-300 text-black"
                  } rounded-md`}
                >
                  Non-Tech
                </button>

                <button
                  onClick={() => handleFilterChange("blockchain")}
                  className={`px-4 py-2 mx-2 glass ${
                    filter === "blockchain"
                      ? "bg-blue-500 text-blue-800 font-bold"
                      : "bg-gray-300 text-black"
                  } rounded-md`}
                >
                  Blockchain
                </button>
                <button
                  onClick={() => handleFilterChange("developer")}
                  className={`px-4 py-2 mx-2 glass ${
                    filter === "developer"
                      ? "bg-blue-500 text-blue-800 font-bold"
                      : "bg-gray-300 text-black"
                  } rounded-md`}
                >
                  Developer
                </button>

                <button
                  onClick={() => handleFilterChange("cybersec")}
                  className={`px-4 py-2 mx-2 glass ${
                    filter === "cybersec"
                      ? "bg-blue-500 text-blue-800 font-bold"
                      : "bg-gray-300 text-black"
                  } rounded-md`}
                >
                  CyberSecurity
                </button>

                <button
                  onClick={() => handleFilterChange("research")}
                  className={`px-4 py-2 mx-2 glass ${
                    filter === "research"
                      ? "bg-blue-500 text-blue-800 font-bold"
                      : "bg-gray-300 text-black"
                  } rounded-md`}
                >
                  Research
                </button>

                <button
                  onClick={() => handleFilterChange("sports")}
                  className={`px-4 py-2 mx-2 glass ${
                    filter === "sports"
                      ? "bg-blue-500 text-blue-800 font-bold"
                      : "bg-gray-300 text-black"
                  } rounded-md`}
                >
                  Sports
                </button>

                <button
                  onClick={() => handleFilterChange("robotics")}
                  className={`px-4 py-2 mx-2 glass ${
                    filter === "robotics"
                      ? "bg-blue-500 text-blue-800 font-bold"
                      : "bg-gray-300 text-black"
                  } rounded-md`}
                >
                  Robotics
                </button>

                <button
                  onClick={() => handleFilterChange("datasc")}
                  className={`min-w-[130px] px-2 py-2 mx-2 glass ${
                    filter === "datasc"
                      ? "bg-blue-500 text-blue-800 font-bold"
                      : "bg-gray-300 text-black"
                  } rounded-md`}
                >
                  Data Science
                </button>

                <button
                  onClick={() => handleFilterChange("Quantum")}
                  className={`px-4 py-2 mx-2 glass ${
                    filter === "Quantum"
                      ? "bg-blue-500 text-blue-800 font-bold"
                      : "bg-gray-300 text-black"
                  } rounded-md`}
                >
                  Quantum
                </button>
              </div>
            </div>
            
            {loading ? (
        <div className="loaderdiv">
        <div className="loader"></div>
        </div>
      ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-10 w-full mx-auto lg:px-28">
              {filteredProjects.map((project) => (
                <div
                  key={project.title}
                  className="flex justify-center items-center"
                >
                  <CardSpotlight className="h-[22rem] w-80 rounded-3xl flex flex-col justify-center items-start">
                    <div>
                      <div>
                        <img
                          className="w-32 relative z-20"
                          src={project.image}
                          alt=""
                        />
                      </div>
                      <div className="text-white text-[27px] relative z-20">
                        {project.title}
                      </div>
                      <div className="text-white text-xl relative z-20">
                        {project.type}
                      </div>
                      <div>
                        <button
                          onClick={() => handleOpenModal(project)}
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
              ))}
            </div>
            )}

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
          </motion.h1>
        </div>
      
    </div>
  );
}
