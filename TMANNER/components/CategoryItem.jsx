import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function CategoryItem({ item }) {
  return (
    <TouchableOpacity style={styles.categoryItem}>
      <Text style={styles.categoryText}>{item}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryItem: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  categoryText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CategoryItem;
