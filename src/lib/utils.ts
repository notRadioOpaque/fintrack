export function capitalize(str: string): string {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export function formatCurrency(amount: number | string): string {
  const num = typeof amount === "string" ? parseFloat(amount) : amount;
  return `$${num.toLocaleString("en-US")}`;
}
