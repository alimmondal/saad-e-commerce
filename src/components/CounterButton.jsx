import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "../themes/colors";
import Text from "./text/text";

export default function CounterButton({ style, amount, setAmount }) {
  const onIncrement = () => {
    setAmount(amount + 1);
  };
  const onDecrement = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };
  return (
    <View style={[styles.wrapper, style]}>
      <Pressable onPress={onDecrement} style={styles.counterBtn}>
        <Text style={styles.btnText} textColor="#000">
          -
        </Text>
      </Pressable>
      <Text>{amount}</Text>
      <Pressable onPress={onIncrement} style={styles.counterBtn}>
        <Text style={styles.btnText} textColor="#000">
          +
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    width: 120,
    height: 48,
    flexDirection: "row",
    backgroundColor: colors.gray,
    borderRadius: 4,
  },
  counterBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "black",
  },
});
