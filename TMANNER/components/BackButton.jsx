import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Entypo"; // Import the Entypo from react-native-vector-icons
import { View } from "react-native";

function BackButton({ title, description, onEditPress }) {
  // isEdit 제거, onEditPress만 남김
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.headerButton}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="chevron-left" size={32} color="#000" />
      </TouchableOpacity>
      <View style={styles.flex}>
        <View style={styles.titleSection}>
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.headerDesc}>{description}</Text>
        </View>
        <TouchableOpacity style={styles.editButton} onPress={onEditPress}>
          {/* onPress 추가 */}
          <Text style={styles.edit}>수정</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 6,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  titleSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 6,
    paddingHorizontal: 20,
    marginTop: 5,
  },
  editButton: {
    width: 50,
    height: 40,
    backgroundColor: "black",
    padding: 5,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  edit: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  headerTitle: {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 24,
    fontWeight: "bold",
  },
  headerDesc: {
    marginLeft: 10,
    fontSize: 14,
    color: "#757575",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
  },
});

export default BackButton;
