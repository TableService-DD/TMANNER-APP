import React, {useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from "../../components/Header";
import FormInput from '../../components/FormInput';

function SignupName({navigation}) {

    //ID localStg에 저장 
    const saveNameToStorage = async (name) => {
        try {
            //로컬스토리지에 user_id key값으로 저장
            await AsyncStorage.setItem('user_name', name);
            console.log('저장된 Name', name);
            navigation.navigate('SignupID'); // Navigate to the next screen
        } catch (e) {
            alert('Error saving Name to storage');
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
                GuideText="로그인에 사용할\n이름을 입력해주세요"
                step="1"
                placeholder="이름"
                buttonText="입력 완료"
                TargetScreen={'SignupID'}
                onButtonPress={saveNameToStorage}
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

export default SignupName;
