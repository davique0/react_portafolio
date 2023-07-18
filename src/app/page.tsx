import Head from "next/head"
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from "react-icons/ai"



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
      <div>
        <h2>Mario D. Gutierrez AKA davique</h2>
        <h3>Full Stack Web Developer</h3>
        <p>
          Junior developer focused on problem solving and process optimization, looking to learn along exploring and innovating focused companies in Vancouver, BC
        </p>
      </div>
      <div>
        <a href="https://github.com/davique0"><AiFillTwitterCircle /></a>
        <a href="https://www.linkedin.com/in/mario-d-gutierrez/"><AiFillLinkedin /></a>
        <a href="https://twitter.com/davique0"><AiFillGithub/></a>
      </div>
    </section>
   </main>
  )
}
