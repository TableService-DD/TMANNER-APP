import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import BackButton from "../components/BackButton";
import CategoryItem from "../components/CategoryItem";
import Icon from "react-native-vector-icons/FontAwesome";

function TestScreen() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [category, setCategory] = useState([
    "세트",
    "메인",
    "프리미엄",
    "샐러드",
    "사이드",
    "음료",
    "주류",
  ]);
  const [newCategory, setNewCategory] = useState(""); // 새 카테고리 이름을 저장할 state
  const [showInput, setShowInput] = useState(false);
  const onRemoveItem = (itemToRemove) => {
    setCategory((prevCategory) =>
      prevCategory.filter((item) => item !== itemToRemove)
    );
  };

  const onAddItem = () => {
    setCategory([...category, newCategory]);
    setNewCategory("");
    setShowInput(false); // 입력 후 입력 필드 숨기기
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Area */}
      <View style={styles.header}>
        <BackButton
          title="카테고리 관리"
          description="메뉴판의 카테고리는 한글로 작성해주세요"
          onEditPress={() => setIsEditMode(!isEditMode)}
        />
      </View>

      {/* Content Area */}
      <View style={styles.categoryList}>
        <FlatList
          data={category}
          renderItem={({ item }) => (
            <CategoryItem
              item={item}
              isEditMode={isEditMode}
              onRemove={onRemoveItem}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        {/* 추가하기 버튼과 입력 필드 */}
        {showInput ? (
          <View style={styles.addContainer}>
            <TextInput
              style={styles.input}
              placeholder="추가할 카테고리 입력"
              value={newCategory}
              onChangeText={setNewCategory}
            />
            <TouchableOpacity style={styles.addButton} onPress={onAddItem}>
              <Text style={styles.addButtonText}>추가</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => setShowInput(true)}
            style={styles.showInput}
          >
            <Icon name="plus-circle" size={33} color="#000" />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: "flex",
    gap: 5,
    flexDirection: "column",
    alignItems: "flex-start",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  categoryList: {
    display: "flex",
    flexDirection: "column",
  },
  addContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    marginLeft: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#757575",
    borderRadius: 5,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    padding: 3,
  },
  showInput: {
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
});

export default TestScreen;
