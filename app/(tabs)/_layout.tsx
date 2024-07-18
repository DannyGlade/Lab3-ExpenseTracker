import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { TransactionHook } from "@/hooks/useTransactionHook";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

type TabLayoutProps = TransactionHook;

const TabLayout = ({ transactionState }: TabLayoutProps) => {
  const colorScheme = useColorScheme();
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
      initialRouteName="Transactions"
    >
      <Tabs.Screen
        name="(transactions)"
        initialParams={{ transactionState }}
        options={{
          title: "Transactions",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "cash" : "cash-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Summary"
        initialParams={{ transactionState }}
        options={{
          title: "Summary",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "calculator" : "calculator-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
