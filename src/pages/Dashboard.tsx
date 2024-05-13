import React from "react";
import { AdminLayout } from "../components/layouts/AdminLayout";
import { AdminCardDataStats } from "../components/dashboards/CardDataStats";
import { FaUsers } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { useAdminContext } from "../context/AdminContext";

type Props = {};

const Dashboard = (props: Props) => {
	const { state } = useAdminContext();

	const pendingVerification = state.verifications.filter(
		(verification) => verification.status === "pending"
	);
	const pendingWithdrawal = state.withdrawals.filter((withdrawal) => {
		return withdrawal.status === "pending";
	});

	return (
		<AdminLayout>
			<div className="flex flex-col gap-6">
				<div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4  ">
					<AdminCardDataStats
						title="Active Users"
						desc={`${state.users.length}`}
						icon={<FaUsers size={64} />}
						action="More info"
						url="/admin/users"
					/>
					<AdminCardDataStats
						title="Blocked Users"
						desc="0"
						icon={<FaUsers size={64} />}
						action="More info"
						url="/admin/users"
					/>
					<AdminCardDataStats
						title="Pending Verifications"
						desc={`${pendingVerification.length}`}
						icon={<MdOutlineVerifiedUser size={64} />}
						action="More info"
						url="/admin/id-verification"
					/>
					<AdminCardDataStats
						title="Pending Withdrawals"
						desc={`${pendingWithdrawal.length}`}
						icon={<IoWalletOutline size={64} />}
						action="More info"
						url="/admin/withdrawals"
					/>
				</div>
				{/* <StockMarket
          colorTheme=""
          height={600}
          width="100%"
          showChart
        ></StockMarket>
        <DashboardTable />
        <AccountSummary /> */}
			</div>
		</AdminLayout>
	);
};

export default Dashboard;
