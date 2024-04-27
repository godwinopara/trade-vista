import { createContext, useCallback, useContext, useEffect, useReducer, useState } from "react";
import { auth, db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export interface UserState {
<<<<<<< HEAD
	username: string;
	email: string;
	firstname: string;
	lastname: string;
	mobile: string;
	country: string;
	password: string;
	gender: string;
	account: AccountState;
}

export interface AccountState {
	balance: string;
	profit: string;
	bonus: string;
=======
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  mobile: string;
  country: string;
  password: string;
  gender: string;
>>>>>>> 73ebd627c3a835f9f80800aecd80989fd1c384d3
}

interface UserContextType {
  state: UserState;
  updateUser: (uid: string) => void;
  dispatch: React.Dispatch<Action>;
}

const initialState: UserState = {
<<<<<<< HEAD
	username: "",
	email: "",
	firstname: "",
	lastname: "",
	mobile: "",
	country: "",
	password: "",
	gender: "",
	account: { balance: "0", profit: "0", bonus: "0" },
=======
  username: "",
  email: "",
  firstname: "",
  lastname: "",
  mobile: "",
  country: "",
  password: "",
  gender: "",
>>>>>>> 73ebd627c3a835f9f80800aecd80989fd1c384d3
};

// Step 3: Define Action Types
type Action =
	| { type: "UPDATE_USER"; payload: UserState }
	| { type: "UPDATE_ACCOUNT"; payload: AccountState }
	| { type: "SET_LOADING"; payload: boolean }
	| { type: "SET_ERROR"; payload: string };

const UserContext = createContext<UserContextType>({
  state: initialState,
  updateUser: () => null,
  dispatch: () => null,
});

const userReducer = (state: UserState, action: Action): UserState => {
<<<<<<< HEAD
	switch (action.type) {
		case "UPDATE_USER":
			return action.payload;
		case "UPDATE_ACCOUNT":
			return { ...state, account: action.payload };
		default:
			return state;
	}
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(userReducer, initialState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const unSub = onAuthStateChanged(auth, async (user) => {
			if (user) {
				updateUser(user.uid);
				updateAccount(user.uid);
			}
		});

		return () => {
			unSub();
		};
	}, []);

	const fetchUserData = useCallback(async (uid: string) => {
		const userDocRef = doc(db, "users", uid);
		const userDocSnap = await getDoc(userDocRef);
		if (userDocSnap.exists()) {
			return userDocSnap.data() as UserState;
		} else {
			throw new Error("User data not found");
		}
	}, []);

	const updateUser = useCallback(
		(uid: string) => {
			fetchUserData(uid)
				.then((userData) => {
					dispatch({ type: "UPDATE_USER", payload: userData });
				})
				.catch((error) => {
					setError("Failed to update user data");
				});
		},
		[fetchUserData]
	);

	const updateAccount = useCallback(
		async (uid: string) => {
			if (uid) {
				const docRef = doc(db, "accounts", uid);
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					dispatch({ type: "UPDATE_ACCOUNT", payload: docSnap.data().account as AccountState });
				}
			}
		},
		[dispatch]
	);
=======
  switch (action.type) {
    case "UPDATEUSER":
      return action.payload;
    default:
      return state;
  }
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const updateUser = (uid: string) => {
    console.log(uid);
  };
>>>>>>> 73ebd627c3a835f9f80800aecd80989fd1c384d3

  return (
    <UserContext.Provider value={{ state, updateUser, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext);
}
