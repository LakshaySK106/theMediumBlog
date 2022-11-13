import SmallLogo from '../public/smallLogo.png'
import { HiOutlineHome } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'
import lakshay from '../public/lakshay.jpg'

const styles = {
    logoContainer: 'cursor-pointer',
    wrapper: 'overscroll-contain w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]',
    iconsContainer: 'flex-1 flex flex-col justify-center gap-[1.4rem] text-xl text-[#787878]',
    divider: 'border-b',
    profileImage: 'object-cover',
    profileImageContainer: 'w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden place-items-center',

}

const ReadersNav = ({post, author}) => {
  return (
    <div className={styles.wrapper}>
        <Link href='/'>
        <div className={styles.logoContainer}>
            <Image
            src={SmallLogo}
            />
        </div>
        </Link>
        <div className={styles.iconsContainer}>
            <HiOutlineHome/>
            <FiBell/>
            <BiBookmarks/>
            <RiArticleLine/>
            <div className={styles.divider}/>
            <BsPencilSquare/>
        </div>
        <div className={styles.profileImageContainer}>
            <Image 
                className={styles.profileImage}
                src={`https://res.cloudinary.com/demo/image/fetch/${author?.data?.imageurl}`}
                width={100}
                height={100}
            />
        </div>
    </div>
  )
}

export default ReadersNav