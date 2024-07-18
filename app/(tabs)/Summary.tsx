import { TypeTransactionState } from "@/constants/Types";
import store from "@/redux/store";
import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Summary = () => {
  const transactionState = store.getState().transactions;

  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 30, textAlign: "left", marginHorizontal: 10 }}>
          Summary
        </Text>
        <ScrollView
          style={{
            marginTop: 20,
            marginHorizontal: 0,
            height: "100%",
            padding: 10,
          }}
        >
          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
            }}
          >
            <Text style={{ fontSize: 18, color: "green" }}>
              Total Savings: {transactionState.totalBalance.toFixed(2)} $
            </Text>
          </View>
          <View
            style={{
              marginBottom: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 18 }}>Summary</Text>
              <Text style={{ fontSize: 18 }}>Amount</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text>Income</Text>
              <Text>
                {transactionState.transactions
                  .filter((transaction) => transaction.amount > 0)
                  .reduce((acc, transaction) => acc + transaction.amount, 0)
                  .toFixed(2)}{" "}
                $
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text>Expense</Text>
              <Text>
                {transactionState.transactions
                  .filter((transaction) => transaction.amount < 0)
                  .reduce((acc, transaction) => acc + transaction.amount, 0)
                  .toFixed(2)}{" "}
                $
              </Text>
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: "#ccc" }} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text>Total</Text>
              <Text>{transactionState.totalBalance.toFixed(2)} $</Text>
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: "#ccc" }} />

            <Text style={{ marginTop: 10, fontSize: 18 }}>
              Transaction Summary
            </Text>

            <View style={{ borderBottomWidth: 1, borderBottomColor: "#ccc" }} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>Total Transactions</Text>
              <Text>{transactionState.totalTransactions}</Text>
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: "#ccc" }} />
            {transactionState.highestTransaction && (
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    marginTop: 10,
                    fontWeight: "bold",
                  }}
                >
                  Highest Transaction
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>{transactionState.highestTransaction.title}</Text>
                  <Text>
                    {transactionState.highestTransaction.amount.toFixed(2)} $
                  </Text>
                </View>
              </View>
            )}
            {transactionState.highestTransaction && (
              <View
                style={{ borderBottomWidth: 1, borderBottomColor: "#ccc" }}
              />
            )}

            {transactionState.lowestTransaction && (
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    marginTop: 10,
                    fontWeight: "bold",
                  }}
                >
                  Lowest Transaction
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>{transactionState.lowestTransaction.title}</Text>
                  <Text>
                    {transactionState.lowestTransaction.amount.toFixed(2)} $
                  </Text>
                </View>
              </View>
            )}
            {transactionState.lowestTransaction && (
              <View
                style={{ borderBottomWidth: 1, borderBottomColor: "#ccc" }}
              />
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Summary;
