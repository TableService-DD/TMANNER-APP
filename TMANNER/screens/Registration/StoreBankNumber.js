import { StyleSheet, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import { View, TouchableOpacity, Text} from 'react-native';

import Header from "../../components/Header";
import FormInput from '../../components/FormInput';

function StoreBankNumber({navigation}) {
    const [modalVisible, setModalVisible] = useState(false); //모달 상태
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <Header 
                navigation={navigation}
                title="가게정보입력"
                targetScreen={'Main'} />

            <FormInput 
                navigation={navigation}
                GuideText="가게의 정산계좌를\n입력해주세요."
                step="5"
                StepBack="/5"
                placeholder="계좌 입력하기"
                buttonText="다음"
                TargetScreen={'SignupPW'}
                isSecure={true}
                showButton={false}
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
                navigation.navigate('StoreAddName');
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