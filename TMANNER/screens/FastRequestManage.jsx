import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Modal,
} from "react-native";
import BackButton from "../components/BackButton";

function FastRequestManage() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [services, setServices] = useState([
    "물티슈",
    "물",
    "앞치마",
    "냅킨",
    "단무지",
    "김치",
  ]);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [serviceToRemove, setServiceToRemove] = useState(null);
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [newService, setNewService] = useState("");
  const handleRemoveService = () => {
    setServices(services.filter((service) => service !== serviceToRemove));
    setDeleteModalVisible(false);
  };

  const handleDeletePress = (service) => {
    setServiceToRemove(service);
    setDeleteModalVisible(true);
  };
  const handleAddService = () => {
    setServices([...services, newService]);
    setNewService("");
    setAddModalVisible(false);
  };
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
        {services.map((service, index) => (
          <TouchableOpacity key={index} style={styles.btn}>
            {isEditMode && (
              <TouchableOpacity
                style={styles.deleteIcon}
                onPress={() => handleDeletePress(service)}
              >
                <Text style={styles.deleteText}>X</Text>
              </TouchableOpacity>
            )}
            <Text style={styles.btnTitle}>{service}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => setAddModalVisible(true)}
        >
          <Text style={styles.btnAddTitle}>추가하기</Text>
        </TouchableOpacity>
      </View>

      {/* 삭제 확인 모달 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isDeleteModalVisible}
        onRequestClose={() => {
          setDeleteModalVisible(!isDeleteModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>정말 삭제하시겠습니까?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalBtn}
                onPress={() => setDeleteModalVisible(false)}
              >
                <Text style={styles.modalBtnText}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalBtn}
                onPress={handleRemoveService}
              >
                <Text style={styles.modalBtnText}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isAddModalVisible}
        onRequestClose={() => {
          setAddModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>새 서비스 추가</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="새 서비스"
              value={newService}
              onChangeText={setNewService}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalBtn}
                onPress={() => setAddModalVisible(false)}
              >
                <Text style={styles.modalBtnText}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalBtn}
                onPress={handleAddService}
              >
                <Text style={styles.modalBtnText}>추가하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    width: "48%",
    height: 110,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#000",
    margin: "1%",
    marginBottom: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
  serviceContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: "88%",
    height: 180,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    paddingVertical: 20,
    paddingBottom: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
  },
  modalInput: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#757575",
    padding: 5,
    marginVertical: 10,
    borderRadius: 5,
  },
  modalButtons: {
    flexDirection: "row",
    gap: 10,
  },
  modalBtn: {
    width: 150,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "black",
    alignItems: "center",
  },
  modalBtnText: {
    color: "#fff",
    fontWeight: "600",
  },
  deleteIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
  },

  btnAdd: {
    width: "48%",
    height: 110,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ccc",
    margin: "1%",
    marginBottom: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnAddTitle: {
    fontSize: 18,
    color: "#000",
    fontWeight: "600",
  },
});

export default FastRequestManage;
