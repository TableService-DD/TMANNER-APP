import { TouchableOpacity, Text, StyleSheet } from "react-native";

function CategoryItem({ item, isEditMode }) {
  // isEditMode 추가
  return (
    <TouchableOpacity style={styles.categoryItem}>
      {isEditMode ? ( // isEditMode에 따라 UI 변경
        <Text style={styles.categoryText}>[EditMode] {item}</Text>
      ) : (
        <Text style={styles.categoryText}>{item}</Text>
      )}
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
