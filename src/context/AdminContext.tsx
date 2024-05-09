import { ReactNode, createContext, useContext, useEffect, useReducer, useState } from "react";
import {
	AccountState,
	DepositState,
	SubscriptionState,
	TradePayload,
	TradeState,
	User,
	VerificationState,
	WithdrawalState,
} from "../types/types";
import { db } from "../lib/firebase";
import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";

interface AdminContextType {
	state: AdminState;
	updateVerificationStatus: (id: string) => void;
	updateSubscription: (id: string) => void;
	updateTrade: (id: string, uid: string, payload: { profit: string; status: string }) => void;
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
	| { type: "GET_ALL_VERIFICATIONS"; payload: VerificationState[] }
	| { type: "UPDATE_VERIFICATIONS"; payload: VerificationState };

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
	updateVerificationStatus: () => null,
	updateSubscription: () => null,
	updateTrade: () => null,
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
		case "UPDATE_VERIFICATIONS":
			return { ...state };
		default:
			return state;
	}
};

export default function AdminProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(adminReducer, initialState);
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		fetchAllUsers();
		fetchAllAccounts();
		fetchAllDeposits();
		fetchAllWithdrawals();
		fetchAllTradeSessions();
		fetchAllVerifications();
		fetchAllSubscription();

		setRefresh(false);
	}, [refresh]);

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
				const acctData = { fullname, uid: userData?.uid, ...acct.data().account };
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
					const withdrawalEntry = { fullname, uid: userData?.uid, ...withdrawal };

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

			const tradePromises = data.docs.map(async (tradeData: any) => {
				const userDoc = await getDoc(doc(db, "users", tradeData.id));
				const userData = userDoc.data();
				const fullname = `${userData?.firstname} ${userData?.lastname}`;

				tradeData.data().trades.forEach((trade: TradeState) => {
					const tradeEntry = { fullname, ...trade, uid: tradeData.id };
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
			const subscriptionPromises = data.docs.map(async (subscriptionData: any) => {
				const userDoc = await getDoc(doc(db, "users", subscriptionData.id));
				const userData = userDoc.data();
				const fullname = `${userData?.firstname} ${userData?.lastname}`;

				const subData = subscriptionData?.data().subscription;
				if (subData?.plan) {
					const subscriptionEntry = {
						fullname,
						uid: userData?.uid,
						...subscriptionData.data().subscription,
					};
					subscriptions.push(subscriptionEntry);
				}
			});

			await Promise.all(subscriptionPromises);
			dispatch({ type: "GET_ALL_SUBSCRIPTIONS", payload: subscriptions });
		} catch (error) {
			console.error("Error fetching users:", error);
			return [];
		}
	};

	const fetchAllVerifications = async () => {
		const verifications: VerificationState[] = [];
		try {
			const data = await getDocs(collection(db, "verifications"));
			const verificationPromises = data.docs.map(async (verificationData: any) => {
				const userDoc = await getDoc(doc(db, "users", verificationData.id));
				const userData = userDoc.data();
				const fullname = `${userData?.firstname} ${userData?.lastname}`;

				const verifyData = verificationData.data().verification;
				if (verifyData.document) {
					const verificationEntry = { fullname, uid: userData?.uid, ...verifyData };
					verifications.push(verificationEntry);
				}
			});
			await Promise.all(verificationPromises);
			dispatch({ type: "GET_ALL_VERIFICATIONS", payload: verifications });
		} catch (error) {
			console.error("Error fetching users:", error);
			return [];
		}
	};

	const updateVerificationStatus = async (id: string) => {
		try {
			const docRef = doc(db, "verifications", id);
			const docSnap = await getDoc(docRef);

			const updateStatus = updateDoc(docRef, {
				verification: {
					document: docSnap.data()?.verification.document,
					status: "verified",
				},
			});
			await toast.promise(updateStatus, {
				loading: "Updating Verification Status",
				success: "Verification Status Updated Successfully",
				error: "Error Occurred, Try Again",
			});

			setRefresh(true);
		} catch (error) {
			console.error("Error fetching users:", error);
			return [];
		}
	};

	const updateSubscription = async (id: string) => {
		try {
			const subscriptionRef = doc(db, "subscriptions", id);

			const subData = setDoc(subscriptionRef, {
				subscriptions: {},
			});

			await toast.promise(subData, {
				loading: "Terminating Subscription",
				success: "Subscription Terminated Successfully",
				error: "Error Occurred Terminating Subscription",
			});

			setRefresh(true);
		} catch (error) {
			console.error("Error Occurred Terminating Subscription:", error);
			return [];
		}
	};

	const updateTrade = async (id: string, uid: string, payload: TradePayload) => {
		try {
			const tradeRef = doc(db, "trades", uid);
			const tradeSnap = await getDoc(tradeRef);

			const updatedState: TradeState[] = [];

			// Update the trade

			const updatedTrade = tradeSnap.data()?.trades.map((trade: TradeState) => {
				if (trade.id === id) {
					updatedState.push({ ...trade, ...payload });
					return { ...trade, ...payload };
				}
				updatedState.push(trade);
				return trade;
			});

			const newTradeState = state.trades.map((trade: TradeState) => {
				if (trade.id === id) {
					return { ...trade, ...payload };
				}
				return trade;
			});

			const updatedTradePromise = updateDoc(tradeRef, {
				trades: updatedTrade,
			});

			await toast.promise(updatedTradePromise, {
				loading: "Updating Trade Result..",
				success: "Trade Result Updated Successfully..",
				error: "Error Occurred",
			});
			setRefresh(true);
			dispatch({ type: "GET_ALL_TRADES", payload: newTradeState });
		} catch (error) {
			console.error("Error Occurred:", error);
			return [];
		}
	};

	return (
		<AdminContext.Provider
			value={{ state, updateVerificationStatus, updateSubscription, updateTrade }}
		>
			{children}
		</AdminContext.Provider>
	);
}

export function useAdminContext() {
	return useContext(AdminContext);
}
