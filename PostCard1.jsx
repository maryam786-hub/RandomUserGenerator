import React from "react";
import { View, Text, StyleSheet } from "react-native";

//props parameter, which is used to pass data from the parent (API) component. (where PostCard is used )
const PostCard1 = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title: {props.Mytitle}</Text>
      <Text style={styles.body}>Body: {props.Mybody}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  body: {
    fontSize: 16,
  },
});

export default PostCard1;
