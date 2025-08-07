"use client";

import { Transaction } from "@/types";
import Table, { TableColumn } from "./table";
import { transactions } from "@/lib/constants";
import StatusBadge from "./status-badge";
import { formatCurrency } from "@/lib/utils";

export default function TransactionTable() {
  const columns: TableColumn<Transaction>[] = [
    {
      header: "Date",
      accessor: "date",
      cell: (item) => (
        <div className="h-full mr-[18px] flex items-center border-b border-gray-200">
          {item.date}
        </div>
      ),
      sortable: true,
    },
    {
      header: "Remark",
      accessor: "remark",
      cell: (item) => (
        <div className="h-full mr-[18px] flex items-center border-b border-gray-200">
          {item.remark}
        </div>
      ),
      sortable: true,
    },
    {
      header: "Amount",
      accessor: "amount",
      cell: (item) => (
        <div
          className={`h-full mr-[18px] flex items-center border-b border-gray-200 ${
            item.type !== "Credit" ? "text-red-500" : "text-green-500"
          }`}
        >
          {formatCurrency(item.amount.toString())}
        </div>
      ),
      sortable: true,
    },
    {
      header: "Currency",
      accessor: "currency",
      cell: (item) => (
        <div className="h-full mr-[18px] flex items-center border-b border-gray-200">
          {item.currency}
        </div>
      ),
      sortable: true,
    },
    {
      header: "Type",
      accessor: "type",
      cell: (item) => (
        <div className="h-full flex items-center border-b border-gray-200">
          <StatusBadge
            label={item.type}
            dotColor={item.type === "Credit" ? "bg-green-500" : "bg-red-500"}
          />
        </div>
      ),
      sortable: true,
    },
  ];

  return (
    <Table columns={columns} isLoading={false} data={transactions || []} /> // change value of isLoading for loading state
  );
}
