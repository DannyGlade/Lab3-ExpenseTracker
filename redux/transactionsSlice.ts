import { Transaction, TransactionState } from "@/constants/Types";
import { createSlice } from "@reduxjs/toolkit";

type TransactionPayload = {
  payload: Transaction;
};

const initialState: TransactionState = {
  transactions: [
    {
      id: "1",
      title: "Groceries",
      amount: -50,
      date: new Date(),
      location: "Walmart",
    },
    {
      id: "2",
      title: "Salary",
      amount: 1000,
      date: new Date(),
      location: "Company",
    },
    {
      id: "3",
      title: "Rent",
      amount: -500,
      date: new Date(),
      location: "Landlord",
    },
    {
      id: "4",
      title: "Gas",
      amount: -30,
      date: new Date(),
      location: "Shell",
    },
    {
      id: "5",
      title: "Dinner",
      amount: -20,
      date: new Date(),
      location: "Olive Garden",
    },
    {
      id: "6",
      title: "Lunch",
      amount: -10,
      date: new Date(),
      location: "Subway",
    },
    {
      id: "7",
      title: "Breakfast",
      amount: -5,
      date: new Date(),
      location: "McDonald's",
    },
    {
      id: "8",
      title: "Car Payment",
      amount: -300,
      date: new Date(),
      location: "Bank",
    },
    {
      id: "9",
      title: "Electric Bill",
      amount: -100,
      date: new Date(),
      location: "Power Company",
    },
    {
      id: "10",
      title: "Water Bill",
      amount: -50,
      date: new Date(),
      location: "Water Company",
    },
    {
      id: "11",
      title: "Bonus",
      amount: 500,
      date: new Date(),
      location: "Company",
    },
  ],
  totalTransactions: 11,
  totalBalance: 985,
  highestTransaction: {
    id: "3",
    title: "Rent",
    amount: -500,
    date: new Date(),
    location: "Landlord",
  },
  lowestTransaction: {
    id: "7",
    title: "Breakfast",
    amount: -5,
    date: new Date(),
    location: "McDonald's",
  },
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action: TransactionPayload) => {
      const transaction = action.payload;
      state.transactions.push(transaction);
      state.totalTransactions = state.transactions.length;
      state.totalBalance = state.transactions.reduce(
        (acc, curr) => acc + curr.amount,
        0
      );
      state.highestTransaction = state.transactions.reduce((prev, curr) =>
        prev.amount > curr.amount ? prev : curr
      );
      state.lowestTransaction = state.transactions.reduce((prev, curr) =>
        prev.amount < curr.amount ? prev : curr
      );
    },

    deleteTransaction: (state, action: TransactionPayload) => {
      const id = action.payload.id;
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== id
      );
      state.totalTransactions = state.transactions.length;
      state.totalBalance = state.transactions.reduce(
        (acc, curr) => acc + curr.amount,
        0
      );
      state.highestTransaction = state.transactions.reduce((prev, curr) =>
        prev.amount > curr.amount ? prev : curr
      );
      state.lowestTransaction = state.transactions.reduce((prev, curr) =>
        prev.amount < curr.amount ? prev : curr
      );
    },

    updateTransaction: (state, action: TransactionPayload) => {
      const transaction = action.payload;
      const index = state.transactions.findIndex(
        (t) => t.id === transaction.id
      );
      state.transactions[index] = transaction;
      state.totalBalance = state.transactions.reduce(
        (acc, curr) => acc + curr.amount,
        0
      );
      state.highestTransaction = state.transactions.reduce((prev, curr) =>
        prev.amount > curr.amount ? prev : curr
      );
      state.lowestTransaction = state.transactions.reduce((prev, curr) =>
        prev.amount < curr.amount ? prev : curr
      );
    },

    clearTransactions: (state) => {
      state.transactions = [];
      state.totalTransactions = 0;
      state.totalBalance = 0;
      state.highestTransaction = null;
      state.lowestTransaction = null;
    },
  },
});

export const {
  addTransaction,
  deleteTransaction,
  updateTransaction,
  clearTransactions,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
