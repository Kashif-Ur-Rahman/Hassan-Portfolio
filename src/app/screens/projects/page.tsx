import React from "react";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 mt-32 mb-32">
      {/* Title */}
      <h1 className="text-6xl font-bold text-center mb-8">
        Innovating for a Better <br /> Tomorrow: Projects and <br /> Contributions That Make <br /> a Difference.
      </h1>

      {/* Description */}
      <p className="text-center text-lg text-gray-700 mb-16">
        I create engineering projects with the goal of making a positive impact on the world.
        <br />
        My work includes innovative solutions to complex problems and sustainable technologies.
        <br />
        I hope to inspire others to join me in making meaningful change through engineering.
      </p>
      {/* Boxes Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Box 1 */}
        <div className="p-6 shadow-lg rounded-lg flex items-start gap-4 hover:bg-gray-100 transition duration-300 hover:text-black">
          {/* Image */}
          <img
            src="/Data-Channel.jpeg"
            alt="Project 1"
            className="h-12 w-12 rounded-md"
          />
          {/* Content */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Data Channel</h2>
            <p className="text-gray-600 mb-4">
              Developed a data processing application that provided flexibility to other developers to easily write their data processing jobs using our SDK, CLI, and services...
            </p>
            <Link href="https://github.com/hassanazharkhan" target="_blank" passHref>
              <div className="flex items-center text-teal-500 hover:text-teal-400 cursor-pointer">
                <FaLink className="mr-2" />
                GitHub
              </div>
            </Link>
          </div>
        </div>

        {/* Box 2 */}
        <div className="p-6 shadow-lg rounded-lg flex items-start gap-4 hover:bg-gray-100 transition duration-300 hover:text-black">
          {/* Image */}
          <img
            src="/Medical-Record.avif"
            alt="Project 2"
            className="h-12 w-12 rounded-md"
          />
          {/* Content */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Medical Record</h2>
            <p className="text-gray-600 mb-4">
              The Project was running fully serverless on AWS, utilizing services such as Lambda, API Gateway, DynamoDB, and S3 for a scalable and cost-effective solution...
            </p>
            <Link href="https://github.com/hassanazharkhan" target="_blank" passHref>
              <div className="flex items-center text-teal-500 hover:text-teal-400 cursor-pointer">
                <FaLink className="mr-2" />
                GitHub
              </div>
            </Link>
          </div>
        </div>

        {/* Box 3 */}
        <div className="p-6 shadow-lg rounded-lg flex items-start gap-4 hover:bg-gray-100 transition duration-300 hover:text-black">
          {/* Image */}
          <img
            src="/AWS.png"
            alt="Project 3"
            className="h-12 w-12 rounded-md"
          />
          {/* Content */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">AWS-CDK</h2>
            <p className="text-gray-600 mb-4">
              AWS CDK is a framework that simplifies cloud infrastructure management through defining infrastructure in code using familiar programming languages...
            </p>
            <Link href="https://github.com/hassanazharkhan" target="_blank" passHref>
              <div className="flex items-center text-teal-500 hover:text-teal-400 cursor-pointer">
                <FaLink className="mr-2" />
                GitHub
              </div>
            </Link>
          </div>
        </div>

        {/* Additional Boxes Section */}
        {/* Box 4 */}
        <div className="p-6 shadow-lg rounded-lg flex items-start gap-4 hover:bg-gray-100 transition duration-300 hover:text-black">
          {/* Image */}
          <img
            src="/DevOps.png"
            alt="Project 4"
            className="h-12 w-12 rounded-md"
          />
          {/* Content */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">DevOps Pipeline</h2>
            <p className="text-gray-600 mb-4">
              Created CI/CD pipelines to streamline the development and deployment process for scalable cloud-based applications...
            </p>
            <Link href="https://github.com/hassanazharkhan" target="_blank" passHref>
              <div className="flex items-center text-teal-500 hover:text-teal-400 cursor-pointer">
                <FaLink className="mr-2" />
                GitHub
              </div>
            </Link>
          </div>
        </div>

        {/* Box 5 */}
        <div className="p-6 shadow-lg rounded-lg flex items-start gap-4 hover:bg-gray-100 transition duration-300 hover:text-black">
          {/* Image */}
          <img
            src="/projen.svg"
            alt="Project 5"
            className="h-12 w-12 rounded-md"
          />
          {/* Content */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">projen</h2>
            <p className="text-gray-600 mb-4">
              Projen is a popular open-source tool used for defining and maintaining cloud infrastructure as code. It has gained popularity among developers and DevOps teams due to its...
            </p>
            <Link href="https://github.com/hassanazharkhan" target="_blank" passHref>
              <div className="flex items-center text-teal-500 hover:text-teal-400 cursor-pointer">
                <FaLink className="mr-2" />
                GitHub
              </div>
            </Link>
          </div>
        </div>

        {/* Box 6 */}
        <div className="p-6 shadow-lg rounded-lg flex items-start gap-4 hover:bg-gray-100 transition duration-300 hover:text-black">
          {/* Image */}
          <img
            src="/Lambda.png"
            alt="Project 6"
            className="h-12 w-12 rounded-md"
          />
          {/* Content */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Lambda API</h2>
            <p className="text-gray-600 mb-4">
              LambdaAPI is built on top of Amazon Web Services (AWS) Lambda, which is a popular serverless computing platform that has gained traction among developers in recent...
            </p>
            <Link href="https://github.com/hassanazharkhan" target="_blank" passHref>
              <div className="flex items-center text-teal-500 hover:text-teal-400 cursor-pointer">
                <FaLink className="mr-2" />
                GitHub
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
