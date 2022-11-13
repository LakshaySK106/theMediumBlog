import Image from "next/image"
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from 'react-icons/md'
import lakshay from '../public/lakshay.jpg'
import jsLogo from '../public/jsLogo.png'
import eng from '../public/eng.jpg'
import newYork from '../public/newYork.jpeg'
import bmw from '../public/BMW_M5.png'
import roger from '../public/TheRoger.jpeg'
import bbc from '../public/bbc.jpeg'
import { useState } from "react"

const styles = {
    wrapper: 'overflow-auto h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]',
    accentedButton: 'flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full',
    searchBar: 'flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full',
    searchInput: 'border-none outline-none bg-none w-full',
    authorContainer: 'my-[2rem]',
    authorProfileImageContainer: 'h-[5rem] w-[5rem] rounded-full overflow-hidden',
    authorName: 'font-semibold mb-[.2rem] mt-[1rem]',
    authorFollowing: 'text-[#787878]',
    authorActions: 'flex gap-[.6rem] my-[1rem]',
    actionButton: 'bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm',
    recAuthProfile: 'rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
    recommendationAuthorName: 'text-sm',
    recommendationAuthorContainer: 'flex items-center gap-[.6rem]',
    recommendationTitle: 'font-bold text-[.9rem]',
    recommendationThumbnailContainer: 'flex flex-1 items-center justify-center h-[4rem] w-[4rem]',
    recommendationThumbnail: 'h-[6rem] w-[6rem] overflow-hidden object-cover',
    arctileContentWrapper: 'flex items-center justify-between cursor-pointer my-[1rem]',
    articleContent: 'flex-[4]',
    title: 'font-bold',
    mybr: 'text-[#787878] mt-4 mb-2',
      
}

const Recommendations = ({post, author}) =>{
    const [buttonText, setButtonText] = useState("Follow")
  return (
    <div className={styles.wrapper}>
        <div className={styles.accentedButton}>Get Unilimited Access</div>
        <div className={styles.searchBar}>
            <AiOutlineSearch/>
            <input
            className={styles.searchInput}
            placeholder='Search'
            type='text'
            />
        </div>
        <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
                <Image
                src={`https://res.cloudinary.com/demo/image/fetch/${author?.data?.imageurl}`}
                width={100}
                height={100}
                />
            </div>
            <div className={styles.authorName}>{author?.data?.name}</div>
            <div className={styles.authorFollowing}>{author?.data?.followerCount} followers</div>
            <div className={styles.authorActions}>
                <button onClick={() => buttonText==="Follow"?setButtonText("Following"):setButtonText("Follow")} className={styles.actionButton}>{buttonText}</button>
                <button className={styles.actionButton}><MdMarkEmailUnread/></button>
            </div>
        </div>
        <div className={styles.recommendationContainer}>
            <div className={styles.title}>More from Medium</div>
            <hr className={styles.mybr}/>
            <div className={styles.articleContainer}>
                {recommendedPosts.map(post=>(
                <div className={styles.arctileContentWrapper}>
                    <div className={styles.articleContent}>

                <div className={styles.recommendationAuthorContainer}>
                    <div className={styles.recAuthProfile}>
                    <Image
                        src={post.author.image}
                        height={100}
                        width={100}
                    /> 
                </div>
                    <div className={styles.recommendationAuthorName}>{post.author.name}</div>
                </div>
                    <div className={styles.recommendationTitle}>{post.title}</div>
                </div>
                <div className={styles.recommendationThumbnailContainer}></div>
                    <Image
                        className={styles.recommendationThumbnail}
                        src={post.image}
                        height={110}
                        width={110}
                    />
            </div>
                ))}
        </div>
        </div>
    </div>
  )
}

export default Recommendations

const recommendedPosts = [
    {
        title: 'India vs England: Jos Buttler, Alex Hales shine as England crush India to set up final clash with Pakistan',
        image: eng,
        author:{
            name: 'NewYork Times',
            image: newYork
        }
    },
    {
        title: 'The least-expensive 2023 BMW M5 is the 2023 BMW M5 4dr Sedan AWD (4.4L 8cyl Turbo 8A).',
        image: bmw,
        author:{
            name: 'Lakshay',
            image: lakshay
        }
    },
    {
        title: 'It had been a week since Roger Federer announced his retirement from the sport.',
        image: roger,
        author:{
            name: 'BBC',
            image: bbc
        }
    },
]