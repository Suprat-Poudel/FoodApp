import React from 'react'

    const AuthCredentials = React.createContext({
        AuthKey:"AIzaSyDor2NMvWKhR0xc27JK5bmIeI7USzMmhVQ",
        db_url:"https://deliicious-default-rtdb.firebaseio.com"
 
    })

    export const AuthCredentialsProvider = (props) => {
        const contextValue = {
          
            AuthKey:"AIzaSyDor2NMvWKhR0xc27JK5bmIeI7USzMmhVQ",
            db_url:"https://deliicious-default-rtdb.firebaseio.com"
          };
        
          return (
            <AuthCredentials.Provider value={contextValue}>
              {props.children}
            </AuthCredentials.Provider>
          );
        };

export default AuthCredentials;
