// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "./home";

export default class App extends React.Component {
  // state = {
  //   myState:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod fgfhgkjljl",
  // };
  render() {
    return (
      <View style={styles.container}>
        {/* <Text> {this.state.myState} </Text> */}
        <Button />
      </View>
    );
  }
}

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>change{2 + 2}</Text>
//       {/* <StatusBar style="auto" /> */}
//     </View>
//   );
// }

// return (
//   <View style={styles.container}>
//     <Text>Open up App.js to start working on your app!</Text>
//     {/* <StatusBar style="auto" /> */}
//   </View>
// );

// return (
//   <View style={styles.container}>
//     <Text>change{2 + 2}</Text>
//     {/* <StatusBar style="auto" /> */}
//   </View>
// );

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
