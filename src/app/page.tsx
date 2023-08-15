'use client'
import { useState, useEffect } from "react"
import 'flowbite'
import { initFlowbite } from "flowbite"
import { BsFillMoonStarsFill, BsFillBrightnessHighFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import Image from "next/image"
import deved from '../../public/dev-mario.png'
import design from '../../public/design.png';
import code from '../../public/code.png';
import consulting from '../../public/consulting.png';
import { webData } from '@/shared/Data'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 duration-700 dark:bg-gray-900 dark:duration-700">
        <section className="min-h-fit mb-12">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-gray-600"> Developed by Mario</h1>
            <ul className="flex items-center">
              <li className="cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
                {!darkMode ? <BsFillMoonStarsFill /> : <BsFillBrightnessHighFill className="text-gray-500" />}
              </li>
              <li><a target="_blank" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="https://resume.creddle.io/resume/9gy20sjmykz">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Mario D. Gutierrez</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-600">Junior Full Stack Web Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-400 md:text-xl max-w-xl mx-auto">
              Junior developer focused on problem solving and process optimization, looking to learn along exploring and innovating focused companies
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a target="_blank" href="https://twitter.com/davique0"><AiFillTwitterCircle /></a>
            <a target="_blank" href="https://www.linkedin.com/in/mario-d-gutierrez/"><AiFillLinkedin /></a>
            <a target="_blank" href="https://github.com/davique0"><AiFillGithub /></a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image alt="Mario Pic Profile" src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-300">My Story</h3>
            <p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-400">
              With an engineering background, life has taking me to the customer services and sales industry where I have thrived for many years, where I have learned how to efectively communicate with other and educating about new technologies like Solar Energy and automation but my real passion is creating and  building  stuff.</p>
            <p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-400">
              I love programming, coding, finding solutions to puzzles and get that excitement when something works, when you have the answer and everything makes sense, when you unlock a new achievement and deliver the solution that everybody was waiting for, I love that and even more, for some reason that goes beyond my understanding, I love to explain what I did and help people understand the process.
            </p>
          </div>
          <div className="lg:flex lg:justify-evenly gap-10">
            <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10">
              <Image alt="" src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">Front End</h3>
              <p className="py-2 dark:text-gray-400">Front End Libraries and frameworks</p>
              <h4 className="py-4 text-teal-600">Some of them</h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">React</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">NodeJS</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">NextJS</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">TailwindCSS</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">and more...</p>
            </div>
            <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10">
              <Image alt="" src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">Back End</h3>
              <p className="py-2 dark:text-gray-400">Back End libraries and frameworks</p>
              <h4 className="py-4 text-teal-600">Some of them</h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">Axios</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Prisma</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">SQL</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">ExpressJS</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">and more...</p>
            </div>
            <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10">
              <Image alt="" src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-300">Transferable Skills</h3>
              <p className="py-2 dark:text-gray-400">Other very important skills that you might find usefull</p>
              <h4 className="py-4 text-teal-600">Some of them</h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">Quick Learning</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Highly Sociable</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Puzzle Solving</p>

              <p className="text-gray-800 py-1 dark:text-gray-400">Killer dad jokes</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">and more...</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-300">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-400">

            </p>
            <p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-400">
              I started my journey as a developer with hands on deck, working on projects as I was learning, I believe it is the only way to learn, experimenting, making mistakes and finding the solutions, here are some of my most recent projects, feel free to click on them to check its code on GitHub.
            </p>
          </div>
          {/* Carousel */}
          <div className="h-auto mx-auto flex justify-center items-center">
            <div className="carousel w-5/6 h-auto mx-auto my-10 py-5">
              {webData.map((web) => (
                <div id={`slide${web.id}`} className="carousel-item relative w-full">
                  <div className="w-full text-center mt-[-10px] gap-1 absolute">
                    {web.url !== "" && (

                      <a target="_blank" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mx-auto hover:shadow-md hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 hover:shadow-slate-500" href={`${web.url}`}>Live</a>
                    )}

                    <a target="_blank" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:shadow-md hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 hover:shadow-slate-500" href={`${web.gitHub}`}>GitHub</a>
                  </div>
                  <Image id={`${web.id}`} alt={`${web.title}`} src={web.photo} className="w-full rounded-xl" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide${web.id - 1}`} className="btn btn-circle">❮</a>
                    <a href={`#slide${web.id + 1}`} className="btn btn-circle">❯</a>
                  </div>
                </div>))}

            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
