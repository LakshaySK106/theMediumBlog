import { createContext, useEffect, useState } from "react"
import { collection, getDocs, setDoc, doc } from 'firebase/firestore'
import {db, auth, provider} from '../firebase'
import { signInWithPopup } from 'firebase/auth'

const MediumContext = createContext()
const MediumProvider = ({children})=>{
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [currentUser, setCurrentUser] = useState(null)
    
    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'users'))
            setUsers(querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: {
                        ...doc.data()
                    }
                }
            }))
        }
        getUsers()
    }, [])

    useEffect(() => {
        const getPosts = async () => {
            const querySnapshot = await getDocs(collection(db, 'articles'))
            querySnapshot.docs.map(doc => console.log(doc.data()))
            setPosts(querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: {
                        body: doc.data().body,
                        brief: doc.data().brief,
                        category: doc.data().category,
                        postLength: doc.data().postLength,
                        bannerImage: doc.data().bannerImage,
                        title: doc.data().title,
                        // comments: doc.data().comments,
                        postedOn: doc.data().postedOn,
                        author: doc.data().author,
                    }
                }
            }))
        }
        getPosts()
    }, [])
    
    const addUserToFirebase = async user => {
        await setDoc(doc(db, 'users', user.email), {
            email: user.email,
            name: user.displayName,
            imageurl: user.photoURL,
            followerCount: 0
        })
    }

    const handleUserAuth = async() => {
        const userData = await signInWithPopup(auth, provider)
        const user = userData.user
        setCurrentUser(user)
        addUserToFirebase(user)
    }

    return (
        <MediumContext.Provider
            value={{posts, users, handleUserAuth, currentUser}}
        >{children
        }</MediumContext.Provider>
    )
}

export { MediumContext, MediumProvider };