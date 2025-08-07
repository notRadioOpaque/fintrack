import { Icon } from "@iconify/react";

interface SummaryCardProps {
  title: string;
  value: string;
  change: number;
}

export function SummaryCard({ title, value, change }: SummaryCardProps) {
  return (
    <div className="bg-[#34616F]/9 rounded-[20px] p-4 md:p-7 flex flex-col gap-3 md:gap-[18px] w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-sm lg:text-[17px] font-bold">{title}</h3>
        <button className="">
          <Icon icon="ri:more-fill" className="h-4 w-4" />
        </button>
      </div>
      <p className="text-2xl md:text-4xl font-bold">{value}</p>
      <span className={`text-xs text-[#3E7383]`}>
        {change >= 0 ? `+${change}%` : `${change}%`}
      </span>
    </div>
  );
}
