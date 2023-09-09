import React, {useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, Alert} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from "../../components/Header";
import FormInput from '../../components/FormInput';

function SignupPWConfirm({navigation}) {

    let previousPW = []

    const CheckIDToStorage = async (checkPW) => {
        try {
            console.log('현재 입력된 확인용 PW', checkPW);
            //1. 입력된 checkPW 가져오기
            previousPW = await AsyncStorage.getItem('user_pw');

            //2. 지금 입력된 PW랑 같은지 확인하기
            if (checkPW !== previousPW) {
                Alert.alert('비밀번호가 일치하지 않습니다.');
                return;
            }

            //3. 같으면 다음 화면으로 넘어가기
            await AsyncStorage.setItem('user_pw', checkPW);
            console.log('저장된 키 값이 동일합니다. ');
            console.log('저장된 키', checkPW);
            
            navigation.navigate('UserVerification');
        } catch (e) {
            alert('Error saving ID to storage');
        }
    };

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <Header 
                navigation={navigation}
                title="회원가입"
                targetScreen={'Login'} />

            <FormInput 
                navigation={navigation}
                GuideText="로그인에 사용할\n비밀번호를 한 번 더 입력해주세요"
                step="3"
                placeholder="비밀번호"
                buttonText="입력 완료"
                TargetScreen={'UserVerification'}
                isSecure={true}
                onButtonPress={CheckIDToStorage}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white',
    }
});

export default SignupPWConfirm;
