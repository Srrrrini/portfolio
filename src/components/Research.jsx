import React from "react";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { ResearchExp } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ResearchCard = ({
  index,
  slug,
  name,
  organization,
  summary,
  description,
  tags,
  image,
  role,
  guide,
  badge,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 5, scale: 1, speed: 300 }}
        className="bg-tertiary border border-white/10 p-5 rounded-2xl w-full"
      >
        <Link to={`/research/${slug}`} className="flex flex-col md:flex-row gap-6 items-start group">
          <div className="w-full md:w-2/5 h-[240px] shrink-0">
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
                alt={`${name} figure`}
                className="w-full h-full object-contain rounded-xl"
              />
            )}
          </div>

          <div className="flex-1">
            {badge && (
              <span className="inline-block mb-2 text-[12px] font-mono font-semibold text-accent border border-accent/40 rounded-full px-3 py-1">
                {badge}
              </span>
            )}
            <h3 className="text-white font-display font-bold text-[22px] group-hover:text-accent transition-colors">{name}</h3>
            <p className="text-secondary text-[14px] mt-1">
              {role}{role && organization ? " — " : ""}{organization}
            </p>
            {guide && <p className="text-secondary text-[13px] mt-1">Guide: {guide}</p>}

            <p className="mt-3 text-secondary text-[14px] leading-[24px]">
              {summary || description}
            </p>

            <span className="mt-3 inline-block text-white font-mono font-semibold text-[13px] group-hover:text-accent">
              View details &rarr;
            </span>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={`${name}-${tag.name}`} className={`text-[13px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </Link>
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
