import { createContext, useContext, useReducer } from "react";
import { db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

interface UserState {
	username: string;
	email: string;
	firstname: string;
	lastname: string;
	mobile: string;
	country: string;
	password: string;
	gender: string;
}

interface UserContextType {
	state: UserState;
	updateUser: (uid: string) => void;
}

const initialState: UserState = {
	username: "",
	email: "",
	firstname: "",
	lastname: "",
	mobile: "",
	country: "",
	password: "",
	gender: "",
};

// Step 3: Define Action Types
type Action = { type: "UPDATEUSER"; payload: UserState };

const UserContext = createContext<UserContextType>({
	state: initialState,
	updateUser: () => null,
});

const userReducer = (state: UserState, action: Action): UserState => {
	switch (action.type) {
		case "UPDATEUSER":
			return action.payload;
		default:
			return state;
	}
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(userReducer, initialState);

	const updateUser = async (uid: string) => {
		if (!uid) return; // If no uid is provided, just
		console.log(uid, "id");
		try {
			const docRef = doc(db, "users", uid);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				console.log("Document data", docSnap.data());
			}
		} catch (error) {}
	};

	return <UserContext.Provider value={{ state, updateUser }}>{children}</UserContext.Provider>;
};

export function useUserContext() {
	return useContext(UserContext);
}
