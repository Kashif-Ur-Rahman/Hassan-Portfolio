"use client";

import Link from "next/link";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Earth from "../../public/Earth"


export default function Home() {
  return (
    <>


      <div className="w-screen h-screen text-white flex flex-col md:flex-row ">
        {/* Left Section....⬇️ */}
        <div className=" p-5 md:ml-20 md:mt-20 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-serif">Hassan Azhar</h1>
          <p className="mt-5 text-lg md:text-xl">
            . Software Engineer <span className="blink">|</span>
          </p>

          {/* Download Resume Link...⬇️ */}
          <div className="mt-10 md:mt-20">
            <Link href="/Hassan_Azhar_Resume.pdf" download target="_blank">
              <h2 className="text-lg md:text-xl font-mono hover:text-gray-400">
                Download Resume/CV
              </h2>
            </Link>
          </div>

          {/* GitHub Link...⬇️ */}
          <div className="mt-5">
            <Link href="https://github.com/hassanazharkhan" target="_blank">
              <h2 className="font-mono text-lg md:text-xl hover:text-gray-400">
                GitHub
              </h2>
            </Link>
          </div>

          {/* LinkedIn Link...⬇️ */}
          <div className="mt-5">
            <Link
              href="https://www.linkedin.com/in/hassan-azhar-633b7434/"
              target="_blank"
            >
              <h2 className="font-mono text-lg md:text-xl hover:text-gray-400">
                LinkedIn
              </h2>
            </Link>
          </div>

          {/* Here's the Description...⬇️ */}
          <h2 className="mt-10 md:mt-16 font-mono text-base md:text-lg">
            I help companies to <br />
            2x their achievement <br />
            rates by developing <br />
            quality software with <br />
            appealing user interfaces
          </h2>
        </div>

        {/* Vertical Line...⬇️ */}
        <div className="hidden md:block absolute left-5 top-0 h-full border-l border-white"></div>

        <Canvas>
          <ambientLight intensity={1.5} />
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      </div>

    </>
  );
}
