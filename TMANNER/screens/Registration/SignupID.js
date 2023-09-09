import React, {useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from "../../components/Header";
import FormInput from '../../components/FormInput';

function SignupID({navigation}) {

    //ID localStg에 저장 
    const saveIDToStorage = async (id) => {
        try {
            //로컬스토리지에 user_id key값으로 저장
            await AsyncStorage.setItem('user_id', id);
            console.log('저장된 ID', id);
            navigation.navigate('SignupPW'); // Navigate to the next screen
        } catch (e) {
            alert('Error saving ID to storage');
        }
    };

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <Header
                navigation={navigation}
                title="회원가입"
                targetScreen={'Login'}
            />

            <FormInput
                navigation={navigation}
                GuideText="로그인에 사용할\n아이디를 입력해주세요"
                step="1"
                placeholder="아이디"
                buttonText="입력 완료"
                TargetScreen={'SignupPW'}
                onButtonPress={saveIDToStorage}
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
