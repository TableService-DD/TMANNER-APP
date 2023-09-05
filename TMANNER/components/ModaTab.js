import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';

function ModalTab({ isVisible, onClose, onGo, outputText, subText, exitBtnText="닫기", viewBtnColor="black", viewBtnText="메뉴판 보러가기"}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalTextContainer}>
            <Text style={styles.modalText}>{outputText}</Text>
            < Text style={styles.modalSubText}>{subText}</Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.exitBtn} onPress={onClose}>
              <Text style={styles.exitBtnText}>{exitBtnText}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.viewBtn, {backgroundColor: viewBtnColor}]} onPress={onGo}>
              <Text style={styles.viewBtnText}>{viewBtnText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}



const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '85%',
    height: '21%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 22,
    paddingHorizontal: 30,
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight:'700',
  },
  
  modalTextContainer:{
    width: '100%',
    alignItems: 'start',

  },
  btnContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 60,
  },
  exitBtn: {
    width: '90%',
    height: '80%',
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,  // 이 줄을 추가합니다.
  },
  exitBtnText: {
    color: '#757575',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 19.04,  // 136% of 14px
  },
  viewBtn: {
    width: '90%',
    height: '80%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewBtnText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 19.04,
  },modalSubText:{
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19.04,
    color: '#757575',
    marginBottom: 10,
  }
});

export default ModalTab;
