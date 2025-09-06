import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyA4CylCtn7vYIhfIGsri33GDijAnIwjdvg",
  authDomain: "netflix-clone-bfa60.firebaseapp.com",
  projectId: "netflix-clone-bfa60",
  storageBucket: "netflix-clone-bfa60.firebasestorage.app",
  messagingSenderId: "25180265839",
  appId: "1:25180265839:web:d15fdc51d978ef01389c9a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid, 
            name,
            authProvider: "local",
            email,
        });
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].replace(/-/g, ' '));
    }
}

const login = async (email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password);
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].replace(/-/g, ' '));
    }
}

const logout = () => {
    signOut(auth);
}

export { auth, db, signup, login, logout };