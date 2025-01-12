import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg md:p-0 lg:p-6 mt-12 md:m-10 lg:m-20">
      <div className="flex items-center animation-fadeIn">
        <Image
          className="w-20 h-20 rounded-full mr-4 object-cover border-2 border-blue-500"
          src="/images/image (1).jpeg"
          alt="Author Image"
          width={200}
          height={200}
        />
        <div>
          <h3 className="text-xl font-bold">Engr. Muhammad Adnan</h3>
          <p className="text-slate-500">
            Mechatronics Engineer | Senior Field Services Engineer |
            Instrumentation & Automation Specialist |<br /> AI & Robotics
            Engineering Enthusiast | Spectroscopy & Chromatography Expert
          </p>
        </div>
      </div>
      <p className="mt-4 text-black leading-relaxed p-3">
        I am a Mechatronics Engineer with a strong academic foundation and a
        passion for innovation and technology. Graduating with 3rd position in
        my Bachelor&apos;s degree in Mechatronics Engineering from Mehran
        University of Engineering and Technology, Jamshoro, I have consistently
        demonstrated a commitment to excellence and growth. In addition to my
        engineering background, I am an entrepreneur and the founder, Managing
        Director, and CEO of DevToDeploy, an IT services-based company.
        DevToDeploy provides a wide range of solutions, including web and app
        development, social media marketing, software development (CMS systems),
        and AI framework integration. My entrepreneurial journey highlights my
        leadership, project management skills, and ability to deliver impactful
        results for clients. I possess a strong technical skill set that
        includes HTML5, CSS3, Bootstrap, JavaScript (including advanced
        JavaScript), Firebase, and Python. Currently, I am expanding my
        expertise by learning user experiences with Figma, React, and Next.js to
        stay ahead in the ever-evolving tech landscape. My long-term aspiration
        is to excel in cloud-applied generative AI and robotics engineering,
        leveraging my knowledge and skills to solve complex challenges and drive
        innovation. Passionate about staying at the forefront of technological
        advancements, I am dedicated to making meaningful contributions to the
        engineering and IT industries.
      </p>
      <div className="flex justify-center gap-4 mt-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/muhammadadnan01/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-700 transition duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/MuhammadAdnan1998"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-800 transition duration-300"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  );
}
