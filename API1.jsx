import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect, useState } from "react";

import PostCard1 from "./PostCard1";

const API1 = () => {
    //This state will hold the data fetched from the API.
    const [Data, setData] = useState(null);

    const getAPI = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "GET"
        });
        // Converting the data into an object format
        return await response.json();
    };

    useEffect(() => {
        getAPI().then((data) => {
            setData(data);
        });
    }, []);

    return (
        <View style={styles.container}>
            {Data ? Data.map((e) => (
                // names of the props given here are Mytitle and Mybody
                <PostCard1 key={e.id} Mytitle={e.title} Mybody={e.body} />
            )) : <Text style={styles.noData}>No Data Found</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    noData: {
        fontSize: 16,
        textAlign: 'center',
        margin: 20,
        color: 'red',
    },
});

export default API1;
