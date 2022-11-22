import { createContext, useState } from "react";

export const AuthContext = createContext({
    isAuthenticated: false,
    token: "",
    setUserToken: () => { }
})

export default function AuthContextProvider({ children }) {
    const [token, setToken] = useState("");

    const setUserToken = (jwtToken) => {
        const expireDateStamp = new Date().setDate(new Date().getDate() + 2);
        const expireDate = new Date(expireDateStamp).toUTCString();
        document.cookie = `userToken=${jwtToken} expires=${expireDate} SameSite=Lax`
        setToken(jwtToken);
    }

    let isAuthenticated = !!token;

    const contextValue = {
        isAuthenticated,
        token,
        setUserToken
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}