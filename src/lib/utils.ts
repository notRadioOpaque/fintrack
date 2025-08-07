export function capitalize(str: string): string {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export function formatCurrency(amount: string | number) {
  const num = typeof amount === "string" ? parseFloat(amount) : amount;

  const abs = Math.abs(num);
  const formatted = abs.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return num < 0 ? `-${formatted}` : formatted;
}
