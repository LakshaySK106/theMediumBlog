import Image from "next/image"
import Log from '../public/thumb.png'
import { AiFillPlayCircle } from "react-icons/ai"
import lakshay from '../public/lakshay.jpg'
import { IoLogoTwitter } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import { HiOutlineLink } from 'react-icons/hi'
import { BiBookmarks } from 'react-icons/bi'
import { FiMoreHorizontal } from 'react-icons/fi'

const styles ={
    wrapper: 'flex items-center justify-center flex-[3] border-l border-r',
    content: 'h-screen w-full p-[2rem]',
    postHeaderContainer: 'flex justify-between items-center mt-[2.2rem] mb-[1.2rem]',
    authorContainer: 'flex gap-[1rem]',
    authorProfileImageContainer: 'h-[3rem] w-[3rem] grid center rounded-full overflow-hidden',
    column: 'flex-1 flex flex-col justify-center',
    postDetails: 'flex gap-[.2rem] text-[#787878]',
    listenButton: 'flex items-center gap-[.2rem] text-[#1A8917]',
    socials: 'flex gap-[1rem] text-[#787878] cursor-pointer',
    space: 'w-[.5rem] ',
    bannerContainer: 'h-[18rem] w-full grid center overflow-hidden mb-[2rem]', 
    articleMainContainer: 'flex flex-col gap-[1rem]',
    image: 'object-cover',
    title: 'text-3xl font-bold',
    subtitle: 'font-sans text-[1.4rem] text-[#292929]',
    subb: 'text-[#787878]',
    articleText: 'font-sans text-[1.2rem] text-[#292929]',
}

const ArticleMain =() => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.content}>
            <div className={styles.postHeaderContainer}>
                <div className={styles.authorContainer}>
                    <div className={styles.authorProfileImageContainer}>
                        <Image
                        className={'object-cover'}
                            src={lakshay}
                            height={100}
                            width={100}
                        />
                    </div>
                    <div className={styles.column}>
                        <div>Lakshay</div>
                        <div className={styles.postDetails}>
                            <span>November 7 • 8 min read •</span><span className={styles.listenButton}>
                                <AiFillPlayCircle/> Listen
                            </span>
                        </div>

                    </div>
                </div>
                <div className={styles.socials}>
                    <IoLogoTwitter/>
                    <FaFacebook/>
                    <GrLinkedin/>
                    <HiOutlineLink/>
                    <div className={styles.space}/>
                    <BiBookmarks/>
                    <FiMoreHorizontal/>
                </div>
            </div>
            <div className={styles.articleMainContainer}>
                <div className={styles.bannerContainer}>
                    <Image
                        className={styles.image}
                        src={Log}
                    />
                </div>
                <h1 className={styles.title}>Next.js -The next big thing! 5 New Killer Features of Next.js 12</h1>
                <h4 className={styles.subtitle}>
                    <div className={styles.subb}>
                        Lakshay, November 7, 2022
                    </div>
                    <div>Top highlights of a game-changing release</div>
                </h4>
                <div className={styles.articleText}>
                    The Next.Js Framework Was Created By Vercel In 2016. It Started As A Server-Side Rendering-Focused Framework. It Has Gradually Evolved Since. Now It Is A Complete Suite To Build Blazing Fast React Apps. It Is Developer-Friendly And Intuitive To Use. Here Are Its Strongest Features: Page-Based Routing, Hybrid Pages, Environment, Variables, Static File Serving, Image Optimization, Analytics, Internationalization, Great Documentation.The Next.Js Framework Was Created By Vercel In 2016. It Started As A Server-Side Rendering-Focused Framework. It Has Gradually Evolved Since. Now It Is A Complete Suite To Build Blazing Fast React Apps. It Is Developer-Friendly And Intuitive To Use. Here Are Its Strongest Features: Page-Based Routing, Hybrid Pages, Environment, Variables, Static File Serving, Image Optimization, Analytics, Internationalization, Great Documentation.
                </div>
            </div>
        </div>
    </div>
  )
}

export default ArticleMain