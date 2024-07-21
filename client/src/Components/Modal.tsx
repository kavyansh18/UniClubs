import { motion } from "framer-motion";
import { useEffect } from "react";
import { Meteors } from "../Components/Meteors"; // Adjust the path as necessary

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
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: string;
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
          <div className="w-full relative max-w-lg">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
            <div className="flex justify-center items-center">
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex justify-center items-center">
            <div><img src={image} alt="" /></div>
            <div>
              <div className="absolute top-2 right-2 h-8 w-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer" onClick={onClose}>
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

              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                {title}
              </h1>

              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                {description}
              </p>

              <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
                Explore
              </button>

              {/* Meteor effect */}
              <Meteors number={20} />
            </div>
            </div>

          </div>
          </div>
      </motion.div>
    </motion.div>
  );
};
