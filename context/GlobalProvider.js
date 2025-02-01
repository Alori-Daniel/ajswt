import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "../lib/appwrite";


const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
    const [isloggedIn, setisloggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        getCurrentUser()
            .then((res) => {
                if (res) {
                    setisloggedIn(true)
                    setUser(res)
                } else {
                    setisloggedIn(false)
                    setUser(null)
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return (
        <GlobalContext.Provider
            value={{
                isloggedIn,
                user,
                setUser,
                setisloggedIn,
                isLoading
            }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider