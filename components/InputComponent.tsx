import { TextInput, TextInputProps, Text, View } from "react-native";

type InputComponentProps = {
  label: string;
  value: string;
  valueChange: (value: string) => void;
  error?: string;
} & TextInputProps;
const InputComponent = ({
  label,
  value,
  valueChange,
  error,
  inputMode,
  keyboardType,
  placeholder
}: InputComponentProps) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text
        style={{
          marginBottom: 5,
          fontSize: 16,
        }}
      >
        {label}
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 5,
          backgroundColor: "#f9f9f9",
        }}
        value={value}
        onChangeText={valueChange}
        inputMode={inputMode}
        keyboardType={keyboardType}
        placeholder={placeholder}
      />
      {error && (
        <Text
          style={{
            color: "red",
            fontSize: 14,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
};

export default InputComponent;
