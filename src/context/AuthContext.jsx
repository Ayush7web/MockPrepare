// import { createContext, useContext, useState, useEffect } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const FirebaseUserContext = createContext(null);

// const AuthContext = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const auth = getAuth();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [auth]);

//   return (
//     <div>
//       <FirebaseUserContext.Provider value={{ user, loading }}>
//         {!loading && children}
//       </FirebaseUserContext.Provider>
//     </div>
//   );
// };
// const useAuth = () => {
//   return useContext(FirebaseUserContext);
// };

// AuthContext.useAuth = useAuth;

// export default AuthContext;
