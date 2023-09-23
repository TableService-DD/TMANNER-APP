import React, {useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';;

import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from "../../components/Header";
import FormInput from '../../components/FormInput';

function SignupID({navigation}) {

    //ID localStg에 저장 
    const saveIDToStorage = async (id) => {
        try {
            // Check for email validity before saving
            var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if(!regex.test(id)) {
                alert('유효하지 않은 이메일 주소입니다. 다시 입력해주세요.');
                return false;  // Return false for invalid email
            }
            
            await AsyncStorage.setItem('user_id', id);
            console.log('저장된 ID', id);
            return true;  // Return true for successful operation
        } catch (e) {
            alert('Error saving ID to storage');
            return false;  // Return false for error
        }
    };
    

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <Header
                navigation={navigation}
                title="회원가입"
                targetScreen={'SignName'}
            />

            <FormInput
                navigation={navigation}
                GuideText="로그인에 사용할\n이메일 아이디를 입력해주세요"
                step="2"
                placeholder="이메일 아이디"
                buttonText="입력 완료"
                TargetScreen={'SignupPW'}
                onButtonPress={saveIDToStorage}
                validateEmail = {true}
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

export default SignupID;
