import clsx from "clsx";

interface StatusBadgeProps {
  label: string;
  dotColor: string;
}

export default function StatusBadge({ label, dotColor }: StatusBadgeProps) {
  return (
    <div className="inline-flex items-center px-2 py-1 rounded-full bg-gray-100">
      <span
        className={clsx("w-1.5 h-1.5 rounded-full mr-2", dotColor)}
        aria-hidden="true"
      ></span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
