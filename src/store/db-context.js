import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../firebase";
import { collection, 
          doc, 
          addDoc, 
          getDocs, 
          getDoc,
          setDoc,
          query,
          where,
          onSnapshot
        } from "firebase/firestore"; 

import AuthFBContext from "./auth-contextFB";

const DBContext = React.createContext({
    userUID: '',
    createUser: ()=> {},
    getUserData: ()=> {},
    testFunc: ()=> {},
    dbAuthLink: () => {}
  });

  export const DBContextContextProvider = (props) => {

    const [userUID, setUserUID] = useState('');
    const authFBCtx = useContext(AuthFBContext);
    //const currentUserID = authFBCtx.currentUser.uid;
    
    async function createUser (displayName, email, uid) {

      try  {
        console.log('tryy !!!')
        const docRef = await setDoc(doc(db, "users", uid), {
          displayName: displayName,
          email: email,
          uid: uid
        });
        console.log("Document written with ID: ", docRef);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      //  try  {
      //       console.log('tryy !!!')
      //       const docRef = await addDoc(collection(db, "users"), {
      //         displayName: displayName,
      //         email: email,
      //         uid: uid
      //       });
      //       console.log("Document written with ID: ", docRef.id);
      //     } catch (e) {
      //       console.error("Error adding document: ", e);
      //     }
    };

    const dbAuthLink = (userUid) => {
      return userUid;
    }


    async function getUserData (dbAuthLink) {

      const userRef = doc(db, "users", dbAuthLink);
      const docSnap = await getDoc(userRef); // not getDocs
      return docSnap.data() || false; // .data() if undefined is doc doesn't exist

      // const usersRef = collection(db, "users");
      // const q = query(usersRef, where("uid", "==", uid));
      // const querySnapshot = await getDocs(q);
      // console.log(querySnapshot);

      // return querySnapshot.empty ? false : querySnapshot.docs.map((d) => d.data()); 
      // return (querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   if(doc) {
      //     return doc.data();
      //   } else {
      //     console.log('else');
      //     return false;
      //   }
      // }));
    };
    
    function testFunc () {
        console.log('testFunc worked!');
    };

    const contextValue = {
        userUID,
        createUser,
        getUserData,
        testFunc,
        dbAuthLink
        };
    


    useEffect(()=> {

      getUserData();
      }

    , [getUserData])

      
        return (
          <DBContext.Provider value={contextValue}>
            {props.children}
          </DBContext.Provider>
        );
  };

  export default DBContext;