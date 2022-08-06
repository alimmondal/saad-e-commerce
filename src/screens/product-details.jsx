import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import BannerTitle from "../components/banner-title";
import Button from "../components/button";
import CounterButton from "../components/CounterButton";
import Text from "../components/text/text";
import { addToCart } from "../store/cartSlice";
import { selectProductById } from "../store/productSlice";
import { colors } from "../themes/colors";
import { spacing } from "../themes/spacing";

export default function Details({ navigation, route }) {
  const id = route.params.id;
  const product = useSelector((state) => selectProductById(state, id));
  // console.log("pd", product);
  const {
    featuredImage,
    name,
    price,
    description,
    category,
    features,
    included,
    includedItems,
    images,
  } = product;
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const add = () => {
    if (amount === 0) {
      return showMessage({
        message: "You cannot add 0 items",
        type: "danger",
      });
    }
    //create cart product
    const cartProduct = {
      id,
      name,
      featuredImage,
      price,
      amount,
      quantityPrice: price * amount,
    };

    // add the product to our cart to the store
    dispatch(addToCart({ cartProduct }));

    // show success message
    showMessage({
      message: "product added to cart successfully",
      type: "success",
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <BannerTitle />
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-sharp"
            size={24}
            color="black"
            style={{ margin: spacing[5] }}
          />
        </Pressable>
        <View style={{ margin: spacing[5] }}>
          <View
            style={{
              backgroundColor: colors.gray,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: spacing[8],
            }}
          >
            <Image
              source={featuredImage.source}
              style={{ width: 172, height: 180 }}
            />
          </View>

          <View style={{ paddingVertical: spacing[5] }}>
            <Text preset="h4">{name}</Text>
            <Text uppercase preset="h4">
              {category}
            </Text>
            <Text textColor="#7d7d7d" style={{ marginTop: spacing[5] }}>
              {description}
            </Text>
            <Text preset="h4" style={{ marginTop: spacing[5] }}>
              {`$ ${price}`}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: spacing[6],
            }}
          >
            <CounterButton amount={amount} setAmount={setAmount} />
            <Button
              title="Add to cart"
              style={{ marginLeft: spacing[4] }}
              onPress={add}
            />
          </View>

          <View style={{ marginVertical: spacing[4] }}>
            <Text
              textColor="#7d7d7d"
              style={{ paddingTop: spacing[5], lineHeight: 25 }}
            >
              {features}
            </Text>
          </View>

          {includedItems && (
            <View style={{ marginVertical: spacing[5] }}>
              <Text preset="h4">IN THE BOX</Text>
              {includedItems.map((item) => (
                <View
                  key={item.name}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: spacing[3],
                  }}
                >
                  <Text preset="h6" textColor={colors.primary}>
                    {item.amount}x
                  </Text>
                  <Text textColor="#7d7d7d" style={{ marginLeft: spacing[3] }}>
                    {item.name}
                  </Text>
                </View>
              ))}
            </View>
          )}

          <View style={{ marginVertical: spacing[6] }}>
            {images.map((image, index) => {
              return (
                <View
                  key={index.toString()}
                  style={{
                    marginVertical: spacing[3],
                    overflow: "hidden",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: colors.black,
                    borderRadius: 4,
                  }}
                >
                  <Image
                    source={image.source}
                    style={{
                      alignItems: "center",
                      width: 172,
                      borderRadius: 12,
                      height: 180,
                    }}
                    resizeMode="contain"
                  />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   fImage: {
//     width: 250,
//     height: 100,
//   },
// });
