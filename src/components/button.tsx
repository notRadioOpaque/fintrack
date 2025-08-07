import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "solid" | "transparent";
}

export default function Button({
  children,
  variant = "solid",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-2xl  text-sm font-medium transition-colors focus:outline-none",
        variant === "solid"
          ? "bg-[#4B8B9F] hover:bg-[#4B8B9F]/80 px-5 py-1"
          : "bg-transparent text-gray-800 border border-gray-200 hover:bg-gray-200 px-2 py-1",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
