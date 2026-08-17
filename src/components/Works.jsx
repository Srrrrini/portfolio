import React from "react";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  slug,
  name,
  organization,
  summary,
  description,
  tags,
  image,
  source_code_link,
  report,
  video,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 5, scale: 1, speed: 300 }}
        className="bg-tertiary border border-white/10 p-5 rounded-2xl w-full"
      >
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <Link to={`/projects/${slug}`} className="w-full md:w-2/5 h-[240px] shrink-0 block">
            {typeof image === "string" && image.endsWith(".mp4") ? (
              <video
                src={image}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain rounded-xl"
              />
            ) : (
              <img
                src={image}
                alt={`${name} thumbnail`}
                className="w-full h-full object-contain rounded-xl"
              />
            )}
          </Link>

          <div className="flex-1">
            <Link to={`/projects/${slug}`} className="group">
              <h3 className="text-white font-display font-bold text-[24px] group-hover:text-accent transition-colors">{name}</h3>
              {organization && (
                <p className="text-secondary text-[14px] mt-1">{organization}</p>
              )}
              <p className="mt-3 text-secondary text-[14px] leading-[24px]">
                {summary || description}
              </p>
              <span className="mt-3 inline-block text-white font-mono font-semibold text-[13px] group-hover:text-accent">
                View details &rarr;
              </span>
            </Link>

            <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[13px]">
              {source_code_link && (
                <a href={source_code_link} target="_blank" rel="noopener noreferrer" className="inline-block text-white font-semibold hover:text-accent px-2 py-2 -mx-2 -my-2">
                  CODE
                </a>
              )}
              {report && (
                <a href={report} target="_blank" rel="noopener noreferrer" className="inline-block text-white font-semibold hover:text-accent px-2 py-2 -mx-2 -my-2">
                  REPORT
                </a>
              )}
              {video && (
                <a href={video} target="_blank" rel="noopener noreferrer" className="inline-block text-white font-semibold hover:text-accent px-2 py-2 -mx-2 -my-2">
                  VIDEO
                </a>
              )}
            </div>

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

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Real projects with real results — links to code, videos, and reports
          included where available.
        </motion.p>
      </div>

      <div className="mt-14 flex flex-col gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
