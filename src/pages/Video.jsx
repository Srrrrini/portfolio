import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
// import nhjk from 'C:/Users/srini/Desktop/sriniwasportofolio/portfolio-main/src/assets/nhjk.mp4';

const ProjectCard = ({
  index,
  name,
  organization,
  description,
  tags,
  image,
  role,
  file_name,link,
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
        <div className="h-[380px]"> {/* Set a fixed width for the video container */}
  <video
    src={image} // Assuming the video source URL is stored in the 'image' variable
    alt="project_video"
    className="w-full h-full object-cover rounded-2xl"
    controls // Add controls for play/pause/etc.
  />
</div>

  <div className="ml-4 w-[400px]"> {/* Set a fixed width for the text container */}
    <div className="mt-5">
    <h3 className="text-white font-bold text-[40px]">{name}</h3>
      <p className="text-white text-[17px]">{organization}</p>
      <p className="text-white text-[17px]">{role}</p>
      <p className="text-white text-[17px]"></p>
      <br></br>
      <div className="text-white font-bold text-[28px]"><a href={`${link}`}>{file_name}</a></div>
      

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

const Video = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} `}>Research Experience</p> */}
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-6xl leading-[30px]"
        >
          
Throughout my undergraduate studies, I participated in various clubs and undertook projects in machine learning, computer vision, etc. Although these projects lacked a guide or manager overseeing my work, it also meant that I worked alone, experimenting with various concepts and techniques. 
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Video, "");
