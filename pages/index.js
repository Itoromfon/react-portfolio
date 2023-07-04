import Head from 'next/head'
import { BsFillMoonStarsFill } from "react-icons/bs"
import { 
  AiFillTwitterCircle, 
  AiFillLinkedin, 
  AiFillFacebook, 
  AiFillGithub
} from "react-icons/ai"
import Image from 'next/image'
import mfon from "../public/mfon.png"
import recipe from "../public/recipe.png"
import techfirm from "../public/techfirm.png"
import quizzical from "../public/quizzical.png"
import tenzies from "../public/tenzies.png"
import passwordgen from "../public/Password-Gen.png"
import memegen from "../public/meme-gen.png"
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  function handleClick() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className={darkMode ? "dark" : "blue"}>
      <Head>
        <title>Itoro Mfon Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white dark:bg-gray-900 px-10 pb-20 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className="dark:text-white text-3xl font-burtons">MyPortfolio</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={handleClick} className='dark:text-white cursor-pointer text-2xl' />
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg ml-8 cursor-pointer' href='#'>Resume</a>
              </li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='dark:text-teal-400 text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Itoro Mfon Emmanuel</h2>
            <h3 className='dark:text-white text-2xl py-2 md:text-3xl'>Software Engineer / Frontend Developer</h3>
            <p className='dark:text-white text-md py-5 leading-8 text-gray-700 md:text-xl max-w-xl mx-auto '>My main aim is to contribute to the growth and development 
              of any company am working with and offer the best services to 
              the development of the organization.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'> 
            <a href='https://twitter.com/praiztech' target="_blank" rel="noreferrer">
              <AiFillTwitterCircle className='dark:text-white' />
            </a>
            <a href='https://m.facebook.com/praise.mfon.73?eav=AfbRlvWHn1qfEDaq26JlDXb2gHH6uk2oMrOGQvUM3NZ5fmR3oEZDb4B3k8EXDvUnaXQ&paipv=0' target="_blank" rel="noreferrer">
              <AiFillFacebook className='dark:text-white' />
            </a>
            <a href='https://www.linkedin.com/in/itoro-mfon-emmanuel-3867991aa/' target="_blank" rel="noreferrer">
              <AiFillLinkedin className='dark:text-white' />
            </a>
            <a href='https://github.com/Itoromfon?tab=repositories' target="_blank" rel="noreferrer">
              <AiFillGithub className='dark:text-white' />
            </a>
          </div>
          <div className="mx-auto  rounded-full flex justify-center mt-20 md:h-96 md:w-96">
            <Image src={mfon} alt="itoromfon" className="rounded-full mb-8 w-80 h-80" />
          </div>
        </section>
        <section>
          <div className='text-center'>
            <h3 className='dark:text-white text-3xl py-1'>Services we offer</h3>
            <p className='dark:text-white text-md py-2 leading-8 text-gray-700 md:text-xl max-w-xl mx-auto'>Since the beginning of my journey as a developer,
              I have done remote work for
              <span className='text-teal-500'> agencies </span>consulted for <span className='text-teal-500'>
                startups </span> and collaborated with talented people to create digital products for both
                and consumer use.
            </p>
            <p className='dark:text-white text-md py-2 leading-8 text-gray-700 md:text-xl max-w-xl mx-auto'>
              I offer from a wide range of services, including 
              programming and other great skills.
            </p>
          </div>
        </section>
        <section>
          <div className='text-center mt-10'>
            <h3 className='dark:text-white text-3xl py-0'>Portfolio</h3>
            <p className='dark:text-white text-md py-0 leading-8 text-gray-700 mt-8 md:text-xl max-w-xl mx-auto'>
              My Skills set includes HTML, CSS, Javascript, React JS, Next JS, Tailwind CSS, ES6 and other great skills
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <a href='https://my-recipesapp.netlify.app' target="_blank" rel="noreferrer">
                <Image src={recipe} alt="recipe" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://technology-firm.netlify.app' target="_blank" rel="noreferrer">
                <Image src={techfirm} alt="techfirm" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://myquizzical-app.netlify.app' target="_blank" rel="noreferrer">
                <Image src={quizzical} alt="quizzical" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://my-tenziesgame.netlify.app' target="_blank" rel="noreferrer">
                <Image src={tenzies} alt="tenzies" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://itoromfon.github.io/Password-Generator/' target="_blank" rel="noreferrer">
                <Image src={passwordgen} alt="passwordgen" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
              </a>
            </div>
            <div className='basis-1/3 flex-1'>
              <a href='https://my-memegeneratorproject.netlify.app' target="_blank" rel="noreferrer">
                <Image src={memegen} alt="memegen" className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive" />
              </a>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
















































































































































































































































































































































































































































































