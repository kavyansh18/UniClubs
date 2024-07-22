import { motion } from "framer-motion";
import { useEffect } from "react";
import { Meteors } from "../Components/Meteors";
import InstagramIcon from "../assets/ig.svg";
import TwitterIcon from "../assets/twitter.svg";
import LinkedInIcon from "../assets/ldn.svg";
import { Button } from "../Components/UI/MovingBorder.tsx";

const modalVariants = {
  hidden: { opacity: 0, y: "-100vh" },
  visible: { opacity: 1, y: "0" },
  exit: { opacity: 0, y: "100vh" },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  image,
  type,
  website,
  socialLinks,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: string;
  type: string;
  website: string;
  socialLinks: { platform: string; link: string }[];
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const renderSocialLinks = () => {
    return socialLinks.map((social) => {
      let icon;
      let sizeClass = "";
      switch (social.platform) {
        case "Instagram":
          icon = InstagramIcon;
          sizeClass = "w-8 h-8";
          break;
        case "Twitter":
          icon = TwitterIcon;
          sizeClass = "w-9 h-9";
          break;
        case "LinkedIn":
          icon = LinkedInIcon;
          sizeClass = "w-8 h-8";
          break;
        default:
          return null;
      }

      return (
        <a
          key={social.platform}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2"
        >
          <img
            src={icon}
            alt={`${social.platform} icon`}
            className={`${sizeClass}`}
          />
        </a>
      );
    });
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="relative mt-10">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl " />
          <div className="flex justify-center items-center">
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 lg:px-4 lg:py-8 px-1 py-3 lg:w-[45rem] lg:h-[24rem] w-[21rem] h-[30rem] overflow-hidden rounded-2xl ">
              <div className="relative lg:flex justify-center items-center gap-16 lg:px-0 px-4">
                <div>
                  <img
                    src={image}
                    alt={title}
                    className="lg:w-32 lg:h-32 h-20 w-20 object-cover rounded-t-2xl lg:mb-4 lg:px-0 px-2"
                  />
                </div>
                <div>
                  <div
                    className="absolute top-2 right-2 h-8 w-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer"
                    onClick={onClose}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4 text-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <h1 className="font-bold text-2xl text-white mb-2 relative z-50 lg:px-0 px-2">
                    {title}
                  </h1>
                  <h2 className="font-semibold text-m text-gray-300 mb-4 relative z-50 lg:px-0 px-2">
                    {type}
                  </h2>
                </div>
                <div>
                  <div className="flex space-x-1">{renderSocialLinks()}</div>
                </div>
              </div>
              <p className="font-normal text-base text-slate-500 mb-4 relative z-50 px-5 lg:text-m text-sm">
                {description}
              </p>

              <div className="flex justify-center items-center">
              <a href={website} target="_blank" rel="noopener noreferrer">
                <Button
                  borderRadius="1rem"
                  className="bg-slate-900 text-white hover:text-cyan-400 border-slate-800"
                >
                  Visit Website
                </Button>
              </a>
              </div>

              {/* Meteor effect */}
              <Meteors number={30} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
