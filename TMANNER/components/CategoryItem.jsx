import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function CategoryItem({ item, isEditMode, onRemove }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleRemove = () => {
    setModalVisible(false);
    onRemove(item);
  };

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>정말 삭제하시겠습니까?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancel}>취소하기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleRemove}>
                <Text style={styles.textStyle}>삭제하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.categoryItem}>
        <View style={styles.rowContainer}>
          {isEditMode && (
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Icon name="trash" size={20} color="red" />
            </TouchableOpacity>
          )}
          <Text style={styles.categoryText}>{item}</Text>
        </View>
      </TouchableOpacity>
    </>
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
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    height: 170,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalButtons: {
    flexDirection: "row",
    gap: 20,
  },
  button: {
    padding: 15,
    paddingHorizontal: 25,
    backgroundColor: "#FF3535",
    borderRadius: 99,
  },
  cancelBtn: {
    padding: 15,
    paddingHorizontal: 20,
    backgroundColor: "#EBEBEB",
    borderRadius: 99,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  },
  cancel: {
    color: "#757575",
    textAlign: "center",
    fontSize: 14,
  },
});

export default CategoryItem;
