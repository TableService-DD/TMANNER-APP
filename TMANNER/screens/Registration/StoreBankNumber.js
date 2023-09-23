import { StyleSheet, SafeAreaView} from 'react-native';
import React, {useState} from 'react';

import Header from "../../components/Header";
import FormInput from '../../components/FormInput';
import ModalTab from '../../components/ModaTab';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AddStore from '../../api/store';

function StoreBankNumber({navigation}) {
    const [modalVisible, setModalVisible] = useState(false); //모달 상태r
    const saveStoreBankNumberToStorage = async (StoreBankNumber) => {
        try {
            //로컬스토리지에 user_StoreName key값으로 저장
            await AsyncStorage.setItem('StoreBankNumber', StoreBankNumber);
            console.log('저장된 StoreBankNumber', StoreBankNumber);
            handleAddStore();
        }
        catch (e) {
            alert('Error saving StoreBankNumber to storage');
        }
    };

    const handleAddStore = async () => {
        const StoreName = await AsyncStorage.getItem('StoreName');
        const StoreNumber = await AsyncStorage.getItem('StoreNumber');
        const StoreBank = await AsyncStorage.getItem('StoreBank');
        const StoreBankNumber = await AsyncStorage.getItem('StoreBankNumber');
        const StoreCode = Math.random().toString(36).substring(2, 8) // 랜덤 StoreCode 생성
        const StoreStatus = true;
        console.log('StoreName', StoreCode);
        const isSuccess = await AddStore({StoreCode, StoreName, StoreStatus});
        
        if (isSuccess) {
            setModalVisible(true);
            console.log("가게 등록 성공!\n가게코드: ", StoreCode, "가게명: ", StoreName, "가게상태: ", StoreStatus)
        }
        else {
            alert('가게 등록에 실패했습니다.');
        }
    };


    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <Header 
                navigation={navigation}
                title="가게정보입력"
                targetScreen={'Main'} />

            <FormInput 
                navigation={navigation}
                GuideText="가게의 정산계좌를\n입력해주세요."
                step="4"
                StepBack="/4"
                placeholder="계좌 입력하기"
                buttonText="완료"
                isSecure={false}
                onButtonPress={saveStoreBankNumberToStorage}
            />
            <ModalTab 
                isVisible={modalVisible} 
                onClose={() => {
                    setModalVisible(false);
                    navigation.navigate('Main');
                }}
                onGo={() => {
                // 보러가기 버튼을 눌렀을 때 실행될 액션
                setModalVisible(false);
                navigation.navigate('Main');
                // 다른 화면으로 이동하거나, 원하는 기능 추가
                }}
                outputText={"사장님, 가게정보 입력이 완료되었어요."}
                subText={"앞으로 띵동과 함께 해주세요!"}
                viewBtnText='홈으로'
                    />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    CompleteButton: {
        width: '100%',
        height: 50,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24, // Added some margin for visual spacing
    },
    DisabledButton: {
        backgroundColor: '#D1D1D1',
    },
    EnabledButton: {
    backgroundColor: '#000',
    },ButtonText: {
    color: '#fff', // White text color
    },

});

export default StoreBankNumber;