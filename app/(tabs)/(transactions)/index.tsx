import TransactionRow from "@/components/TransactionRow";
import {
  Transaction,
  TransactionState,
  TypeTransactionState,
} from "@/constants/Types";
import { TransactionHook } from "@/hooks/useTransactionHook";
import store from "@/redux/store";
import { selectTransactions } from "@/redux/transactionsSlice";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  SafeAreaView,
  Button,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { useSelector } from "react-redux";

const Index = () => {
  const router = useRouter();

  const transactionState = useSelector(selectTransactions);

  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            fontSize: 30,
            marginHorizontal: 10,
          }}
        >
          Transactions
        </Text>
        <TouchableHighlight
          onPress={() => router.push({ pathname: "/Add" })}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 5,
          }}
        >
          <>
            <Ionicons name={"add"} size={24} color={"#006eff"} />
            <Text
              style={{
                color: "#006eff",
              }}
            >
              Add
            </Text>
          </>
        </TouchableHighlight>
      </View>
      <ScrollView
        style={{ marginTop: 20, marginHorizontal: 0, height: "100%" }}
      >
        {transactionState.transactions.map((transaction: Transaction) => (
          <TransactionRow key={transaction.id} transaction={transaction} />
        ))}
        <View style={{ alignItems: "center" }}>
          <TouchableHighlight
            onPress={() => router.push({ pathname: "/Add" })}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              borderRadius: 5,
            }}
          >
            <>
              <Ionicons name={"add"} size={24} color={"#006eff"} />
              <Text
                style={{
                  color: "#006eff",
                }}
              >
                Add Transaction
              </Text>
            </>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Index;
