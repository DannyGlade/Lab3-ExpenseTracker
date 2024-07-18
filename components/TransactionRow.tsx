import { Transaction } from "@/constants/Types";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

type TransactionRowProps = {
  transaction: Transaction;
};

const TransactionRow = ({ transaction }: TransactionRowProps) => {
  const roter = useRouter();
  return (
    <View style={styles.row}>
      <View>
        <Text>{transaction.title}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View>
          <Text
            style={{
              color: transaction.amount > 0 ? "green" : "red",
            }}
          >{`${transaction.amount.toFixed(2)} $`}</Text>
        </View>
        <Pressable
          style={{ marginLeft: 10 }}
          onPress={() => {
            roter.push({
              pathname: "/Details",
              params: { id: transaction.id },
            });
          }}
        >
          <Ionicons name={"chevron-forward"} size={24} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default TransactionRow;
