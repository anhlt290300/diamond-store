import { onAuthStateChanged } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { createContext } from "react"
import { useState,useEffect } from "react"
import { auth, db_ } from "./firebase/config"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    

    const getuser = async (id) => {
        const noteSnapshot = await getDoc(doc(db_, 'users', id))
        if (noteSnapshot.exists()) {

            return (noteSnapshot.data())
        } else {
            console.log("data not found");
        }
    }

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            
            if (user !== null) {
                localStorage.setItem('user_', JSON.stringify(user.uid))
                setCurrentUser(await getuser(user.uid))
            }            
        })
        return () => {
            unsub()
        }


    }, [])

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}

