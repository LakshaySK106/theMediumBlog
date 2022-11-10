import { createContext, useEffect, useState } from "react"
import { collection, getDocs, setDoc, doc } from 'firebase/firestore'
import {db} from '../firebase'

const MediumContext = createContext()
const MediumProvider = ({children})=>{
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'users'))
            setUsers (querySnapshot.docs.map(doc => {
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
            setPosts (querySnapshot.docs.map(doc => {
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
                        postedOn: doc.data().postedOn.toDate(),
                        author: doc.data().author,
                    }
                }
            }))
        }
        getPosts()
    }, [])
    
    return (
        <MediumContext.Provider
            value={{posts, users}}
        >{children
        }</MediumContext.Provider>
    )
}

export { MediumContext, MediumProvider };