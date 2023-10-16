import Layout from "@/components/Layout";
import React from "react";
import Animatedtext from "@/components/AnimatedText";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/TerraCyborg.png";
import project2 from "../../public/images/projects/Travelley UK.png";
import project3 from "../../public/images/projects/GetSetTravelUs.png";
import project4 from "../../public/images/projects/BestCustomPackaging.png";
import HireMe from "@/styles/HireMe";
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-br-2xl relative rounded-3xl border border-solid border-dark shadow-2xl p-12 dark:bg-dark dark:border-light bg-gray-300
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 xs:mb-14 sm:mb-14 md:mb-14 lg:mb-14 xl:mb-14
    
    ">

      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light 
      rounded-br-3xl 
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-10 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light 
        sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          {/* <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />{" "}
          </Link> */}
          <Link
            href={link}
            target="_blank"
            className="ml-0 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:text-dark dark:bg-primaryDark dark:hover:text-dark dark:hover:bg-light 
            sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-gray-300 p-6 
    relative dark:bg-dark dark:border-light xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1rem]
      " />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          {/* <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link> */}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Awais Ashraf | Projects</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light md:pt-10 sm:pt-10 xs:pt-10">
        <Layout className="pt-16">
          <Animatedtext
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-0 lg:gap-x-8 md:px-0 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="TerraCyborg"
                summary="Terra Cyborg is a project with a mission to democratize AI-powered image generation. It aims to make the creative and innovative potential of artificial intelligence accessible to individuals from all walks of life."
                img={project1}
                link="https://terracyborg.com/"
                type="Featured Project"
                github="/"                      
              />
            </div>
            <div className="col-span-6 sm:col-span-12 xl:mr-6 xl:mb-10 lg:mr-6 lg:mb-10 md:mb-10 sm:!mr-0 xs:!mr-0
            ">
            {/* // xl:mr-4 lg:mr-4 md:mr-2  sm:mr-2
            // xl:mb-10 lg:mb-10 md:mb-10  sm:mb-10 */}
              <Project
                title="Travelley"
                summary=""
                img={project2}
                link="https://www.travelley.co.uk/"
                type="Featured Project"        
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 xl:mr-6 xl:mb-10 lg:mr-6 lg:mb-10 md:mb-10 sm:!mr-0 xs:!mr-0
            ">
              {/* xl:ml-4 lg:ml-4 md:ml-2  sm:ml-2 
             xl:mb-4 lg:mb-4 md:mb-2  sm:mb-2 */}

              <Project
                title="GetSetTravel"
                summary=""
                img={project3}      
                link="https://getsettravel.us/"
                type="Featured Project"        
                github="/"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="BestCustomPackaging"
                summary="BestCustomPackaging is an online platform dedicated to providing a captivating array of custom packaging solutions. This site is a hub for innovative designs and impeccable craftsmanship, offering businesses and individuals the opportunity to elevate their brand's packaging to a whole new level."
                img={project4}          
                link="https://bestcustompackaging.co.uk/"
                type="Featured Project"   
                github="/"
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12 xl:mr-6 xl:mb-10 lg:mr-6 lg:mb-10 md:mb-10 sm:!mr-0 xs:!mr-0">
              <Project
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency."
                img={project1}
                link="/"
                type="Featured Project" 
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 xl:mr-6 xl:mb-10 lg:mr-6 lg:mb-10 md:mb-10 sm:!mr-0 xs:!mr-0">
              <Project
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency."
                img={project1}
                link="/"
                type="Featured Project"
                github="/"
              />
            </div> */}
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
};

export default Projects;








// 5:35:58 / 5:50:43  [Wed, Oct 4]