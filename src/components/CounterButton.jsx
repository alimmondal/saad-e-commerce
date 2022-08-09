import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "../themes/colors";
import Text from "./text/text";

export default function CounterButton({ style, setAmount, initialVal }) {
  const [count, setCount] = useState(initialVal || 0);
  const onIncrement = () => {
    setCount((prev) => prev + 1);
    setAmount(count + 1);
  };
  const onDecrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
      setAmount(count - 1);
    }
  };
  return (
    <View style={[styles.wrapper, style]}>
      <Pressable onPress={onDecrement} style={styles.counterBtn}>
        <Text style={styles.btnText} textColor="#000">
          -
        </Text>
      </Pressable>
      <Text textColor="#000">{count}</Text>
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
