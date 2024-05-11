import { Navigate, Outlet } from "react-router-dom";

export default function AdminProtectedRoutes() {
	const localStorageToken = localStorage.getItem("admin");
	console.log(localStorageToken);

	return localStorageToken === "true" ? <Outlet /> : <Navigate to="/signin" replace />;
}
