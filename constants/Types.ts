
export type Transaction = {
  id: string;
  title: string;
  amount: number;
  date: string;
  location: string;
};

export type TransactionState = {
  transactions: Transaction[];
  totalTransactions: number;
  totalBalance: number;
  highestTransaction: Transaction | null;
  lowestTransaction: Transaction | null;
};


export type TypeTransactionState = {
  transactionState: TransactionState;
  setTransactionState: React.Dispatch<React.SetStateAction<TransactionState>>;
};
