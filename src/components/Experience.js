import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcons";

const Details = ({ position, company, companyLink, time, address, work }) => {

    const ref = useRef(null);

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">

    <LiIcon  reference={ref}/>

      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYprogress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })

  return (
    <div className="my-64 md:my-20 xs:my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-5xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYprogress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] sm:left-[20px] xs:left-[18px]"
        />

        <ul className="w-full flex flex-col items-end justify-between ml-4 xs:ml-2">
          <Details
            position="Full Stack Web Developer"
            company="Wilsol Tech"
            companyLink="https://www.wilsol.tech"
            time="2022-Present"
            address="Johar Town Phase 2, LHR."
            work="As a Python Django full-stack developer at Wilsol Tech, I've been at the forefront of developing comprehensive web applications that encompass both front-end and back-end. Utilizing Python, Django, and associated technologies, I've been a driving force behind creating versatile and robust digital solutions that not only meet but exceed client expectations. My focus on coding excellence, security, and a seamless user experience is a testament to my commitment to delivering top-tier web applications."
          />

          <Details
            position="Full Stack Web Developer"
            company="Forward Sols"
            time="2021-2022"
            address="Ferozpur road, LHR."
            work="As a Full stack developer at Forward Sols, I excel in crafting visually engaging and intuitive WordPress websites. My role encompasses web designing, and implementing those designs for better user experience, by keeping in mind how user see and use my product."
          />

          <Details
            position="Freelancer"
            company="Fiverr"
            companyLink="https://www.fiverr.com"
            time="2020-present"
            work="I'm currently working as a freelancer as well, giving website modification, creation and debugging services, and website to app conversions , Logo Design ,UI/UX design and many services like that , and i have hands-on experience in these fields as i keep myself in touch with latest marketing trends"
          />

          
        </ul>
      </div>
    </div>
  );
};

export default Experience;
