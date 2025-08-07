import { Summary } from "@/types";
import { SummaryCard } from "./summary-card";
import { formatCurrency } from "@/lib/utils";

interface SummaryGroupProps {
  summary: Summary;
}

const DashboardSummary = ({ summary }: SummaryGroupProps) => {
  const cards = [
    {
      title: "Total Balance",
      value: formatCurrency(summary.totalBalance),
      change: summary.balanceChange,
    },
    {
      title: "Total Credits",
      value: formatCurrency(summary.totalCredits),
      change: summary.creditsChange,
    },
    {
      title: "Total Debits",
      value: formatCurrency(summary.totalDebits),
      change: summary.debitsChange,
    },
    {
      title: "Transactions",
      value: summary.transactionCount.toString(),
      change: summary.transactionChange,
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, idx) => (
        <SummaryCard key={idx} {...card} isLoading={false} />
      ))}
    </div>
  );
};

export default DashboardSummary;
