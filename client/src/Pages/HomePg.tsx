"use client";
import { motion } from "framer-motion";
import { Lamp } from "../Components/UI/Lamp";
import logouc from "../assets/logouc.webp";
import "../font.css"

export default function HomePg() {
  return (
    <Lamp>
      <motion.h1
        initial={{ opacity: 0.5, y: 100, fontSize: "1.5rem" }}
        whileInView={{ opacity: 1, y: 40, fontSize: "3rem" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
          className="flex justify-center items-center absolute lg:bottom-[11rem] lg:left-[8rem] bottom-[21rem] left-[5.3rem]"
        >
          <img className="w-24" src={logouc} alt="Logo" />
        </motion.div>
        <p className="py-1 bg-gradient-to-r from-stone-500 to-stone-700 bg-clip-text text-transparent text-center text-6xl font-medium tracking-tight  md:text-6xl lg:relative absolute lg:bottom-0 bottom-[12rem] lg:left-0 left-[1.5rem]">
          UniClubs
        </p>
        <p className="bg-gradient-to-br from-slate-300 to-slate-500 py-1 bg-clip-text text-center text-4xl font-medium text-transparent lg:text-5xl lg:mb-0 mb-20 font-odibee-sans tracking-wide">
          Discover. Connect. Excel.
        </p>
      </motion.h1>
    </Lamp>
  );
}
