import Image from "next/image"
import Logo from "../public/lakshay.jpg"
import {FiBookmark} from 'react-icons/fi'
import thumb from '../public/thumb.png'
import Link from "next/link"

const styles = {
    wrapper: 'flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer',
    authorContainer: 'flex gap-[.4rem]',
    authorImageContainer: 'grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
    authorImage: 'object-cover',
    authorName: 'font-semibold ',
    title: 'font-bold text-2xl',
    briefing: 'text-[#787878]',
    detailsContainer: 'flex items-center justify-between text-[#787878]',
    articleDetails: 'my-2 text-[.8rem] ',
    category: 'bg-[#F2F3F2] p-1 rounded-full',
    bookmarkContainer: 'cursor-pointer',
    postDetails: 'flex-[2.5] flex flex-col',
}

const PostCard = () => {
  return (
    <Link href={`/post/123`}>
    <div className={styles.wrapper}>
        <div className={styles.postDetails}>
        <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
                <Image
                    src={Logo}
                    className={styles.authorImage}
                    width={40}
                    height={40}
                    />
            </div>
        <div className={styles.authorName}>Lakshay</div>
        </div>
            <h1 className={styles.title}>Next.js -The next big thing! 5 New Killer Features of Next.js 12</h1>
            <div className={styles.briefing}>Top highlights of a game-changing release</div>
            <div className={styles.detailsContainer }>
                <span className={styles.articleDetails}>November 10 • 5 min read • <span className={styles.category}>technology</span></span>
                <span className={styles.bookmarkContainer}>
                    <FiBookmark className='h-5 w-5'/>
                </span> 
        </div>
        </div>
        <div className={styles.thumbnailContainer}>
            <Image
                src={thumb}
                height={100}
                width={100}
                />
        </div>
    </div>
    </Link>
  ) 
}

export default PostCard