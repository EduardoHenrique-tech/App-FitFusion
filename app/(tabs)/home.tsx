import React, { useState, useEffect } from "react";

import {
  View,
  KeyboardAvoidingView,
  Image,
  Dimensions,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");
const imgbg = "../../assets/images/bgfundo2.png";

export default function Home() {
  /* rota */
 const router = useRouter();
 const goTreinos = () => {
   router.push("/treinos");
 };
 const goArtigos = () => {
   router.push("/artigos");
 };
  return (
    <View style={styles.imgContainer}>
      <ImageBackground source={require(imgbg)} style={styles.imgBack}>
        <KeyboardAvoidingView style={styles.background}>
          <View style={styles.configContainer}>
            <View style={styles.containerLogo}>
              <Image
                style={styles.logoLogin}
                source={require("../../assets/images/logo2.png")}
              />
            </View>
            <View style={styles.configctnerhome}>
              <Text style={styles.headLine}>
                Olá, <Text style={styles.span}>USUÁRIO!</Text>
              </Text>
              <Text style={styles.contenthome}>
                É fundamental que você dedique tempo para analisar
                detalhadamente seus treinos.
              </Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.trainButton]} onPress={goTreinos}>
                  <Text style={styles.buttonText}>Treinos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.tipsButton]} onPress={goArtigos}>
                  <Text style={styles.buttonText}>Dicas</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
  },
  imgBack: {
    width: "100%",
    height: "100%",
  },

  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.95)",
  },
  configContainer: {
    width: "100%",
    
    alignItems: "center",
    top: -35,
    justifyContent: "center",
  },
  containerLogo: {
    bottom: 10,
    justifyContent: "center",
  },
  logoLogin: {
    width: width > 350 ? 200 : 175,
    height: width > 350 ? 75 : 75,
    borderWidth: 0,
  },

  //text config

  configctnerhome: {
    paddingHorizontal: 25,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  headLine: {
    fontSize: width > 350 ? 50 : 40,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  span: {
    color: "#00FFb3",
  },

  contenthome: {
    maxWidth: 352,
    width: "100%",
    color: "#fff",
    textAlign: "center",
    fontSize: width > 350 ? 14 : 14, 
  },

  //buttons

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    top: 10
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
  },
  trainButton: {
    backgroundColor: '#00BB83',
  },
  tipsButton: {
    backgroundColor: '#1E1E1E',
  },
  buttonText: {
    fontSize: width > 350 ? 25 : 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
