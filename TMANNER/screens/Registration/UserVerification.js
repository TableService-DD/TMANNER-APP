import React, {useState} from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import { View, TouchableOpacity, Text, TextInput} from 'react-native';

import { RegisterUser } from '../../api/user';  // API 파일 경로를 적절하게 변경해주세요.
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from "../../components/Header";
import ModalTab from '../../components/ModaTab';

function UserVerification({navigation}) {
    //입력값 여부 확인
    const [inputValue, setInputValue] = useState(''); //전화번호 INPUT BOX
    const [isVerified, setIsVerified] = useState(''); //인증번호 INPUT BOX
    const [showBottom, setShowBottom] = useState(false); //입력 완료 버튼 활성화 여부

    const isInputValid = inputValue.length === 11; //전화번호 11자리
    const isVerifiedValid = isVerified.length === 4; //인증번호 4자리

    const [modalVisible, setModalVisible] = useState(false); //모달 상태

    const savePhoneNumberToStorage = async (phoneNum) => {
        try {
            await AsyncStorage.setItem('user_phoneNum', phoneNum);

            id = await AsyncStorage.getItem('user_id');
            pw = await AsyncStorage.getItem('user_pw');
            name = await AsyncStorage.getItem('user_name');

            console.log('name',name);
            console.log('id',id);
            console.log('pw',pw);
            console.log('phoneNum',phoneNum); 

        } catch (e) {
            alert('Error saving PW to storage');
        }
    };

    const handleRegistration = async () => {
        const user_id = await AsyncStorage.getItem('user_id');
        const user_pw = await AsyncStorage.getItem('user_pw');
        const user_name = await AsyncStorage.getItem('user_name');
        const user_phone = inputValue;
        const user_email = "user@example.com";  // 임의로 설정한 값입니다.
        const isSuccess = await RegisterUser({ user_id, user_pw, user_name, user_phone, user_email });

        if (isSuccess) {
            savePhoneNumberToStorage(inputValue);
            setModalVisible(true);
        } else {
            alert('사용자 등록에 실패했습니다.');
        }
    }

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <Header 
                navigation={navigation}
                title="회원가입"
                targetScreen={'Login'} />

            <View style={styles.Container}>
                <View style={styles.TextContainer}>
                    <Text style={styles.GuidText}>
                        로그인에 사용할{'\n'}전화번호를 입력해주세요
                    </Text>

                    <View style={styles.StepContainer}>
                        <Text style={styles.StepFront}>4</Text>
                        <Text style={styles.StepBack}>/4</Text>
                    </View>
                </View>

                {/* 전화번호 입력창 */}
                <View style={styles.InputWrapper}>
                    <TextInput
                        style={styles.InputField}
                        placeholder={'전화번호'}
                        onChangeText={text => setInputValue(text)}
                    />
                    <TouchableOpacity
                        style={[
                        styles.VerifyButton,
                        isInputValid ? styles.ActiveVerifyButton : styles.InactiveVerifyButton,
                        ]}
                        disabled={!isInputValid}
                        onPress={() => setShowBottom(true)}
                    >
                        <Text style={styles.VerifyButtonText}>인증하기</Text>
                    </TouchableOpacity>
                </View>

                {showBottom && (
                    //인증번호 입력창
                    <View style={styles.BottomContainer}>
                        <View style={styles.InputWrapper}>
                            <TextInput
                                style={styles.InputField}
                                placeholder={'인증번호 입력'}
                                onChangeText={text => setIsVerified(text)}  // 변경된 부분
                            />
                        </View>
                        <TouchableOpacity
                            style={[
                                styles.CompleteButton,
                                isVerifiedValid ? styles.EnabledButton : styles.DisabledButton,
                            ]}
                            disabled={!isVerifiedValid}
                            onPress={handleRegistration}
                        >
                            <Text style={styles.ButtonText}>입력 완료</Text>
                        </TouchableOpacity>

                    </View>
                )}
                
            </View>
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
                outputText={"사장님, 회원가입이 완료되었어요."}
                subText={"앞으로 띵동과 함께 해주세요!"}
                viewBtnText='가게정보 입력하기'
                    />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding:20,
    },Container: {
        width: '100%',
        alignItems: 'center',
        padding: 20,
    },
    TextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        fontSize: 16,
        marginBottom: 12,
    },
    GuidText: {
        fontSize: 16,
    },
    InputField: {
        width: '100%',
        height: 50,
        fontSize: 14,
        fontWeight: '500',
        padding: 18,
        paddingLeft: 16,
        marginTop: 10, // Added some margin for visual spacing
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#757575',
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
    ButtonText: {
        color: '#fff', // White text color
    },
    DisabledButton: {
        backgroundColor: '#D1D1D1',
      },
      EnabledButton: {
        backgroundColor: '#000',
      },
      StepContainer: {
        flexDirection: 'row',
      },
      StepFront: {
        color: '#000', // Black
      },
      StepBack: {
        color: '#949494', // Gray
      },
      InputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    VerifyButton: {
        padding: 8,
        alignItems: 'center',
        borderRadius: 6,
        marginLeft: 8,
    },
    ActiveVerifyButton: {
        backgroundColor: '#FF6A00',
    },
    InactiveVerifyButton: {
        backgroundColor: '#757575',
    },
    VerifyButtonText: {
        color: '#FFFFFF',
    },
    InputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#757575',
        paddingRight: 10,
        marginBottom: 12,
      },
      InputField: {
        flex: 1,
        paddingLeft: 16,
        fontSize: 14,
        fontWeight: '500',
      },
      VerifyButton: {
        padding: 8,
        paddingHorizontal: 10,
        borderRadius: 6,
      },
      ActiveVerifyButton: {
        backgroundColor: '#FF6A00',
      },
      InactiveVerifyButton: {
        backgroundColor: '#757575',
      },
      VerifyButtonText: {
        color: '#FFFFFF',
      },
      DisabledButton: {
        backgroundColor: '#D1D1D1',
      },
      EnabledButton: {
        backgroundColor: '#000',
      },BottomContainer:{
        width: '100%',
      }
});

export default UserVerification;