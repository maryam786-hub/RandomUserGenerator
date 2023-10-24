import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect } from "react";

import UserCard2 from "./UserCard2";

const RandomUser2 = () => {
  // This state will hold the data fetched from the API.
  const [Data, setData] = useState(null);

  const getRandomUser = async () => {
    const response = await fetch("https://randomuser.me/api/", {
      method: "GET",
    });
    // Converting the data into an object format
    return await response.json();
  };

  useEffect(() => {
    getRandomUser().then((data) => {
      setData(data.results[0]);
    });
  }, []);

  const handleRefresh = () => {
    getRandomUser().then((data) => {
      setData(data.results[0]);
    });
  };

  return (
    <View style={styles.container}>
      {Data ? (
        //As the data for this url is an object so we cant use map function
        <UserCard2 UserData={Data} />
      ) : (
        <Text style={styles.noData}>No Data Found</Text>
      )}

      <TouchableOpacity style={styles.refreshButton} onPress={handleRefresh}>
        <Text style={styles.buttonText}>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  noData: {
    fontSize: 16,
    textAlign: "center",
    margin: 20,
    color: "red",
  },
  refreshButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default RandomUser2;
