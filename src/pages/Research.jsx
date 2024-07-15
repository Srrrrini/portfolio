import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { ResearchExp } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  organization,
  description,
  tags,
  image,
  role,
  guide,
  source_code_link,
  file_name,link
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 1,
          scale: 1,
          speed: 10,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[1180px] w-full"
      >

        <div className="flex items-start">
  <div className="h-[380px]"> {/* Set a fixed width for the image container */}

    <img
      src={image}
      alt="project_image"
      className="w-full h-full object-cover rounded-2xl"
      
    />
  </div>
  <div className="ml-4 w-[400px]"> {/* Set a fixed width for the text container */}
    <div className="mt-5">
    <h3 className="text-white font-bold text-[30px]">{name}</h3>
    <br></br>
      <p className="text-white text-[20px]">{role}</p>
      <br></br>
      <p className="text-white text-[18.5px]">{organization}</p>
      <br></br>
      <p className="text-white text-[15px]">Guide : {guide}</p>
      <p className="text-white text-[17px]"></p>
      <br></br>
      {/* <div className="text-white font-bold text-[28px]"><a href={`${link}`}>{file_name}</a></div> */}
      <div className="text-white font-bold text-[25px]">
  <a href={`${link}`} target="_blank" rel="noopener noreferrer">
  {file_name}
  </a>
</div>

    </div>

    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <p
          key={`${name}-${tag.name}`}
          className={`text-[14px] ${tag.color}`}
        >
          #{tag.name}
        </p>
      ))}
    </div>
    {/* <div><a href={`/research/${name}`}>Learn more</a></div> */}
  </div>
</div>
  <p className="mt-2 text-secondary text-[16px]">{description}</p>


        
      </Tilt>
    </motion.div>
  );
};

const Research = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} `}>Research Experience</p> */}
        <h2 className={`${styles.sectionHeadText}`}>Research Experience</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-6xl leading-[30px]"
        >
          Embarking on the captivating journey of research, I have found immense joy in the pursuit 
          of knowledge and the exploration of cutting-edge technologies. The dynamic field of research 
          not only fuels my intellectual curiosity but also provides a platform for transformative innovation. 
          In the realms of mechatronics, heat transfer, and cyber-physical systems, I have had the privilege of 
          delving into complex challenges and devising ingenious solutions. This journey has not only honed my skills 
          but has also instilled in me a profound appreciation for the impact that thoughtful research can have 
          on shaping the future of technology. 

          Please find below details about my research experiences, along with a few sneak peeks.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {ResearchExp.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Research, "");
