import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const UserCard = (props) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: props.UserData.picture.medium }}
        style={styles.userImage}
      />
      <Text style={styles.userName}>
        {props.UserData.name.title} {props.UserData.name.first}{" "}
        {props.UserData.name.last}
      </Text>
      <Text style={styles.userInfo}>Phone Number: {props.UserData.phone}</Text>
      <Text style={styles.userInfo}>
        Address: {props.UserData.location.city}, {props.UserData.location.state}
      </Text>
      <Text style={styles.userInfo}>Gender: {props.UserData.gender}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
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
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // To make it a circular image
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userInfo: {
    fontSize: 16,
  },
});

export default UserCard;
