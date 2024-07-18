import { TransactionState, TypeTransactionState } from "@/constants/Types";
import store from "@/redux/store";
import { deleteTransaction, selectTransactionById } from "@/redux/transactionsSlice";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

const Details = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const transactionState = store.getState().transactions;
  const { id } = useLocalSearchParams();

//   const transaction = transactionState.transactions.find(
//     (transaction) => transaction.id === id
//   );
  const transaction = useSelector(selectTransactionById(id as string));

  return (
    <SafeAreaView>
      <ScrollView style={{ height: "100%" }}>
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
              <Text>{new Date(transaction.date).toDateString()}</Text>
            </View>
            {/* Controls */}
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Pressable
                onPress={() => {}}
                style={{
                  padding: 10,
                  backgroundColor: "lightblue",
                  borderRadius: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Ionicons name={"create"} size={20} color={"black"} />
                <Text
                  style={{
                    color: "black",
                  }}
                >
                  Edit
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  dispatch(deleteTransaction(transaction))
                  router.dismiss();
                }}
                style={{
                  padding: 10,
                  backgroundColor: "red",
                  borderRadius: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Ionicons name={"trash"} size={20} color={"white"} />
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  Delete
                </Text>
              </Pressable>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Details;
