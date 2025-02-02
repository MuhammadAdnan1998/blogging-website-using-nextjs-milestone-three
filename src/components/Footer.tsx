import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-20 px-5 sm:px-10 lg:px-20">
      {/* Footer Grid */}
      <div className="flex flex-col sm:grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-10 sm:gap-14 my-10 text-sm">
        {/* Logo and Description */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <img
            src="/images/1.png"
            width={30}
            height={30}
            className="w-24 sm:w-32 md:w-48" // Responsive width
            alt="logo"
          />
          <p className="text-gray-600 leading-relaxed text-center sm:text-left">
            Welcome to Tech Canvas Blog  your go-to source for the latest
            in web development, AI, cybersecurity, and gadget reviews. Whether
            you're a tech pro or an enthusiast, explore insightful articles,
            tutorials, and analyses to stay ahead in the ever-evolving tech
            world. 🚀
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-lg font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li className="hover:text-indigo-500 cursor-pointer">Home</li>
            <li className="hover:text-indigo-500 cursor-pointer">About</li>
            <li className="hover:text-indigo-500 cursor-pointer">Services</li>
            <li className="hover:text-indigo-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <p className="text-lg font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li>+92 304 3712 471</li>
            <li>
              <a
                href="mailto:adnanshaikh84482@gmail.com"
                className="hover:text-indigo-500"
              >
                info@saylaniwelfare.com
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/SaylaniWelfareInternationalTrust/"
                className="hover:text-indigo-500"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/"
                className="hover:text-indigo-500"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div>
        <hr className="border-gray-300" />
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="py-5 text-sm text-left text-gray-500 w-full sm:w-auto">
            © Copyright 2024 Canvas Blog - All Rights Reserved.
          </p>
          <p className="py-5 text-sm text-right text-gray-500 w-full sm:w-auto">
            Developed by Engr. Muhammad Adnan
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
