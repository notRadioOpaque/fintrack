import { v4 as uuidv4 } from "uuid";

import { app_grid_icon, search_icon } from "@/assets/icons";
import { image_1, image_2, image_3, image_4 } from "@/assets/images";
import { Summary, Transaction } from "@/types";

export const NAV_ITEMS = [
  {
    title: "dashboard",
    href: "/",
  },
  {
    title: "transactions",
    href: "transactions",
  },
  {
    title: "reports",
    href: "reports",
  },
  {
    title: "settings",
    href: "settings",
  },
];

export const NAV_CTAS = [
  {
    alt: "search icon",
    src: search_icon,
    action: () => {},
    width: 24,
    height: 24,
  },
  {
    alt: "app grid",
    src: app_grid_icon,
    action: () => {},
    width: 24,
    height: 24,
  },
  {
    alt: "profile image",
    src: image_1,
    action: () => {},
    width: 40,
    height: 40,
  },
];

export const avatars = [
  { src: image_1, alt: "Ava" },
  { src: image_2, alt: "Liam" },
  { src: image_3, alt: "Noah" },
  { src: image_4, alt: "Emma" },
];

export const tabs = [
  { id: "overview", label: "Overview" },
  { id: "transactions", label: "Transactions" },
];

export const names = ["Ava", "Liam", "Noah", "Emma", "Oliver", "Sophia"];

export const summaryData = [
  {
    id: "total-balance",
    title: "Total Balance",
    value: "$12,345",
    change: "+5%",
  },
  {
    id: "total-credits",
    title: "Total Credits",
    value: "$7,890",
    change: "+3%",
  },
  {
    id: "total-debits",
    title: "Total Debits",
    value: "$4,455",
    change: "-2%",
  },
  {
    id: "transactions",
    title: "Transactions",
    value: "150",
    change: "+10%",
  },
];

export const dashboardSummaryData: Summary = {
  totalBalance: 12345,
  totalCredits: 7890,
  totalDebits: 4455,
  transactionCount: 150,
  balanceChange: 5,
  creditsChange: 3,
  debitsChange: -2,
  transactionChange: 10,
};

export const transactions: Transaction[] = [
  {
    id: uuidv4(),
    date: "2025-08-01",
    remark: "Salary Payment",
    amount: 3500,
    currency: "USD",
    type: "Credit",
  },
  {
    id: uuidv4(),
    date: "2025-08-02",
    remark: "Electricity Bill",
    amount: 120,
    currency: "USD",
    type: "Debit",
  },
  {
    id: uuidv4(),
    date: "2025-08-03",
    remark: "Grocery Shopping",
    amount: 85.5,
    currency: "USD",
    type: "Debit",
  },
  {
    id: uuidv4(),
    date: "2025-08-04",
    remark: "Freelance Project Payment",
    amount: 900,
    currency: "USD",
    type: "Credit",
  },
  {
    id: uuidv4(),
    date: "2025-08-05",
    remark: "Netflix Subscription",
    amount: 15.99,
    currency: "USD",
    type: "Debit",
  },
  {
    id: uuidv4(),
    date: "2025-08-06",
    remark: "Stock Dividend",
    amount: 120,
    currency: "USD",
    type: "Credit",
  },
  {
    id: uuidv4(),
    date: "2025-08-02",
    remark: "Electricity Bill",
    amount: 120,
    currency: "USD",
    type: "Debit",
  },
  {
    id: uuidv4(),
    date: "2025-08-03",
    remark: "Grocery Shopping",
    amount: 85.5,
    currency: "USD",
    type: "Debit",
  },
  {
    id: uuidv4(),
    date: "2025-08-04",
    remark: "Freelance Project Payment",
    amount: 900,
    currency: "USD",
    type: "Credit",
  },
  {
    id: uuidv4(),
    date: "2025-08-05",
    remark: "Netflix Subscription",
    amount: 15.99,
    currency: "USD",
    type: "Debit",
  },
  {
    id: uuidv4(),
    date: "2025-08-06",
    remark: "Stock Dividend",
    amount: 120,
    currency: "USD",
    type: "Credit",
  },
  {
    id: uuidv4(),
    date: "2025-08-02",
    remark: "Electricity Bill",
    amount: 120,
    currency: "USD",
    type: "Debit",
  },
  {
    id: uuidv4(),
    date: "2025-08-03",
    remark: "Grocery Shopping",
    amount: 85.5,
    currency: "USD",
    type: "Debit",
  },
  {
    id: uuidv4(),
    date: "2025-08-04",
    remark: "Freelance Project Payment",
    amount: 900,
    currency: "USD",
    type: "Credit",
  },
  {
    id: uuidv4(),
    date: "2025-08-05",
    remark: "Netflix Subscription",
    amount: 15.99,
    currency: "USD",
    type: "Debit",
  },
  {
    id: uuidv4(),
    date: "2025-08-06",
    remark: "Stock Dividend",
    amount: 120,
    currency: "USD",
    type: "Credit",
  },
];
