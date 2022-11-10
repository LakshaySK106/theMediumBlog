import Image from "next/image"
import { useContext } from "react"
import { MediumContext } from "../context/MediumContext"
import Logo from "../public/logo.png"
const styles = {
    wrapper: 'flex justify-center gap-10 p-5',
    content: 'max-w-7xl flex-1 flex justify-between gap-10',
    logoContainer: 'flex items-center flex-start',
    logo: 'cursor-pointer object-contain',
    bannerNav: 'hidden md:inline-flex flex cursor-pointer items-center space-x-5',
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full'
}

const Header = () =>{
    const {handleUserAuth} = useContext(MediumContext)
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
            <div className={styles.bannerNav}>
                <div>Our Story</div>
                <div>Membership</div>
                <div onClick={handleUserAuth}>Sign in</div>
                <div className={styles.accentedButton}>Get Started</div>
            </div>
        </div>
    </div>

    )
}

export default Header