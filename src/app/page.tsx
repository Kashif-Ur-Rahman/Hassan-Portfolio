"use client";

import Link from "next/link";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Earth from "../../public/Earth"

export default function Home() {
  return (
    <>
      {/* <Canvas>
        <ambientLight intensity={1.5} />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas> */}

      <div className="w-screen h-screen bg-black text-white flex relative">

        <div className="ml-20 mt-20">
          <h1 className="text-5xl font-serif">Hassan Azhar</h1>
          <p className="mt-5">
            . Software engineer <span className="blink">|</span>
          </p>

          <div className="mt-20">
            <Link
              href="/Hassan_Azhar_Resume.pdf"
              download
              target={"_blank"}  >
              <h2 className=" text-xl font-mono">Download Resume/CV</h2>
            </Link>
          </div>

          <div className="mt-5">
            <Link
              href="https://github.com/hassanazharkhan"
              target={"_blank"}  >
              <h2 className="font-mono text-xl">GitHub</h2>
            </Link>
          </div>

          <div className="mt-5">
            <Link
              href="https://www.linkedin.com/in/hassan-azhar-633b7434/"
              target={"_blank"}  >
              <h2 className="font-mono text-xl">LinkedIn</h2>
            </Link>
          </div>
          <h2 className="mt-16 font-mono">I help companies to <br />2x their achievement <br /> rates by developing <br /> quality software with <br /> appealing user interfaces</h2>
        </div>

        <div className="absolute left-5 top-0 h-full border-l border-white"></div>
        <h2></h2>
      </div>
    </>
  );
}
