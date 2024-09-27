"use client";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BankTabItem } from "./BankTabItem";
import BankInfo from "./BankInfo";

import { Pagination } from "./Pagination";
import { Account, RecentTransactionsProps } from "@/types";
import TransactionTable from "./TransactionTable";
import { useState } from "react";

const RecentTransactions = ({
  accounts,
  transactions = [],
  appwriteItemId,
  page = 1,
}: RecentTransactionsProps) => {
  const rowsPerPage = 10;
  const totalPages = Math.ceil(transactions.length / rowsPerPage);
  const indexOfLastTransaction = page * rowsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );
  const [selected, setselected] = useState(accounts[0]?.id);

  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">Recent transactions</h2>
        <Link
          href={`/transaction-history/?id=${appwriteItemId}`}
          className="view-all-btn"
        >
          View all
        </Link>
      </header>

      <Tabs defaultValue={accounts[0]?.id} className="w-full">
        <TabsList className="recent-transactions-tablist">
          {accounts.map((account: Account) => {
            let val = account.appwriteItemId;
            return (
              <TabsTrigger
                key={account.id}
                value={account.id}
                onClick={() => setselected(account.id)}
              >
                <BankTabItem
                  key={account.id}
                  account={account}
                  appwriteItemId={selected}
                />
              </TabsTrigger>
            );
          })}
        </TabsList>

        {accounts.map((account: Account) => {
          let val = account.appwriteItemId;
          return (
            <TabsContent
              value={account.id}
              key={account.id}
              className="space-y-4"
            >
              <BankInfo account={account} appwriteItemId={val} type="full" />

              <TransactionTable transactions={currentTransactions} />

              {totalPages > 1 && (
                <div className="my-4 w-full">
                  <Pagination totalPages={totalPages} page={page} />
                </div>
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    </section>
  );
};

export default RecentTransactions;
