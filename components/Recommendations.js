import Image from "next/image"
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from 'react-icons/md'
import lakshay from '../public/lakshay.jpg'

const styles = {
    wrapper: 'h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]',
    accentedButton: 'flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full',
    searchBar: 'flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full',
    searchInput: 'border-none outline-none bg-none w-full',
    authorContainer: 'my-[2rem]',
    authorProfileImageContainer: 'h-[5rem] w-[5rem] rounded-full overflow-hidden',
    authorName: 'font-semibold mb-[.2rem] mt-[1rem]',
    authorFollowing: 'text-[#787878]',
    authorActions: '',
    actionButton: '',
}

const Recommendations = () =>{
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
                src={lakshay}
                width={100}
                height={100}
                />
            </div>
            <div className={styles.authorName}>Lakshay</div>
            <div className={styles.authorFollowing}>1M followers</div>
            <div className={styles.authorActions}>
                <button className={styles.actionButton}>Follow</button>
                <button className={styles.actionButton}></button>
            </div>
        </div>
    </div>
  )
}

export default Recommendations