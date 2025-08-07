/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Tabs from "./dashboard-tab";
import DashboardSummary from "./dashboard-summary";
import { dashboardSummaryData, transactions } from "@/lib/constants";
import Table from "./table";
import TransactionTable from "./transaction-table";

const DashBoardBody = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");

  const columns = [
    {
      header: "S/N",
      cell: (item: any) => (
        <div className="flex items-center gap-5 px-3">
          <span className="py-[14px]">{item.id + 1}</span>
        </div>
      ),
    },
    {
      header: "Code",
      cell: (item: any) => (
        <div className={`flex flex-col`}>
          <span className="px-3 py-[14px] text-blue-500">{item.code}</span>
        </div>
      ),
    },
    {
      header: "Title",
      cell: (item: any) => <span className="px-3">{item.phrase}</span>,
    },
    {
      header: "Category",
      cell: (item: any) => (
        <div className="flex items-center gap-1 px-3">{item.category}</div>
      ),
    },
    {
      header: "Short description",
      cell: (item: any) => (
        <div className="flex items-center justify-between pl-[12px]">
          <span>{item.shortDescription}</span>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-7">
        {activeTab === "overview" && (
          <div className="flex flex-col gap-7">
            <DashboardSummary summary={dashboardSummaryData} />

            <div className="">
              <TransactionTable />
            </div>
          </div>
        )}

        {activeTab === "transactions" && (
          <div>
            <h2 className="text-lg font-semibold">Transactions Content</h2>
            <p>This is the transactions section.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoardBody;
