import Image from "next/image"
import { useContext } from "react"
import { MediumContext } from "../context/MediumContext"
import Logo from "../public/logo.png"
import Modal from 'react-modal'
import { Router, useRouter } from "next/router"
import Link from "next/link"
import PostModal from "./PostModal"

Modal.setAppElement('#__next')

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: 0,
        border: 'none',
    },
    overlay: {
        backgroundColor: 'rgba(10, 11, 13, 0.75)',
    }
}

const styles = {
    wrapper: 'flex justify-center gap-10 p-5',
    content: 'max-w-7xl flex-1 flex justify-between gap-10',
    logoContainer: 'flex items-center flex-start',
    logo: 'cursor-pointer object-contain',
    bannerNav: 'hidden md:inline-flex flex cursor-pointer items-center space-x-5',
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full'
}

const Header = () =>{
    const router = useRouter()
    const {currentUser, handleUserAuth} = useContext(MediumContext)
    return (
    <div className={styles.wrapper}>
        <div className={styles.content}>
            <div className={styles.logoContainer}>
                <Image
                className={styles.logo}
                src ={Logo}
                height={40}
                width={200}
                />
            </div>
            {currentUser?
            <div className={styles.bannerNav}>
                <div>Our Story</div>
                <div>Membership</div>
                <Link href={'/?addNew=1'}>
                <div className={styles.accentedButton}>Write</div>
                </Link>
                <div className={styles.accentedButton}>Get Unlimited Access</div>
            </div>
                :(
                <div className={styles.bannerNav}>
                    <div>Our Story</div>
                    <div>Membership</div>
                    <div onClick={handleUserAuth}>Sign in</div>
                    <div className={styles.accentedButton}>Get Started</div>
                </div>
                )
            }
        </div> 
            <Modal isOpen={Boolean(router.query.addNew)}
            onRequestClose={() => router.push('/')}
            style={customStyles}
            >
            <PostModal/>
        </Modal>
    </div>
    )
}

export default Header