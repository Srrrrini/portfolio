import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { life } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1c1c1e",
        color: "#fff",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #1c1c1e" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"

          />
        </div>
      }
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        variants={fadeIn("up", "tween", 0, 0.5)}
      >
        <div>
          <div><h3 className="text-white text-[24px] font-bold">{experience.title}</h3><h5>{experience.company_name}</h5></div>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.location}
          </p>
        </div>
        {experience.points.length > 0 && (
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  )}
  {experience.link && (
    <a
      href={experience.link}
      className="mt-4 inline-block text-white font-mono font-semibold text-[13px] hover:text-accent"
    >
      {experience.linkLabel || "Learn more"} &rarr;
    </a>
  )}
      </motion.div>

    </VerticalTimelineElement>
  );
};

const Life = () => {
  return (
    <div id="life">
      {/* <motion.div variants={textVariant()}> */}
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
      {/* </motion.div> */}

      <div className="mt-20 flex flex-col">
        <VerticalTimeline animate={false}>
          {life.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Life, "work");
