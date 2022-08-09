import React from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import BannerTitle from "../components/banner-title";
import Button from "../components/button";
import CounterButton from "../components/CounterButton";
import Text from "../components/text/text";
import {
  addToCart,
  deleteFromCart,
  reset,
  selectCart,
  selectTotalAmount,
} from "../store/cartSlice";
import { colors } from "../themes/colors";
import { spacing } from "../themes/spacing";

export default function Cart({ navigation }) {
  const cart = useSelector(selectCart);
  const totalAmount = useSelector(selectTotalAmount);
  const dispatch = useDispatch();

  const onAmountChange = (value, cartItem) => {
    if (value === 0) {
      return Alert.alert("Remove item?", "Do you really want to remove?", [
        { text: "Cancel", style: "cancel", onPress: () => {} },
        {
          text: "Remove",
          onPress: () => dispatch(deleteFromCart({ id: cartItem.id })),
        },
      ]);
    }

    //update price on cart product
    const cartProduct = {
      ...cartItem,
      quantityPrice: value * cartItem.price,
      amount: value,
    };
    dispatch(addToCart({ cartProduct }));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <BannerTitle />
        <View style={{ flex: 1, margin: spacing[5] }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text preset="h6">{`Cart (${cart.length})`}</Text>
            <Pressable onPress={() => dispatch(reset())}>
              <Text
                textColor="#757575"
                centered
                style={{
                  textDecorationLine: "underline",
                  fontWeight: "bold",
                }}
              >
                Remove all
              </Text>
            </Pressable>
          </View>

          <View style={{ marginVertical: spacing[5] }}>
            {cart.map((item) => {
              const { featuredImage, name, quantityPrice, amount } = item;
              return (
                <View
                  key={item.id}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: spacing[2],
                  }}
                >
                  <View
                    style={{
                      backgroundColor: colors.gray,
                      borderRadius: 12,
                      alignItems: "center",
                      justifyContent: "center",
                      padding: spacing[5],
                    }}
                  >
                    <Image
                      source={featuredImage.source}
                      style={{ height: 36, width: 36 }}
                      resizeMode="contain"
                    />
                  </View>

                  <View style={{ flex: 1, marginLeft: spacing[3] }}>
                    <Text preset="h6">{name}</Text>
                    <Text>{`$ ${quantityPrice}`}</Text>
                  </View>

                  <CounterButton
                    initialVal={amount}
                    setAmount={(value) => {
                      onAmountChange(value, item);
                    }}
                  />
                </View>
              );
            })}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                margin: spacing[5],
              }}
            >
              <Text>Total</Text>
              <Text preset="h5">{`$ ${totalAmount}`}</Text>
            </View>
          </View>
        </View>
        <View
          style={{ flex: 1, justifyContent: "flex-end", margin: spacing[5] }}
        >
          <Button
            title="CHECKOUT"
            style={{ width: "100%" }}
            onPress={() => {
              navigation.navigate("Checkout");
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
