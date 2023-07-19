import Head from "next/head"
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import Image from "next/image"
import deved from '../../public/dev-ed-wave.png'
import design from '../../public/design.png';
import code from '../../public/code.png';
import consulting from '../../public/consulting.png';
import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';
import web3 from '../../public/web3.png';
import web4 from '../../public/web4.png';
import web5 from '../../public/web5.png';
import web6 from '../../public/web6.png';


export default function Home() {
  return (
    <main className="bg-white px-10 md:px-20 lg:px-40">
      <section className="min-h-fit mb-12">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons"> Developed by Mario</h1>
          <ul className="flex items-center">
            <li className="cursor-pointer"><BsFillMoonStarsFill /></li>
            <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="">Resume</a></li>
          </ul>
        </nav>
        <div className="text-center p-10 ">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Mario D. Gutierrez</h2>
          <h3 className="text-2xl py-2 md:text-3xl">Full Stack Web Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
            Junior developer focused on problem solving and process optimization, looking to learn along exploring and innovating focused companies
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <a href="https://github.com/davique0"><AiFillTwitterCircle /></a>
          <a href="https://www.linkedin.com/in/mario-d-gutierrez/"><AiFillLinkedin /></a>
          <a href="https://twitter.com/davique0"><AiFillGithub /></a>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
          <Image alt="Mario Pic Profile" src={deved} layout="fill" objectFit="cover" />
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius ipsam exercitationem? Expedita animi sint molestiae repellendus ab placeat a molestias est doloremque esse qui, vitae veritatis quasi atque maxime! <span className="text-teal-500"> agencies</span> consulted for <span className="text-teal-500"> Lorem ipsum </span> dolor sit, amet consectetur adipisicing elit. Quasi modi placeat similique minima enim magni eligendi.
          </p>
          <p className="text-md py-2 leading-8 text-gray-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat totam voluptate quaerat obcaecati corrupti minus velit sit similique, atque aliquid animi tempora. Quo nam aliquam iusto temporibus rem repellat!
          </p>
        </div>
        <div>
          <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10">
            <Image alt="" src={design} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">Creating Beautiful designs tailored to your needs</p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Illustrator</p>
          </div>
          <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10">
            <Image alt="" src={code} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">Creating Beautiful designs tailored to your needs</p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Illustrator</p>
          </div>
          <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10">
            <Image alt="" src={consulting} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">Creating Beautiful designs tailored to your needs</p>
            <h4 className="py-4 text-teal-600">Design tools I use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Illustrator</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">Portafolio</h3>
          <p className="text-md py-2 leading-8 text-gray-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius ipsam exercitationem? Expedita animi sint molestiae repellendus ab placeat a molestias est doloremque esse qui, vitae veritatis quasi atque maxime! <span className="text-teal-500"> agencies</span> consulted for <span className="text-teal-500"> Lorem ipsum </span> dolor sit, amet consectetur adipisicing elit. Quasi modi placeat similique minima enim magni eligendi.
          </p>
          <p className="text-md py-2 leading-8 text-gray-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat totam voluptate quaerat obcaecati corrupti minus velit sit similique, atque aliquid animi tempora. Quo nam aliquam iusto temporibus rem repellat!
          </p>
        </div>
        <div>
          <div>
            <Image alt="Web1" src={web1} />
          </div>
          <div>
            <Image alt="Web2" src={web2} />
          </div>
          <div>
            <Image alt="Web3" src={web3} />
          </div>
          <div>
            <Image alt="Web4" src={web4} />
          </div>
          <div>
            <Image alt="Web5" src={web5} />
          </div>
          <div>
            <Image alt="Web6" src={web6} />
          </div>
        </div>
      </section>
    </main>
  )
}
