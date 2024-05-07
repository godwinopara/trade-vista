import { Navigate, Outlet } from "react-router-dom";

export default function AdminProtectedRoutes() {
	const localStorageToken = localStorage.getItem("token");

	return localStorageToken ? <Outlet /> : <Navigate to="/signin" replace />;
}
