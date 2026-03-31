import {
    signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, deleteUser
    , reauthenticateWithCredential,
    EmailAuthProvider
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { SignUpData } from "../component/login/types/login.types";

export const login = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
};

export const logout = async () => {
    await signOut(auth);
};

export const signUp = async (data: SignUpData) => {
    const {email, password, username, firstName, lastName} = data;

    try {

        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        const user = userCredential.user;

        console.log("Auth user created:", user.uid);

        await setDoc(doc(db, "users", user.uid), {
            username,
            firstName,
            lastName,
            email,
            createdAt: new Date(),
        });

        console.log("Firestore user created!");

        return user;

    } catch (error: any) {
        console.error("Error signing up:", error.message);
        throw error;
    }
};

export const deleteAccount = async (password: string) => {
    try {
        const user = auth.currentUser;
        if (!user || !user.email) {
            throw new Error("No user logged in");
        }
        // Re-authenticate
        const credential = EmailAuthProvider.credential(
            user.email,
            password
        );
        await reauthenticateWithCredential(user, credential);
        // Delete auth FIRST
        await deleteUser(user);
        //Then delete Firestore
        await deleteDoc(doc(db, "users", user.uid));

    } catch (error: any) {
        if (error.code === "auth/wrong-password") {
            throw new Error("Incorrect password");
        }

        if (error.code === "auth/requires-recent-login") {
            throw new Error("Please login again");
        }

        throw error;
    }
};
