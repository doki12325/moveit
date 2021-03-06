import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { NativeEventEmitter, NativeModules } from "react-native";

import imagebg from "../assets/blurry-gradient.png";
import loclogo from "../assets/loclogo.png";

import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  // const { AlanManager, AlanEventEmitter } = NativeModules;
  // const alanEventEmitter = new NativeEventEmitter(AlanEventEmitter);
  // const subscription = alanEventEmitter.addListener("command", (data) => {
  //   console.log(`got command event ${JSON.stringify(data)}`);
  // });
  // const alanKey =
  //   "3aac396be1e4ff54f2c877a96794f5f22e956eca572e1d8b807a3e2338fdd0dc/stage";
  const windowHeight = useWindowDimensions().height;
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ImageBackground source={imagebg} style={styles.imgbg}>
        <View style={styles.container}>
          <Header navigation={navigation} />
          <Text style={styles.maintext}>Search. Click. Move.</Text>
          <KeyboardAvoidingView style={styles.maincontainer}>
            <View style={styles.locationcont2}>
              <View style={styles.loclogocont}>
                <Image source={loclogo} style={styles.loclogo} />
              </View>
              <View style={styles.locationcont3}>
                <View style={styles.locationcont}>
                  <Text style={styles.locationtext}>Pickup Location</Text>
                  <TextInput autoCapitalize="words">Delhi</TextInput>
                </View>
                <View style={styles.locationcont1}>
                  <Text style={styles.locationtext}>Drop Location</Text>
                  <TextInput autoCapitalize="words">Bangalore</TextInput>
                </View>
              </View>
            </View>
            <View style={styles.pricecont}>
              <Pressable
                android_ripple={{
                  color: "#d4dccd",
                  borderless: true,
                  foreground: false,
                }}
              >
                <Text style={styles.pricetext}>Check Price</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
          {/* <AlanView projectid={alanKey} /> */}
          <Footer navigation={navigation} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgbg: {
    width: "100%",
    height: "100%",
  },
  maincontainer: {
    width: "90%",
    height: "30%",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 30,
    marginBottom: "35%",
  },
  locationcont3: {
    height: "100%",
  },
  locationcont2: {
    flex: 2,
    alignItems: "center",
    flexDirection: "row",
  },
  locationcont: {
    backgroundColor: "white",
    borderTopRightRadius: 10,
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    justifyContent: "space-evenly",
    borderBottomColor: "#d0d0d0",
    borderBottomWidth: 1,
    // height: "18%",
  },
  locationcont1: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    justifyContent: "space-evenly",
    borderBottomColor: "#d0d0d0",
    borderBottomWidth: 1,
    // height: "18%",
  },
  pricecont: {
    // height: "18%",
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  loclogo: {
    width: 120,
    height: "100%",
    resizeMode: "contain",
    marginLeft: "30%",
    marginBottom: "15%",
  },
  pricetext: {
    color: "white",
  },
  locationtext: {
    fontSize: 10,
    color: "#909090",
  },
  loclogocont: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "15%",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    resizeMode: "contain",
  },
  maintext: {
    fontSize: 30,
    fontWeight: "400",
    fontStyle: "italic",
    marginBottom: "25%",
  },
});

export default Home;
