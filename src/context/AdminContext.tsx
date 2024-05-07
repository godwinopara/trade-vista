import { ReactNode, createContext, useContext, useEffect, useReducer } from "react";
import {
	AccountState,
	DepositState,
	SubscriptionState,
	TradeState,
	User,
	VerificationState,
	WithdrawalState,
} from "../types/types";
import { db } from "../lib/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

interface AdminContextType {
	state: AdminState;
}

interface AdminState {
	users: User[];
	accounts: AccountState[];
	deposits: DepositState[];
	withdrawals: WithdrawalState[];
	trades: TradeState[];
	subscriptions: SubscriptionState[];
	verifications: VerificationState[];
}

type Action =
	| { type: "GET_ALL_USERS"; payload: User[] }
	| { type: "GET_ALL_ACCOUNTS"; payload: AccountState[] }
	| { type: "GET_ALL_DEPOSITS"; payload: DepositState[] }
	| { type: "GET_ALL_WITHDRAWALS"; payload: WithdrawalState[] }
	| { type: "GET_ALL_SUBSCRIPTIONS"; payload: SubscriptionState[] }
	| { type: "GET_ALL_TRADES"; payload: TradeState[] }
	| { type: "GET_ALL_VERIFICATIONS"; payload: VerificationState[] };

const initialState: AdminState = {
	users: [],
	accounts: [],
	deposits: [],
	withdrawals: [],
	trades: [],
	subscriptions: [],
	verifications: [],
};

const AdminContext = createContext<AdminContextType>({
	state: initialState,
});

const adminReducer = (state: AdminState, action: Action): AdminState => {
	switch (action.type) {
		case "GET_ALL_USERS":
			return { ...state, users: action.payload };
		case "GET_ALL_ACCOUNTS":
			return { ...state, accounts: action.payload };
		case "GET_ALL_DEPOSITS":
			return { ...state, deposits: action.payload };
		case "GET_ALL_WITHDRAWALS":
			return { ...state, withdrawals: action.payload };
		case "GET_ALL_SUBSCRIPTIONS":
			return { ...state, subscriptions: action.payload };
		case "GET_ALL_TRADES":
			return { ...state, trades: action.payload };
		case "GET_ALL_VERIFICATIONS":
			return { ...state, verifications: action.payload };
		default:
			return state;
	}
};

export default function AdminProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(adminReducer, initialState);

	useEffect(() => {
		fetchAllUsers();
		fetchAllAccounts();
		fetchAllDeposits();
		fetchAllWithdrawals();
		fetchAllTradeSessions();
		fetchAllVerifications();
		fetchAllSubscription();

		console.log(state);
	}, []);

	const fetchAllUsers = async () => {
		try {
			const data = await getDocs(collection(db, "users"));
			const users: User[] = [];
			data.forEach((user) => {
				users.push(user.data() as User);
			});
			dispatch({ type: "GET_ALL_USERS", payload: users });
		} catch (error) {
			console.error("Error fetching users:", error);
			return [];
		}
	};

	const fetchAllAccounts = async () => {
		try {
			const data = await getDocs(collection(db, "accounts"));
			const accounts: AccountState[] = [];

			// Create an array to hold all the promises
			const accountPromises = data.docs.map(async (acct) => {
				const userDoc = await getDoc(doc(db, "users", acct.id));
				const userData = userDoc.data();
				const fullname = `${userData?.firstname} ${userData?.lastname}`;
				const acctData = { fullname, ...acct.data().account };
				accounts.push(acctData as AccountState);
			});

			// Wait for all promises to resolve
			await Promise.all(accountPromises);

			dispatch({ type: "GET_ALL_ACCOUNTS", payload: accounts });
		} catch (error) {
			console.error("Error fetching accounts:", error);
			return [];
		}
	};

	const fetchAllDeposits = async () => {
		try {
			const data = await getDocs(collection(db, "deposits"));
			const deposits: DepositState[] = [];

			// Create an array to hold all the promises
			const depositPromises = data.docs.map(async (acct) => {
				const userDoc = await getDoc(doc(db, "users", acct.id));
				const userData = userDoc.data();
				const fullname = `${userData?.firstname} ${userData?.lastname}`;

				acct.data().deposits.forEach((deposit: DepositState) => {
					const depositData = { fullname, ...deposit };
					deposits.push(depositData as DepositState);
				});
			});

			// Wait for all promises to resolve
			await Promise.all(depositPromises);

			dispatch({ type: "GET_ALL_DEPOSITS", payload: deposits });
		} catch (error) {
			console.error("Error fetching deposits:", error);
			return [];
		}
	};

	const fetchAllWithdrawals = async () => {
		try {
			const withdrawals: WithdrawalState[] = [];
			const data = await getDocs(collection(db, "withdrawals"));

			const withdrawalPromises = data.docs.map(async (withdrawalData) => {
				const userDoc = await getDoc(doc(db, "users", withdrawalData.id));
				const userData = userDoc.data();
				const fullname = `${userData?.firstname} ${userData?.lastname}`;

				withdrawalData.data().withdrawals.forEach((withdrawal: WithdrawalState) => {
					const withdrawalEntry = { fullname, ...withdrawal };
					withdrawals.push(withdrawalEntry);
				});
			});

			await Promise.all(withdrawalPromises);

			dispatch({ type: "GET_ALL_WITHDRAWALS", payload: withdrawals });
		} catch (error) {
			console.error("Error fetching users:", error);
			return [];
		}
	};

	const fetchAllTradeSessions = async () => {
		try {
			const trades: TradeState[] = [];
			const data = await getDocs(collection(db, "trades"));

			const tradePromises = data.docs.map(async (tradeData) => {
				const userDoc = await getDoc(doc(db, "users", tradeData.id));
				const userData = userDoc.data();
				const fullname = `${userData?.firstname} ${userData?.lastname}`;

				tradeData.data().trades.forEach((trade: TradeState) => {
					const tradeEntry = { fullname, ...trade };
					trades.push(tradeEntry);
				});
			});

			await Promise.all(tradePromises);
			dispatch({ type: "GET_ALL_TRADES", payload: trades });
		} catch (error) {
			console.error("Error fetching users:", error);
			return [];
		}
	};

	const fetchAllSubscription = async () => {
		const subscriptions: SubscriptionState[] = [];
		try {
			const data = await getDocs(collection(db, "subscriptions"));
			const subscriptionPromises = data.docs.map(async (subscriptionData) => {
				const userDoc = await getDoc(doc(db, "users", subscriptionData.id));
				const userData = userDoc.data();
				const fullname = `${userData?.firstname} ${userData?.lastname}`;

				subscriptionData.data().trades.forEach((sub: SubscriptionState) => {
					const subscriptionEntry = { fullname, ...sub };
					subscriptions.push(subscriptionEntry);
				});
			});

			await Promise.all(subscriptionPromises);
		} catch (error) {
			console.error("Error fetching users:", error);
			return [];
		}
	};

	const fetchAllVerifications = async () => {
		const verifications: VerificationState[] = [];
		try {
			const data = await getDocs(collection(db, "verifications"));
			const verificationPromises = data.docs.map(async (verificationData) => {
				const userDoc = await getDoc(doc(db, "users", verificationData.id));
				const userData = userDoc.data();
				const fullname = `${userData?.firstname} ${userData?.lastname}`;

				verificationData.data().verifications.forEach((verification: VerificationState) => {
					const verificationEntry = { fullname, ...verification };
					verifications.push(verificationEntry);
				});
			});
			await Promise.all(verificationPromises);
		} catch (error) {
			console.error("Error fetching users:", error);
			return [];
		}
	};

	return <AdminContext.Provider value={{ state }}>{children}</AdminContext.Provider>;
}

export function useAdminContext() {
	return useContext(AdminContext);
}
