import React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from "../../components/Header";
import FormInput from '../../components/FormInput';

function SignupPW({navigation}) {

    //PW localStorage에 저장
    const savePWToStorage = async (password) => {
        try {
            await AsyncStorage.setItem('password', password);
            console.log('저장된 password', password);
            navigation.navigate('SignupPWConfirm');
        } catch (e) {
            alert('Error saving password to storage');
        }
    };
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <Header 
                navigation={navigation}
                title="회원가입"
                targetScreen={'SignupID'} />

            <FormInput 
                navigation={navigation}
                GuideText="로그인에 사용할\n비밀번호를 입력해주세요"
                step="3"
                placeholder="비밀번호"
                buttonText="입력 완료"
                TargetScreen={'SignupPWConfirm'}
                isSecure={true}
                onButtonPress={savePWToStorage}
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

export default SignupPW;
