import { createContext, useContext, useReducer } from "react";
import { db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export interface UserState {
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
  dispatch: React.Dispatch<Action>;
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
  dispatch: () => null,
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

  const updateUser = (uid: string) => {
    console.log(uid);
  };

  return (
    <UserContext.Provider value={{ state, updateUser, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext);
}
