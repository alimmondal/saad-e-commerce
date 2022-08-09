import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BannerTitle from "../components/banner-title";
import Text from "../components/text/text";
import { spacing } from "../themes/spacing";

export default function Checkout({ navigation }) {
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
        <View
          style={{
            margin: spacing[4],
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text preset="h3">Thank for your order/checkout</Text>
        </View>

        <Image
          source={require("../../assets/images/giphy.gif")}
          style={{
            alignSelf: "center",
            width: "100%",
            height: 500,
          }}
          resizeMode="contain"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
