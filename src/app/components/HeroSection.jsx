"use client";
import React from 'react';
import Image from 'next/image';
import profile from './profile.png'; // Ensure this path is correct
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
  return (
    <section className="overflow-hidden"> {/* Prevent content overflow */}
      <div className="grid grid-cols-1 sm:grid-cols-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Center and contain the content */}
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1
            className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"
            style={{ minHeight: '180px' }} // Adjust the minHeight based on the tallest content
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m
            </span>
            <br /> {/* This will move the repeating elements to the next line */}
            <TypeAnimation
              sequence={[
                'Eshaan Oozher Kapooswalla.',
                1000,
                'A Full-Stack Web Developer.',
                1000,
                'A Full-Stack Mobile App Developer.',
                1000,
                'an AI & ML enthusiast.',
                1000,
              ]}
              wrapper="span"
              speed={40} // Smoother animation speed
              repeat={Infinity}
              className="text-white" // Set the color of the repeating text to white
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            I&apos;m Eshaan, a Software Engineering (co-op) student at The Lassonde School Of Engineering, York University set to graduate in June 2027, based in Toronto, actively seeking 2025 summer internship opportunities in Canada and The United States of America. You can explore all my projects on GitHub and connect with me on LinkedIn to discuss potential collaborations, internship opportunities, mentorship or just to chat!
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <a href="https://www.linkedin.com/in/eshaankapooswalla" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-blue-500 text-white border-4 border-transparent hover:bg-black hover:text-white">
                My LinkedIn
              </button>
            </a>

            <a href="https://github.com/eshaan-kapooswalla" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mt-4 sm:mt-0 bg-green-400 text-white border-4 border-transparent hover:bg-black hover:text-white">
                My GitHub
              </button>
            </a>

            <a href="https://drive.google.com/file/d/1fxX6M1TbvnqFJxneiK3ygIBgE0LNNA5g/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mt-4 sm:mt-0 bg-gradient-to-br from-red-500 via-pink-500 to-purple-500 text-white hover:text-black hover:bg-black border-4 border-transparent hover:border-gradient-to-br hover:from-red-500 hover:via-pink-500 hover:to-purple-500 hover:via-red-500">
                My Resume
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-8 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={profile}
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};