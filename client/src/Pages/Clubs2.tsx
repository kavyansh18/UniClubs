import { CardSpotlight } from "../Components/UI/CardSpotlight2.tsx";
import { useState } from "react";
import "../index.css";
import { Modal } from "../Components/Modal.tsx";
import cn from '../assets/cn.png'
import sq from '../assets/sq.webp'
import mlsa from '../assets/mlsa.png'
import spike from '../assets/spike.png'
import ad from '../assets/ad.png'
import rc from '../assets/rc.jpeg'

export default function CardSpotlightDemo2() {
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
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-10 w-full mx-auto lg:px-28">
        <div className="flex justify-center items-center">
        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
          <div>
            <div>
              <img className="w-32 relative z-20" src={cn} alt="" />
            </div>
            <div className="text-white text-[30px] relative z-20">Coding Ninjas SRM</div>
            <div className="text-white text-xl relative z-20">
            Coding Club
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
              <img className="w-28 relative z-20 mb-3" src={sq} alt="" />
            </div>
            <div className="text-white text-[32px] relative z-20">SRM Qkrishi</div>
            <div className="text-white text-xl relative z-20">
            Quantum Club
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
              <img className="w-28 relative z-20" src={mlsa} alt="" />
            </div>
            <div className="text-white text-[22px] relative z-20">Microsoft Learn Student Ambassadors SRM</div>
            <div className="text-white text-xl relative z-20">
            Technical Club
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
              <img className="w-28 relative z-20 mb-4 rounded-2xl" src={spike} alt="" />
            </div>
            <div className="text-white text-[30px] relative z-20">SRM Spikers</div>
            <div className="text-white text-xl relative z-20">
            Sports Club
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
              <img className="w-28 relative z-20 mb-3 rounded-2xl" src={ad} alt="" />
            </div>
            <div className="text-white text-[26px] relative z-20">Alexa Developers SRM</div>
            <div className="text-white text-xl relative z-20">
            Technical Club
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
              <img className="w-28 relative z-20 mb-2 rounded-xl" src={rc} alt="" />
            </div>
            <div className="text-white text-[27px] relative z-20">SRM Team Robocon</div>
            <div className="text-white text-xl relative z-20">
            Robotics Club
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
    title: "Coding Ninjas SRM",
    description:
      "Welcome to Coding Ninjas Club SRM! We are a community of passionate coders dedicated to exploring technology and creating innovative solutions. Our club hosts events like Hackathons, Workshops, and Gaming Events, encouraging members to use their skills to solve real-world problems.",
    image: cn,
    type: "Coding Club",
    website: "https://cnwebsite22.vercel.app/",
    socialLinks: [
      { platform: "Instagram", link: "https://www.instagram.com/coding.ninjas/?hl=en" },
      { platform: "Twitter", link: "https://x.com/ninjassrm" },
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/company/coding-ninjas-club-srm/?originalSubdomain=in",
      },
    ],
  },
  {
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
  },
  {
    title: "Microsoft Learn Student Ambassadors",
    description:
      "Qrishi to establish the SRM Qkrishi Center of Excellence in Quantum Information and Computing. This interdisciplinary research center focuses on advancing quantum software, algorithms education, and research, supporting India's skilling mission.",
    image: mlsa,
    type: "Technical Club",
    website: "https://mlsasrm.in/",
    socialLinks: [
      { platform: "Instagram", link: "https://www.instagram.com/mlsa.srm/?hl=en" },
      { platform: "Twitter", link: "https://x.com/mlsasrm" },
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/company/mlsa-srm/?originalSubdomain=in",
      },
    ],
  },

  {
    title: "SRM Spikers",
    description:
      "Welcome to the Sports Club at SRM! We promote physical fitness, teamwork, and sportsmanship through a variety of activities, including basketball, soccer, tennis, and swimming. Whether you're an experienced athlete or a beginner, join us to stay active, make friends, and enjoy the thrill of competition.",
    image: spike,
    type: "Sports Club",
    website: "https://www.srmist.edu.in/events/spikers-24-battle-of-the-champions/",
    socialLinks: [
      { platform: "Instagram", link: "https://www.instagram.com/spikers_srm/" },
      { platform: "Twitter", link: "https://not-foundd.netlify.app/" },
      {
        platform: "LinkedIn",
        link: "https://not-foundd.netlify.app/",
      },
    ],
  },

  {
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
  },

  {
    title: "SRM Team Robocon",
    description:
      "SRM Team Robocon, the Robotics Team of SRM Institute Of Science And Technology, Chennai, focuses on competitive robotics and R&D in various robotic structures and mechanisms. Our diverse team of passionate engineers from different branches and years collaborates to innovate and excel in technology.",
    image: rc,
    type: "Robotics Club",
    website: "https://www.srmteamrobocon.com/",
    socialLinks: [
      { platform: "Instagram", link: "https://www.instagram.com/srmteamrobocon/" },
      { platform: "Twitter", link: "https://not-foundd.netlify.app/" },
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/company/srmteamrobocon/?originalSubdomain=in",
      },
    ],
  },
];
