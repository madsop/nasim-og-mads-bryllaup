/**
 * @file Footer.js
 * @description Footer of the website
 * @author Emanuele Sgroi
 * @date 19 October 2024
 */

import React from "react";
import { IoIosHeart } from "react-icons/io";
import translations from "@/utils/translations";

const Footer = ({ language }) => {
  const { footer_her, footer_him } = translations[language].couple;
  const { text_1, text_2, text_3 } = translations[language].footer;
  return (
    <footer className="absolute bottom-0 w-full text-white text-center z-20 flex max-sm:flex-col-reverse justify-center px-4 gap-1">
      <p translate="no" className="text-xs md:text-base tracking-wide">
        {text_1}
      <span className="text-gold font-semibold">{footer_him}</span>
        <IoIosHeart className="inline text-red-500 mx-1 h-5 w-5" />{text_2}
        <span className="text-gold font-semibold">{footer_her}</span>
      </p>
      <p translate="no" className="text-xs md:text-base tracking-wide">
        <span className="text-white max-sm:hidden">-</span>{" "}
        <span className="text-white">
          {text_3}{" "}
          <a
            href="https://www.emanuelesgroi.com/portfolio/my-wedding-invitation-website"
            target="_blank"
            rel="noreferrer"
            className="text-gold font-semibold"
          >
            Emanuele Sgroi
          </a>
        </span>{" "}
      </p>
    </footer>
  );
};

export default Footer;
