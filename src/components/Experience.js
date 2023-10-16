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
            time="2023-Present"
            address="Sheranwala Complex Wapda Town, LHR."
            work="As a Python Django full-stack developer at Wilsol Tech, I've been at the forefront of developing comprehensive web applications that encompass both front-end and back-end. Utilizing Python, Django, and associated technologies, I've been a driving force behind creating versatile and robust digital solutions that not only meet but exceed client expectations. My focus on coding excellence, security, and a seamless user experience is a testament to my commitment to delivering top-tier web applications."
          />

          <Details
            position="WordPress Developer"
            company="Wilsol Tech"
            companyLink="https://www.wilsol.tech"
            time="2022-2023"
            address="Sheranwala Complex Wapda Town, LHR."
            work="As a WordPress developer at Wilsol Tech, I excel in crafting visually engaging and intuitive WordPress websites. My role encompasses theme customization, front-end development, and the seamless integration of plugins to elevate performance and user experience. My contributions consistently enhance our clients' online presence and deliver impactful results."
          />

          <Details
            position="Assistant Accountant"
            company="Lal Qila Restaurant, LHR"
            companyLink="https://www.lalqila.com"
            time="2022-2022"
            address="As an Assistant Accountant, I played a pivotal role in overseeing financial transactions and ensuring the seamless financial operation of the organization. My duties encompassed precise management of invoices, processing payments, and delivering top-notch financial services."
          />

          
        </ul>
      </div>
    </div>
  );
};

export default Experience;
