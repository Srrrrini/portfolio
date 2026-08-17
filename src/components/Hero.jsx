import { motion } from "framer-motion";
import {About, Life} from './'
import { styles } from "../styles";
import { Robot} from "../assets";


const Hero = () => {
  return (
    <section className={`relative w-full min-h-screen mx-auto`}>
      <div
        className={`pt-[120px] pb-20 max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-center lg:items-start gap-8`}
      >
        <div className="flex flex-row items-start gap-5 w-full lg:w-auto">
          <div className="flex flex-col justify-center items-center mt-5 shrink-0">
            <div className="w-5 h-5 rounded-full bg-[#4f8fe8]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#4f8fe8]">Srinivas</span>
            </h1>


        <div className={`${styles.heroSubText} mt-2 text-white-95`} >
        Robotics Software Engineer at Nimble Robotics, building toward Physical AI.
        <br></br>Perception, robot learning, and hands-on robotics research.
        <div className='mt-8'>
          <a
            href='https://drive.google.com/file/d/1fxkuAHPrEIG_oL93FAPp-IT5iIXVBEi0/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-[#4f8fe8] hover:bg-[#3a78d4] text-white font-mono font-semibold text-[16px] py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out'
          >
            Resume
          </a>
        </div>
        </div>
          </div>
        </div>
        <img
          src={Robot}
          alt="Srinivas Ramineni"
          className="block w-full max-w-sm lg:max-w-none lg:w-2/4 h-auto lg:h-2/4 rounded-2xl object-cover"
          />
      </div>
      
      {/* <img
        src={Vscode}
        alt="vscode"
        className="xl:hidden block w-screen h-screen rounded-2xl opacity-10 green-pink-gradient shadow-card"
      /> */}
      
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
