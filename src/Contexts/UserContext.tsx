import React,{useState, useContext, createContext, ReactNode} from 'react'

interface UserContextType{
    user:UserType | undefined,
    setUser:(user:UserType)=>void
}
interface UserType{
    id:string,
    username:string,
    email:string
}
const MyContext=createContext<UserContextType | undefined>(undefined)
export const UserContext:React.FC<{children:ReactNode}> = ({children}) => {
    const [user,setUser]=useState<UserType | undefined>(undefined)
  return (
    <MyContext.Provider value={{user,setUser}}>
        {children}
    </MyContext.Provider>
  )
}
export const useUser=()=>{
    const context=useContext(MyContext)
    if(!context){
        throw new Error("Error in UserContext")
    }
    return context
}