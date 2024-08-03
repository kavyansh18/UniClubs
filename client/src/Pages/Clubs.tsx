import { CardSpotlight } from "../Components/UI/CardSpotlight";
import { NavLink } from "react-router-dom";
import ntl from "../assets/ntl.webp";
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
import '../index.css'

export default function CardSpotlightDemo() {
  return (
    <div className="bg-gradient-to-r from-slate-500 to-slate-800 pb-10">
      <h1 className="flex justify-center items-center mb-10 pt-6 text-3xl">
        Here are the listed clubs in out college
      </h1>
      <div className="grid grid-cols-3 justify-center items-center gap-8 w-full px-28">

        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
            <div>
          <div>
            <img className="w-32 relative z-20" src={ntl} alt="" />
          </div>
          <div className="text-white text-[30px] relative z-20">NextTech Lab</div>
          <div className="text-white text-xl relative z-20">Technology Research Lab</div>
          <div>
            <NavLink
              to="/"
              className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
            >
              <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                View More
              </span>
            </NavLink>
          </div>
          </div>
        </CardSpotlight>

        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
            <div>
          <div>
            <img className="w-28 mb-4 relative z-20" src={tph} alt="" />
          </div>
          <div className="text-white text-[30px] relative z-20">TPH X SRMIST</div>
          <div className="text-white text-xl relative z-20">Blockchain Club</div>
          <div>
            <NavLink
              to="/"
              className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
            >
              <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                View More
              </span>
            </NavLink>
          </div>
          </div>
        </CardSpotlight>

        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
            <div>
          <div>
            <img className="w-32 relative z-20" src={bc} alt="" />
          </div>
          <div className="text-white text-[30px] relative z-20">BlockChain Club</div>
          <div className="text-white text-xl relative z-20">Blockchain Based Club</div>
          <div>
            <NavLink
              to="/"
              className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
            >
              <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                View More
              </span>
            </NavLink>
          </div>
          </div>
        </CardSpotlight>

        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
            <div>
          <div>
            <img className="w-32 relative z-20" src={gdsc} alt="" />
          </div>
          <div className="text-white text-[24px] relative z-20">Google Developers Club</div>
          <div className="text-white text-xl relative z-20">Developers Club</div>
          <div>
            <NavLink
              to="/"
              className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
            >
              <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                View More
              </span>
            </NavLink>
          </div>
          </div>
        </CardSpotlight>

        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
            <div>
          <div>
            <img className="w-28 mb-3 relative z-20" src={htb} alt="" />
          </div>
          <div className="text-white text-[30px] relative z-20">HackTheBox</div>
          <div className="text-white text-xl relative z-20">Cyber Security Club</div>
          <div>
            <NavLink
              to="/"
              className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
            >
              <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                View More
              </span>
            </NavLink>
          </div>
          </div>
        </CardSpotlight>

        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
            <div>
          <div>
            <img className="w-28 mb-3 relative z-20" src={kzilla} alt="" />
          </div>
          <div className="text-white text-[30px] relative z-20">SRMKZILLA</div>
          <div className="text-white text-xl relative z-20">Technology Club</div>
          <div>
            <NavLink
              to="/"
              className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
            >
              <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                View More
              </span>
            </NavLink>
          </div>
          </div>
        </CardSpotlight>

        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
            <div>
          <div>
            <img className="w-32 relative z-20" src={nscc} alt="" />
          </div>
          <div className="text-white text-[20px] relative z-20">Newton School Coding Club</div>
          <div className="text-white text-xl relative z-20">Coding Club</div>
          <div>
            <NavLink
              to="/"
              className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
            >
              <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                View More
              </span>
            </NavLink>
          </div>
          </div>
        </CardSpotlight>

        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
            <div>
          <div>
            <img className="w-28 mb-2 relative z-20" src={gh} alt="" />
          </div>
          <div className="text-white text-[30px] relative z-20">GitHub Community</div>
          <div className="text-white text-xl relative z-20">Technology Club</div>
          <div>
            <NavLink
              to="/"
              className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
            >
              <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                View More
              </span>
            </NavLink>
          </div>
          </div>
        </CardSpotlight>

        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
            <div>
          <div>
            <img className="w-32 relative z-20" src={dsc} alt="" />
          </div>
          <div className="text-white text-[23px] relative z-20">Data Science Community</div>
          <div className="text-white text-xl relative z-20">Data Science Club</div>
          <div>
            <NavLink
              to="/"
              className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
            >
              <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                View More
              </span>
            </NavLink>
          </div>
          </div>
        </CardSpotlight>

        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
            <div>
          <div>
            <img className="w-32 relative z-20" src={dbug} alt="" />
          </div>
          <div className="text-white text-[30px] relative z-20">DBug Labs</div>
          <div className="text-white text-xl relative z-20">Technology Club</div>
          <div>
            <NavLink
              to="/"
              className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
            >
              <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                View More
              </span>
            </NavLink>
          </div>
          </div>
        </CardSpotlight>

        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
            <div>
          <div>
            <img className="w-32 mb-3 relative z-20" src={dsa} alt="" />
          </div>
          <div className="text-white text-[19px] relative z-20">Directorate of Student Affairs</div>
          <div className="text-white text-xl relative z-20">Cultural Club</div>
          <div>
            <NavLink
              to="/"
              className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
            >
              <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                View More
              </span>
            </NavLink>
          </div>
          </div>
        </CardSpotlight>

        <CardSpotlight className="h-80 w-80 rounded-3xl flex flex-col justify-start items-start">
            <div>
          <div>
            <img className="w-32 relative z-20" src={ar} alt="" />
          </div>
          <div className="text-white text-[30px] relative z-20">Aarush</div>
          <div className="text-white text-xl relative z-20">Cultural Club</div>
          <div>
            <NavLink
              to="/"
              className="relative mt-4 inline-flex items-center justify-start px-4 py-1.5 overflow-hidden font-medium transition-all bg-gradient-to-r from-slate-300 to-slate-500 rounded-3xl hover:bg-white group"
            >
              <span className="w-48 h-44 rounded rotate-[-50deg] bg-gradient-to-r from-blue-600 to-violet-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                View More
              </span>
            </NavLink>
          </div>
          </div>
        </CardSpotlight>
      </div>
    </div>
  );
}
