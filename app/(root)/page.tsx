import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { SearchParamProps } from "@/types";
import React from "react";

const Home = async ({ searchParams: { id } }: SearchParamProps) => {
  const loggedIn = await getLoggedInUser();

  const accounts = await getAccounts({ userId: loggedIn?.$id });
  if (!accounts) return;

  const accountsData = accounts?.data;

  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
  console.log("appwriteItemId");
  console.log(appwriteItemId);
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and Manage your finances you bastard"
          />
          <TotalBalanceBox
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
        {/* <RecentTransactions
          accounts={accountsData}
          transactions={account?.transactions}
          // appwriteItemId={appwriteItemId}
          page={currentPage}
        /> */}
      </div>
      {/* <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1234.54 }, { currentBalance: 432.25 }]}
      /> */}
    </section>
  );
};

export default Home;
