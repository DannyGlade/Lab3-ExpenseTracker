import { TypeTransactionState } from "@/constants/Types";
import { TransactionHook } from "@/hooks/useTransactionHook";
import { Stack } from "expo-router";

type StackLayoutProps = TransactionHook;

export default function StackLayout({ transactionState }: StackLayoutProps) {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Transactions", headerShown: false }}
      />
      <Stack.Screen name="Details" options={{ title: "Transaction Details" }} />
      <Stack.Screen name="Add" options={{ title: "Add Transaction" }} />
    </Stack>
  );
}
