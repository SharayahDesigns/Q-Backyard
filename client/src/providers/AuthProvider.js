import React from 'react'



export const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer

const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider value={{x:1}}>
    {children}
    </AuthContext.Provider>
)
}
export default AuthProvider
