interface SummaryCardProps {
  title: string;
  value: number;
  change: number;
}

export function SummaryCard({ title, value, change }: SummaryCardProps) {
  return (
    <div className="bg-[#34616F]/9 rounded-[20px] p-7 flex flex-col gap-[18px] w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-[17px] font-bold">{title}</h3>
        <button className="">•••</button>
      </div>
      <p className="text-4xl font-bold">{`$${value}`}</p>
      <span className={`text-xs text-[#3E7383]`}>
        {change >= 0 ? `+${change}%` : `${change}%`}
      </span>
    </div>
  );
}
