import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";

class NewsList extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollV}>
          <Text style={{ fontSize: 28, color: "#0086F8", fontWeight: 900 }}>
            NEWS
          </Text>
          <NewsCard
            headLine="Lalaki, patay sa pamamaril sa Tondo"
            location="Tondo Manila, Philippines"
            link="https://www.gmanetwork.com/news/balitambayan/balita/858217/lalaki-patay-sa-pamamaril-sa-tondo/story/"
          />
          <NewsCard
            headLine="Grade 4 ginahasa na, pinatay pa!"
            location="Manila, Philippines"
            link="https://www.philstar.com/pilipino-star-ngayon/probinsiya/2023/03/06/2249606/grade-4-ginahasa-na-pinatay-pa"
          />
          <NewsCard
            headLine="Graduating student ninakawan at pinatay sa Cavite"
            location="Cavite, Philippines"
            link="https://news.abs-cbn.com/news/03/29/23/graduating-student-ninakawan-at-pinatay-sa-cavite"
          />
          <NewsCard
            headLine="Lalaki, patay sa pamamaril sa Tondo"
            location="Tondo Manila, Philippines"
            link="https://www.gmanetwork.com/news/balitambayan/balita/858217/lalaki-patay-sa-pamamaril-sa-tondo/story/"
          />
          <NewsCard
            headLine="Grade 4 ginahasa na, pinatay pa!"
            location="Manila, Philippines"
            link="https://www.philstar.com/pilipino-star-ngayon/probinsiya/2023/03/06/2249606/grade-4-ginahasa-na-pinatay-pa"
          />
          <NewsCard
            headLine="Graduating student ninakawan at pinatay sa Cavite"
            location="Cavite, Philippines"
            link="https://news.abs-cbn.com/news/03/29/23/graduating-student-ninakawan-at-pinatay-sa-cavite"
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    zIndex: 2,
  },
  scrollV: {
    flex: 1,
    width: "85%",
    height: "100%",
    alignSelf: "center",

    borderRadius: 10,
  },
});

const NewsCard = ({ headLine, location, link }) => {
  const handleOpenLink = () => {
    const url = link; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open link:", err)
    );
  };

  return (
    <TouchableOpacity style={cardStyle.card} onPress={handleOpenLink}>
      <Text style={{ fontSize: 18, color: "black", fontWeight: 900 }}>
        {headLine}
      </Text>
      <Text style={{ fontSize: 12, color: "grey", fontWeight: 400 }}>
        {location}
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "black",
          fontWeight: 400,
          marginBottom: 10,
        }}
        numberOfLines={2}
      >
        Link: {link}
      </Text>
    </TouchableOpacity>
  );
};

const cardStyle = StyleSheet.create({
  card: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
});

export default NewsList;
