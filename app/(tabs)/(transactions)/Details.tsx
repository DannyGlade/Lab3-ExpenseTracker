import { TransactionState, TypeTransactionState } from "@/constants/Types";
import store from "@/redux/store";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Details = () => {
  const transactionState = store.getState().transactions;
  const { id } = useLocalSearchParams();

  const transaction = transactionState.transactions.find(
    (transaction) => transaction.id === id
  );

  return (
    <SafeAreaView>
      <View>
        {!transaction ? (
          <Text>Transaction not found</Text>
        ) : (
          <>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 30,
                alignItems: "center",
                backgroundColor: transaction.amount > 0 ? "lightgreen" : "pink",
              }}
            >
              <Text
                style={{
                  color: transaction.amount > 0 ? "green" : "red",
                  fontSize: 24,
                }}
              >{`${transaction.amount.toFixed(2)} $`}</Text>
              <Text style={{ fontSize: 20 }}>{transaction.title}</Text>
              <Text>{transaction.location}</Text>
            </View>
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text>Transaction Date</Text>
              <Text>{transaction.date.toDateString()}</Text>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Details;
