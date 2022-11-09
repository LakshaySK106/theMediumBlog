import Image from "next/image"
import Log from '../public/medium-m.png'

const styles = {
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full',
    content: 'px-0 flex items-center justify-between py-6' ,
    wrapper: 'max-w-7xl mx-auto h-max-[9rem] flex items-center justify-center bg-[#C0C0C0] border-t border-black',
}
const Banner = () =>{
  return (
       <div className={styles.wrapper}>
        <div className={styles.content}>
            <div className="space-y-5 px-10">
                <h1 className="max-w-xl text-6xl font-serif "><span className="underline decoration-4">TheMediumBlog</span><br></br> Is A Place To Write, Read, And Connect</h1>
                <h3 className="max-w-2xl text-xl font-serif">it's easy and free to post your thinking on any topic and connect with millions of readers</h3>
                <button className={styles.accentedButton}>Start Reading</button>
            </div>      
            <Image
                className="hidden md:inline-flex h-32 lg:h-full object-contain flex-1"
                src={Log}
                width={430}
                height={400}
            /> 
        </div> 

    </div>
  )
}

export default Banner