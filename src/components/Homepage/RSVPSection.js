/**
 * @file RSVPSection.js
 * @description This component manages the RSVP section of the wedding website.
 * @author Emanuele Sgroi
 * @date 19 October 2024
 */

import React, { useRef } from "react";
import images from "@/utils/imagesImport";
import { motion, useScroll, useTransform } from "framer-motion";
import translations from "@/utils/translations";
import Image from "next/image";

const RSVPSection = ({ language }) => {
  // Destructure translation strings
  const {
    top_title,
    title,
    description_1,
    description_2,
  } = translations[language].rsvp_section;

  const schemaURL = process.env.NEXT_PUBLIC_RSVP;

  // Variants for framer motion animation
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.2,
      },
    },
  };
  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const ref = useRef(null); // reference for framer motion animation

  // Use useScroll with a ref to the image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effects for collage image for mobile
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  return (
    <section
      id="rsvp-section"
      className="relative flex flex-col w-full bg-cream"
    >
      {/* Top section */}
      <div
        className="max-md:hidden relative w-full h-[500px] brightness-95 bg-cover bg-center bg-no-repeat md:bg-fixed flex justify-center items-center overflow-hidden"
        style={{
          backgroundImage: `url(${images.collage.src})`,
        }}
      >
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.4 }}
          translate="no"
          className="absolute left-1/2 transform -translate-x-1/2 z-20 transition-transform text-9xl text-gold"
        >
          {top_title.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <div className="overlay z-0"></div>
      </div>

      {/* Top section - Mobile */}
      <div className="md:hidden relative w-full h-[500px] overflow-hidden">
        <motion.div
          ref={ref}
          className="absolute w-full h-full"
          style={{ scale }}
        >
          <Image
            src={images.collage}
            alt="Collage"
            width={500}
            height={700}
            quality={100}
            className="absolute top-0 left-0 w-full h-full object-cover transform "
          />
        </motion.div>

        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.4 }}
          translate="no"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-transform text-7xl text-gold"
        >
          {top_title.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <div className="overlay z-0"></div>
      </div>

      {/* main section */}
      <div className="w-full py-12 px-4 sm:px-6 xl:px-12 bg-cream flex flex-col lg:flex-row justify-center gap-4 lg:gap-12 xl:gap-44">
          <div className="flex flex-col items-start relative w-full max-w-full lg:max-w-lg text-left gap-0 lg:gap-6">
            <div className="flex flex-col items-start max-sm:w-full max-sm:items-center">
              <h3 translate="no" className=" font-bold z-20 ml-6 sm:ml-16">
                {title.main}
              </h3>
              <h3
                translate="no"
                className="text-gold text-6xl sm:text-8xl alex-brush z-10 transform font-light -mt-10"
              >
                {title.sub}
              </h3>
            </div>
            <p translate="no" className="text-left">
              <a
                  href={schemaURL}
                  target="_blank"
                  className="underline underline-offset-4 decoration-1"
              >
                Fyll ut skjemaet
              </a>
            </p>
            <p translate="no" className="text-left">
              {description_1.map((item, index) =>
                typeof item === "string" ? (
                  item
                ) : (
                  <span key={index} className="font-bold">
                    {item.text}
                  </span>
                )
              )}
            </p>
            <p translate="no" className="text-left">
              {description_2}
            </p>
          </div>
      </div>
    </section>
  );
};

export default RSVPSection;
