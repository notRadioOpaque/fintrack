import { Icon } from "@iconify/react";

interface SummaryCardProps {
  title: string;
  value: string;
  change: number;
  isLoading?: boolean;
}

export function SummaryCard({
  title,
  value,
  change,
  isLoading = false,
}: SummaryCardProps) {
  const colorClass = Number(change) < 0 ? "text-red-500" : "text-[#3E7383]";

  return (
    <div className="bg-[#34616F]/9 rounded-[20px] p-4 md:p-7 flex flex-col gap-3 md:gap-[18px] w-full">
      <div className="flex items-center justify-between">
        {isLoading ? (
          <div className="h-4 w-24 bg-[#34616F]/18 rounded animate-pulse" />
        ) : (
          <h3 className="text-sm lg:text-[17px] font-bold">{title}</h3>
        )}

        <button>
          <Icon icon="ri:more-fill" className="h-4 w-4 text-gray-500" />
        </button>
      </div>

      {isLoading ? (
        <div className="h-7 md:h-10 w-32 bg-[#34616F]/18 rounded animate-pulse" />
      ) : (
        <p className="text-2xl md:text-4xl font-bold">{value}</p>
      )}

      {isLoading ? (
        <div className="h-3 w-12 bg-[#34616F]/18 rounded animate-pulse" />
      ) : (
        <span className={`text-xs  ${colorClass}`}>
          {change >= 0 ? `+${change}%` : `${change}%`}
        </span>
      )}
    </div>
  );
}
