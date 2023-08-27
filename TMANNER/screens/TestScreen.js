import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import CategoryItem from "../components/CategoryItem"; // Import the CategoryItem component

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

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Area */}
      <View style={styles.header}>
        <BackButton
          title="카테고리 관리"
          description="메뉴판의 카테고리는 한글로 작성해주세요"
          onEditPress={() => setIsEditMode(!isEditMode)} // 수정 버튼 클릭 시 상태 변경
        />
      </View>

      {/* Content Area */}
      <View style={styles.categoryList}>
        <FlatList
          data={category}
          renderItem={({ item }) => (
            <CategoryItem item={item} isEditMode={isEditMode} />
          )} // isEditMode 추가
          keyExtractor={(item, index) => index.toString()}
        />
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
});

export default TestScreen;
