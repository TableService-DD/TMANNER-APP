import React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';

import Header from "../components/Header";
import FormInput from '../components/FormInput';

function SignupPWConfirmScreen({navigation}) {

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

export default SignupPWConfirmScreen;
