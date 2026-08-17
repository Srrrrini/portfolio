import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectDetail = () => {
  const { slug } = useParams();
  const item = projects.find((p) => p.slug === slug);

  if (!item) return <Navigate to="/#projects" replace />;

  const {
    name,
    organization,
    image,
    description,
    sections,
    tags,
    source_code_link,
    report,
    video,
  } = item;

  return (
    <div className="max-w-5xl mx-auto sm:px-16 px-6 pt-32 pb-20">
      <Link
        to="/#projects"
        className="text-secondary hover:text-accent text-[14px] font-mono"
      >
        &larr; Back to Projects
      </Link>

      <motion.div variants={textVariant()} initial="hidden" animate="show" className="mt-6">
        <h1 className={`${styles.sectionHeadText} text-[36px] md:text-[48px]`}>{name}</h1>
        {organization && <p className="text-secondary text-[16px] mt-2">{organization}</p>}
      </motion.div>

      {typeof image === "string" && image.endsWith(".mp4") ? (
        <video
          src={image}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto mt-8 rounded-2xl"
        />
      ) : (
        <img src={image} alt={name} className="w-full h-auto mt-8 rounded-2xl" />
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[13px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-3 font-mono text-[14px]">
        {source_code_link && (
          <a href={source_code_link} rel="noopener noreferrer" className="text-white font-semibold bg-tertiary border border-white/10 hover:border-accent hover:text-accent rounded-xl px-4 py-2.5 transition-colors">
            CODE &rarr;
          </a>
        )}
        {report && (
          <a href={report} rel="noopener noreferrer" className="text-white font-semibold bg-tertiary border border-white/10 hover:border-accent hover:text-accent rounded-xl px-4 py-2.5 transition-colors">
            REPORT &rarr;
          </a>
        )}
        {video && (
          <a href={video} rel="noopener noreferrer" className="text-white font-semibold bg-tertiary border border-white/10 hover:border-accent hover:text-accent rounded-xl px-4 py-2.5 transition-colors">
            VIDEO &rarr;
          </a>
        )}
      </div>

      <div className="mt-10 flex flex-col gap-10">
        {sections && sections.length > 0 ? (
          sections.map((section, i) => (
            <motion.div key={section.heading} variants={fadeIn("up", "spring", i * 0.2, 0.75)}>
              <h2 className="text-white font-display font-bold text-[24px]">{section.heading}</h2>
              <p className="mt-3 text-secondary text-[16px] leading-[28px]">{section.body}</p>
              {section.link && (
                <a
                  href={section.link}
                  className="mt-3 inline-block text-white font-mono font-semibold text-[13px] hover:text-accent"
                >
                  {section.linkLabel || "Learn more"} &rarr;
                </a>
              )}
              {section.image && (
                <img
                  src={section.image}
                  alt={section.heading}
                  className="w-full h-auto mt-4 rounded-2xl"
                />
              )}
            </motion.div>
          ))
        ) : (
          <div>
            <h2 className="text-white font-display font-bold text-[24px]">Overview</h2>
            <p className="mt-3 text-secondary text-[16px] leading-[28px]">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
