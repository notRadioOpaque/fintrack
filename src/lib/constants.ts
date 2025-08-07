import { v4 as uuidv4 } from "uuid";

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
    date: "2023-10-01",
    remark: "Salary",
    amount: 3000,
    currency: "USD",
    type: "Credit",
  },
  {
    id: uuidv4(),
    date: "2023-10-02",
    remark: "Groceries",
    amount: -150,
    currency: "USD",
    type: "Debit",
  },
  {
    id: uuidv4(),
    date: "2023-10-03",
    remark: "Gym Membership",
    amount: -50,
    currency: "USD",
    type: "Debit",
  },
  {
    id: uuidv4(),
    date: "2023-10-04",
    remark: "Dinner",
    amount: -40,
    currency: "USD",
    type: "Debit",
  },
  {
    id: uuidv4(),
    date: "2023-10-05",
    remark: "Movie Tickets",
    amount: -30,
    currency: "USD",
    type: "Debit",
  },
  {
    id: uuidv4(),
    date: "2023-10-06",
    remark: "Rent",
    amount: -1200,
    currency: "USD",
    type: "Debit",
  },
  {
    id: uuidv4(),
    date: "2023-10-07",
    remark: "Utilities",
    amount: -100,
    currency: "USD",
    type: "Debit",
  },
  {
    id: uuidv4(),
    date: "2023-10-08",
    remark: "Car Payment",
    amount: -400,
    currency: "USD",
    type: "Debit",
  },
  {
    id: uuidv4(),
    date: "2023-10-09",
    remark: "Insurance",
    amount: -200,
    currency: "USD",
    type: "Debit",
  },
];
