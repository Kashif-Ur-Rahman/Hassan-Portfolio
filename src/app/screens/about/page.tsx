"use client";
import React from "react";
import Image from "next/image";

export default function About() {
    return (
        <div className="flex min-h-screen ">
            <h1 className="text-5xl font-bold mt-44 ml-[496px] text-white">Hassan Azhar
            </h1>
            <div className=" absolute mt-72 ml-[500px]">
                <p className="text-lg sm:mb-20 opacity-80">A software engineer with 6 year of professional experience with international <br />team building rebost scaleable and maintainable web application.
                </p>
                <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-red-700">How my Journey started</h2>

                <p className="mt-10 opacity-80">As a software engineer, my journey has been one of continuous learning and growth.
                    <br />
                    I pursued my passion for technology and programming by earning a degree in Computer Science, <br />which laid the foundation for my career.</p>

                <p className="mt-10 opacity-80">My first job as a junior software engineer at a startup exposed me to a range of technologies and taught <br />me to collaborate effectively with cross-functional teams. Since then, I have gained expertise in diverse <br />areas of software engineering, working with clients of varying sizes and across different industries.
                </p>

                <p className="mt-10 opacity-80">Today, as a seasoned software engineer, I am passionate about mentoring the next generation of developers <br /> and contributing to the wider tech community. I strive to give back and inspire others to pursue their passions <br /> in software engineering, as I continue to embrace new challenges and opportunities to innovate and make a <br />positive impact in the world.</p>

                <Image
                    src="/Hassan-Azhar.jpeg"
                    alt=""
                    width={370}
                    height={160}
                    className="object-cover transition grayscale hover:grayscale-0 aspect-square rounded-2xl bg-zinc-100 dark:bg-zinc-800 ml-[796px] -mt-[620px]"
                />
            </div>
        </div>
    );
}
