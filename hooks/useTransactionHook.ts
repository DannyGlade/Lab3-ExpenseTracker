import { useState } from "react";

import { Transaction, TransactionState } from "@/constants/Types";

export type TransactionHook = {
  transactionState: TransactionState;
  addTransaction: (transaction: Transaction) => void;
  deleteTransaction: (id: string) => void;
  updateTransaction: (transaction: Transaction) => void;
  clearTransactions: () => void;
  getTransaction: (id: string) => Transaction | undefined;
};

export function useTransactionHook(): TransactionHook {
  const [transactionState, setTransactionState] = useState<TransactionState>({
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
      }
    ],
    totalTransactions: 0,
    totalBalance: 0,
    highestTransaction: null,
    lowestTransaction: null,
  });

  const addTransaction = (transaction: Transaction) => {
    setTransactionState((prevState) => {
      const transactions = [...prevState.transactions, transaction];
      const totalTransactions = transactions.length;
      const totalBalance = transactions.reduce(
        (acc, curr) => acc + curr.amount,
        0
      );
      const highestTransaction = transactions.reduce((prev, curr) =>
        prev.amount > curr.amount ? prev : curr
      );
      const lowestTransaction = transactions.reduce((prev, curr) =>
        prev.amount < curr.amount ? prev : curr
      );

      return {
        transactions,
        totalTransactions,
        totalBalance,
        highestTransaction,
        lowestTransaction,
      };
    });
  };

  const deleteTransaction = (id: string) => {
    setTransactionState((prevState) => {
      const transactions = prevState.transactions.filter(
        (transaction) => transaction.id !== id
      );
      const totalTransactions = transactions.length;
      const totalBalance = transactions.reduce(
        (acc, curr) => acc + curr.amount,
        0
      );
      const highestTransaction = transactions.reduce((prev, curr) =>
        prev.amount > curr.amount ? prev : curr
      );
      const lowestTransaction = transactions.reduce((prev, curr) =>
        prev.amount < curr.amount ? prev : curr
      );

      return {
        transactions,
        totalTransactions,
        totalBalance,
        highestTransaction,
        lowestTransaction,
      };
    });
  };

  const updateTransaction = (transaction: Transaction) => {
    setTransactionState((prevState) => {
      const transactions = prevState.transactions.map((prevTransaction) =>
        prevTransaction.id === transaction.id ? transaction : prevTransaction
      );
      const totalBalance = transactions.reduce(
        (acc, curr) => acc + curr.amount,
        0
      );
      const highestTransaction = transactions.reduce((prev, curr) =>
        prev.amount > curr.amount ? prev : curr
      );
      const lowestTransaction = transactions.reduce((prev, curr) =>
        prev.amount < curr.amount ? prev : curr
      );

      return {
        transactions,
        totalTransactions: transactions.length,
        totalBalance,
        highestTransaction,
        lowestTransaction,
      };
    });
  };

  const clearTransactions = () => {
    setTransactionState({
      transactions: [],
      totalTransactions: 0,
      totalBalance: 0,
      highestTransaction: null,
      lowestTransaction: null,
    });
  };

  const getTransaction = (id: string) => {
    return transactionState.transactions.find(
      (transaction) => transaction.id === id
    );
  };

  return {
    transactionState,
    addTransaction,
    deleteTransaction,
    updateTransaction,
    clearTransactions,
    getTransaction,
  };
}
