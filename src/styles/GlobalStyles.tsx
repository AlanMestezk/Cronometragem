import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create(
  {
    container:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#00aeef"
    },
    timer:{
      marginTop: -160,
      color: "aliceblue",
      fontSize: 65,
      fontWeight: "bold"
    },
    btnArea:{
      flexDirection: "row",
      marginTop: 100,
      height: 40
    },
    button:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "aliceblue",
      height: 40,
      margin: 40,
      borderRadius: 40,
    },
    btnText:{
      fontSize: 20,
      fontWeight: "bold",
      color: "#00aeef"
    }
  }
)

