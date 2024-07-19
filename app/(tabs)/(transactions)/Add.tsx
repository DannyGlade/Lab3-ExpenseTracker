import InputComponent from "@/components/InputComponent";
import {
  addTransaction,
  selectTransactionById,
  updateTransaction,
} from "@/redux/transactionsSlice";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import DatePicker from "react-native-date-picker";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Add = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const transaction = useSelector(selectTransactionById(id as string));
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (id) {
      navigation.setOptions({
        title: "Edit Transaction",
      });

      if (transaction) {
        setTitle(transaction.title);
        setAmount(transaction.amount.toString());
        setLocation(transaction.location);
        setDate(new Date(transaction.date));
      }
    }
  }, []);

  const [errors, setErrors] = useState({
    title: "",
    amount: "",
    date: "",
    location: "",
  });

  const onSubmit = () => {
    validate();
    if (errors.title || errors.amount || errors.location) {
      return;
    }

    try {
      if (id) {
        dispatch(
          updateTransaction({
            id: id as string,
            title,
            amount: +amount,
            location,
            date: date.toString(),
          })
        );
        router.dismiss();
      } else {
        dispatch(
          addTransaction({
            id: uuidv4(),
            title,
            amount: +amount,
            location,
            date: date.toString(),
          })
        );
        router.dismiss();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const validate = () => {
    if (!title) {
      setErrors((prev) => ({ ...prev, title: "Title is required" }));
    } else {
      setErrors((prev) => ({ ...prev, title: "" }));
    }

    if (!amount) {
      setErrors((prev) => ({ ...prev, amount: "Amount is required" }));
    } else {
      setErrors((prev) => ({ ...prev, amount: "" }));
    }

    if (!location) {
      setErrors((prev) => ({ ...prev, location: "Location is required" }));
    } else {
      setErrors((prev) => ({ ...prev, location: "" }));
    }
  };

  return (
    <SafeAreaView>
      <View style={{ padding: 10 }}>
        <InputComponent
          label="Title"
          value={title}
          valueChange={(value) => {
            if (errors.title) {
              validate();
            }
            setTitle(value);
          }}
          error={errors.title}
          placeholder="Enter title"
        />
        <InputComponent
          label="Amount"
          value={amount}
          valueChange={(value) => {
            if (errors.amount) {
              validate();
            }
            setAmount(value);
          }}
          error={errors.amount}
          inputMode="numeric"
          keyboardType="numeric"
          placeholder="Enter amount"
        />
        <View style={{ marginVertical: 10 }}>
          <Text
            style={{
              marginBottom: 5,
              fontSize: 16,
            }}
          >
            Date
          </Text>
          <TouchableHighlight
            onPress={() => setOpen(true)}
            style={{
              borderRadius: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#ccc",
                backgroundColor: "#f9f9f9",
              }}
            >
              <Text
                style={{
                  marginRight: 10,
                }}
              >
                {date.toDateString()}
              </Text>
              <Ionicons name={"calendar"} size={24} color={"#006eff"} />
            </View>
          </TouchableHighlight>
          {errors.date && (
            <Text
              style={{
                color: "red",
                fontSize: 14,
              }}
            >
              {errors.date}
            </Text>
          )}
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => setOpen(false)}
          />
        </View>
        <InputComponent
          label="Location"
          value={location}
          valueChange={(value) => {
            if (errors.location) {
              validate();
            }
            setLocation(value);
          }}
          error={errors.location}
          placeholder="Enter location"
        />
      </View>

      <View
        style={{
          padding: 10,
        }}
      >
        <TouchableHighlight
          onPress={onSubmit}
          style={{
            padding: 10,
            backgroundColor: "#006eff",
            borderRadius: 5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <>
            <Ionicons name={id ? "create" : "add"} size={24} color={"white"} />
            <Text
              style={{
                color: "white",
              }}
            >
              {id ? "Update" : "Add"} Transaction
            </Text>
          </>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Add;
