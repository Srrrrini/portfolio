import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { ResearchExp } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ResearchCard = ({
  index,
  name,
  organization,
  description,
  tags,
  image,
  role,
  guide,
  file_name,
  link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 5, scale: 1, speed: 300 }}
        className="bg-tertiary p-5 rounded-2xl w-full"
      >
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-2/5 h-[240px] shrink-0">
            {typeof image === "string" && image.endsWith(".mp4") ? (
              <video
                src={image}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <img
                src={image}
                alt={`${name} figure`}
                className="w-full h-full object-cover rounded-xl"
              />
            )}
          </div>

          <div className="flex-1">
            <h3 className="text-white font-display font-bold text-[22px]">{name}</h3>
            <p className="text-secondary text-[14px] mt-1">
              {role}{role && organization ? " — " : ""}{organization}
            </p>
            {guide && <p className="text-secondary text-[13px] mt-1">Guide: {guide}</p>}

            <p className="mt-3 text-secondary text-[14px] leading-[24px]">
              {description}
            </p>

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-white font-mono font-semibold text-[13px] hover:text-accent"
              >
                {file_name || "Learn more"} &rarr;
              </a>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={`${name}-${tag.name}`} className={`text-[13px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Research = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Research</p>
        <h2 className={styles.sectionHeadText}>Research.</h2>
      </motion.div>

      <div className="mt-14 flex flex-col gap-7">
        {ResearchExp.map((project, index) => (
          <ResearchCard key={`research-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Research, "research");
