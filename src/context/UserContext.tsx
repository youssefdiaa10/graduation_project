// import { createContext, PropsWithChildren, useContext, useState } from "react";
// import { IUser } from "../utils/types";

// const UserContext = createContext<{
//     user: IUser,
//     setUser: React.Dispatch<React.SetStateAction<IUser>>
// } | undefined>(undefined);

// export default function UserProvider({ children }: PropsWithChildren) {

//     // const [userToken , setUserToken] = useState(null);
//     // const [userToken , setUserToken] = useState<IAuth | null>(null);
//     const [user, setUser] = useState<IUser>({ email: "", phone: "", username: "", password: "" })

//     return <UserContext.Provider value={{ user, setUser }}>
//         {children}
//     </UserContext.Provider>
// }


// // eslint-disable-next-line react-refresh/only-export-components
// export const useUser = () => {
//     const context = useContext(UserContext)
//     if (!context) {
//         throw new Error("useUser must be used within a UserProvider")
//     }
//     return context
// }
