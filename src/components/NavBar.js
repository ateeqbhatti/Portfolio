import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  InstagramIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useState } from "react";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }
        dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[1px] inline-block  bg-light absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }
        dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col justify-center items-center hidden lg:flex pt-3 absolute left-10 right-auto top-8"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4 " />
          <CustomLink href="/about" title="About" className="mx-4 " />
          <CustomLink href="/projects" title="Projects" className="mx-4 " />
          {/* <CustomLink
              href="/articles"
              title="Articles"
              className="ml-4 "
              
            /> */}
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com/Ateeeeq2"     
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-7 mr-3 dark:fill-light"
          >
            <TwitterIcon />
          </motion.a>
          {/* Twitter */}

          <motion.a
            href="https://github.com/ateeqbhatti"      
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-7 mx-3"
          >
            <GithubIcon />
          </motion.a>
          {/* GitHub */}

          <motion.a
            href="https://www.linkedin.com/in/ateeq-bhatti-b04aa3152?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"    
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          {/* Linked In */}

          <motion.a
            href="https://instagram.com/ateeeeeeeeeeeq?igshid=MzNlNGNkZWQ4Mg=="   
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mx-3 " 
          >
            <InstagramIcon />
          </motion.a>
          {/* Instagram */}

          <motion.a
            href="https://www.facebook.com/ateeq.bhatti.71?mibextid=2JQ9oc"        
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 ml-3 mr-3"
          >
            <FacebookIcon />
          </motion.a>
          {/* Facebook */}

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
            `}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap">
            <motion.a
              href="https://twitter.com/Ateeeeq2"        
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              
              className="w-7 mr-3 sm:fill-light sm:dark:fill-dark sm:mr-0"
            >
              
              <TwitterIcon />
            </motion.a>
            {/* Twitter */}

            <motion.a
              href="https://github.com/ateeqbhatti"         
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark  sm:mr-1"
            >
              <GithubIcon />
            </motion.a>
            {/* GitHub */}

            <motion.a
              href="https://www.linkedin.com/in/ateeq-bhatti-b04aa3152?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"   
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:-mr-1 dark:sm:mr-1" 
            >
              <LinkedInIcon />
            </motion.a>
            {/* Linked In */}

            <motion.a
              href="https://instagram.com/ateeeeeeeeeeeq?igshid=MzNlNGNkZWQ4Mg=="   
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-[25px] mx-3 sm:w-[40px] sm:dark:w-[25px] dark:bg-dark dark:rounded-lg sm:-mr-2 dark:sm:mr-0" 
            >
              <InstagramIcon />
            </motion.a>
            {/* Instagram */}

            <motion.a
            href="https://www.facebook.com/ateeq.bhatti.71?mibextid=2JQ9oc"   
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mx-3 sm:mr-1"
          >
            <FacebookIcon />
          </motion.a>
          {/* Facebook */}
          

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
            `}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>{" "}
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-5 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;


