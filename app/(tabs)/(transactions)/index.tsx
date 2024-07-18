import TransactionRow from "@/components/TransactionRow";
import {
  Transaction,
  TransactionState,
  TypeTransactionState,
} from "@/constants/Types";
import { TransactionHook } from "@/hooks/useTransactionHook";
import store from "@/redux/store";
import { useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  SafeAreaView,
  Button,
} from "react-native";

const Index = () => {
  const router = useRouter();

  const transactionState = store.getState().transactions;

  return (
    <SafeAreaView>
      <View>
        <Text
          style={{
            fontSize: 30,
            textAlign: "left",
            marginHorizontal: 10,
          }}
        >
          Transactions
        </Text>
      </View>
      <ScrollView
        style={{ marginTop: 20, marginHorizontal: 0, height: "100%" }}
      >
        {transactionState.transactions.map((transaction: Transaction) => (
          <TransactionRow key={transaction.id} transaction={transaction} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Index;
