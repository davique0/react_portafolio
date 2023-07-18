import Head from "next/head"
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import Image from "next/image"
import deved from '../../public/dev-ed-wave.png'


export default function Home() {
  return (
   <main className="bg-white px-10">
    <section className="min-h-screen">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons"> Developed by Mario</h1>
        <ul className="flex items-center">
          <li className="cursor-pointer"><BsFillMoonStarsFill /></li>
          <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="">Resume</a></li>
        </ul>
      </nav>
      <div className="text-center p-10 ">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">Mario D. Gutierrez</h2>
        <h3 className="text-2xl py-2">Full Stack Web Developer</h3>
        <p className="text-md py-5 leading-8 text-gray-800">
          Junior developer focused on problem solving and process optimization, looking to learn along exploring and innovating focused companies
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600"> 
        <a href="https://github.com/davique0"><AiFillTwitterCircle /></a>
        <a href="https://www.linkedin.com/in/mario-d-gutierrez/"><AiFillLinkedin /></a>
        <a href="https://twitter.com/davique0"><AiFillGithub/></a>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
        <Image alt="Mario Pic Profile" src={deved} layout="fill" objectFit="cover"/>
      </div>
    </section>
    <section>
      <div>
        <h3 className="text-3xl py-1">Services I offer</h3>
        <p className="text-md py-2 leading-8 text-gray-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius ipsam exercitationem? Expedita animi sint molestiae repellendus ab placeat a molestias est doloremque esse qui, vitae veritatis quasi atque maxime! <span className="text-teal-500"> agencies</span> consulted for <span className="text-teal-500"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi modi placeat similique minima enim magni eligendi.</span>
        </p>
      </div>
    </section>
   </main>
  )
}
