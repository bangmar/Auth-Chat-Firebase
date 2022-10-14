// context
import { createContext, useContext, useEffect, useState } from "react";

// firebase auth

import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";

import {
	collection,
	onSnapshot,
	addDoc,
	orderBy,
	query,
} from "firebase/firestore";

import { auth, firestore } from "../lib/firebase-init";
// import {
// 	GoogleAuthProvider,
// 	signInWithPopup,
// 	signInWithRedirect,
// } from "firebase/auth";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
	// user aktif
	const [user, setUser] = useState({});

	//pesan
	const [msg, setMsg] = useState([]);

	const signup = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logout = () => {
		return signOut(auth);
	};

	const sendMsg = (text, userEmail) => {
		if (text === "") {
			return;
		}
		const msgRef = collection(firestore, "msg");
		addDoc(msgRef, {
			text: text,
			userEmail: userEmail,
			time: new Date(),
		})
			.then((response) => {
				console.log(response);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	// const googleSignIn = () => {
	// 	const provider = new GoogleAuthProvider();
	// 	signInWithPopup(auth, provider);
	// };

	useEffect(() => {
		const currUser = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		// unmount
		return () => {
			currUser();
		};
	}, []);

	useEffect(() => {
		const msgRef = query(collection(firestore, "msg"), orderBy("time"));
		const dataLoad = onSnapshot(msgRef, (snapshot) => {
			setMsg(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
		});

		return () => {
			dataLoad();
		};
	}, []);

	return (
		<UserContext.Provider value={{ signup, login, logout, user, msg, sendMsg }}>
			{children}
		</UserContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(UserContext);
};
