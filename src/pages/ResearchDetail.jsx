import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ResearchExp } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ResearchDetail = () => {
  const { slug } = useParams();
  const item = ResearchExp.find((r) => r.slug === slug);

  if (!item) return <Navigate to="/#research" replace />;

  const {
    name,
    organization,
    role,
    guide,
    image,
    description,
    sections,
    tags,
    link,
    file_name,
    badge,
  } = item;

  return (
    <div className="max-w-5xl mx-auto sm:px-16 px-6 pt-32 pb-20">
      <Link
        to="/#research"
        className="text-secondary hover:text-accent text-[14px] font-mono"
      >
        &larr; Back to Research
      </Link>

      <motion.div variants={textVariant()} initial="hidden" animate="show" className="mt-6">
        {badge && (
          link ? (
            <a
              href={link}
              className="inline-block mb-3 text-[13px] font-mono font-semibold text-accent border border-accent/40 rounded-full px-3 py-1 hover:bg-accent/10"
            >
              {badge} &rarr;
            </a>
          ) : (
            <span className="inline-block mb-3 text-[13px] font-mono font-semibold text-accent border border-accent/40 rounded-full px-3 py-1">
              {badge}
            </span>
          )
        )}
        <h1 className={`${styles.sectionHeadText} text-[36px] md:text-[48px]`}>{name}</h1>
        <p className="text-secondary text-[16px] mt-2">
          {role}{role && organization ? " — " : ""}{organization}
        </p>
        {guide && <p className="text-secondary text-[14px] mt-1">Guide: {guide}</p>}
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

      {link && (
        <a
          href={link}
         
          rel="noopener noreferrer"
          className="mt-4 inline-block text-white font-mono font-semibold text-[14px] bg-tertiary border border-white/10 hover:border-accent hover:text-accent rounded-xl px-5 py-3 transition-colors"
        >
          {file_name || "Learn more"} &rarr;
        </a>
      )}

      <div className="mt-10 flex flex-col gap-10">
        {sections && sections.length > 0 ? (
          sections.map((section, i) => (
            <motion.div key={section.heading} variants={fadeIn("up", "spring", i * 0.2, 0.75)}>
              <h2 className="text-white font-display font-bold text-[24px]">{section.heading}</h2>
              <p className="mt-3 text-secondary text-[16px] leading-[28px]">{section.body}</p>
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

export default ResearchDetail;
