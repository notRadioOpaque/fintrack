import { Summary } from "@/types";
import { SummaryCard } from "./summary-card";

interface SummaryGroupProps {
  summary: Summary;
}

const DashboardSummary = ({ summary }: SummaryGroupProps) => {
  const cards = [
    {
      title: "Total Balance",
      value: summary.totalBalance,
      change: summary.balanceChange,
    },
    {
      title: "Total Credits",
      value: summary.totalCredits,
      change: summary.creditsChange,
    },
    {
      title: "Total Debits",
      value: summary.totalDebits,
      change: summary.debitsChange,
    },
    {
      title: "Transactions",
      value: summary.transactionCount,
      change: summary.transactionChange,
    },
  ];

  return (
    <div className="flex gap-4">
      {cards.map((card, idx) => (
        <SummaryCard key={idx} {...card} />
      ))}
    </div>
  );
};

export default DashboardSummary;
