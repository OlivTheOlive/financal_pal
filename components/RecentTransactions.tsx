import { Account, RecentTransactionsProps } from "@/types";
import Link from "next/link";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BankTabItem } from "./BankTabItem";
import BankInfo from "./BankInfo";
import TransactionTable from "./TransactionTable";

const RecentTransactions = ({
  accounts,
  transactions = [],
  appwriteItemId,
  page = 1,
}: RecentTransactionsProps) => {
  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transaction-label">Recent Transactions</h2>
        <Link
          href={`/transaction-history/?id=${appwriteItemId}`}
          className="view-all-btn"
        >
          View All
        </Link>
      </header>
      <Tabs defaultValue={appwriteItemId} className="w-full">
        <TabsList className="recent-transactions-tablist">
          {accounts.map((acc: Account) => (
            <TabsTrigger key={acc.id} value={acc.appwriteItemId}>
              <BankTabItem
                key={acc.id}
                account={acc}
                appwriteItemId={appwriteItemId}
              />
            </TabsTrigger>
          ))}
        </TabsList>
        {accounts.map((acc: Account) => (
          <TabsContent
            key={acc.id}
            value={acc.appwriteItemId}
            className="space-y-4"
          >
            <BankInfo
              key={acc.id}
              appwriteItemId={appwriteItemId}
              account={acc}
              type={"full"}
            />
            <TransactionTable transactions={transactions} />
          </TabsContent>
        ))}
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </section>
  );
};

export default RecentTransactions;
