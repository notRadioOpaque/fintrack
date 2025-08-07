/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Tabs from "./dashboard-tab";
import DashboardSummary from "./dashboard-summary";
import { dashboardSummaryData } from "@/lib/constants";
import TransactionTable from "./transaction-table";

const DashBoardBody = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");

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
