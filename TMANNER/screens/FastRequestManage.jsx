import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import BackButton from "../components/BackButton";

function FastRequestManage(props) {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackButton
          title="빠른요청 서비스 관리"
          description="최대 8개까지 등록 가능해요"
          onEditPress={() => setIsEditMode(!isEditMode)}
        />
      </View>
      <View style={styles.serviceContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTitle}>Service 1</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingBottom: 20,
  },
  btn: {
    width: 160,
    height: 160,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#000",
    margin: "1%",
    paddingLeft: 15,
    paddingTop: 25,
    marginBottom: 10,
  },
  btnTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
  serviceContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default FastRequestManage;
