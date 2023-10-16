import Animatedtext from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import profilePic from "../../public/images/profile/Portfolio-About.webp";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import HireMe from "@/styles/HireMe";
import TransitionEffect from "@/components/TransitionEffect";


const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if (isInView){
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }
    })

  },[springValue, value])


  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Ateeq Ahmad | About</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light md:pt-10 sm:pt-10 xs:pt-10">
        <Layout className="pt-16">
          <Animatedtext 
          text="Passion Fuels Purpose!" 
          className="mb-16 dark:text-light lg:!text-7x md:!text-5xl sm:!text-4xl xs:!text-4xl sm:mb-8" />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:!col-span-8 ">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>

              <p className="font-medium xl:text-justify">
              Hello, I am Ateeq Ahmad, a Python Django full-stack developer with a strong commitment to crafting functional and user-centric web applications. With several years of expertise in the field, I continually seek creative and innovative approaches to translate visions of my clients into reality.
              </p>

              <p className=" my-4 font-medium xl:text-justify">
              I firmly believe that development goes beyond mere functionality – its about problem-solving and crafting seamless, user-friendly experiences.
              </p>

              <p className="font-medium xl:text-justify">
              Be it a web application, mobile app, or any digital project, I bring my unwavering dedication to technical excellence and user-centered design philosophy to each undertaking. I eagerly anticipate the chance to apply my skills and enthusiasm to your upcoming project as a Python Django full-stack developer.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:!col-span-8 sm:!col-span-8 xs:!col-span-8  md:mx-auto">

              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Awais Ashraf"
                className="w-full h-auto rounded-2xl "
                priority
                sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:!items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:!items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:!items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={12} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Months of Experience
                </h2>
              </div>
            </div>
          </div>
        <Skills />
        <Experience />
        <Education />
        </Layout>
        <HireMe />
      </main>
    </>
  );
};

export default about;
