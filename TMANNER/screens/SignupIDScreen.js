import React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';

import Header from "../components/Header";
import FormInput from '../components/FormInput';

function SignupIDScreen({navigation}) {

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <Header 
                navigation={navigation}
                title="회원가입"
                targetScreen={'Login'} />

            <FormInput 
                navigation={navigation}
                GuideText="로그인에 사용할\n아이디를 입력해주세요"
                step="1"
                placeholder="아이디"
                buttonText="입력 완료"
                TargetScreen={'SignupPW'}
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

export default SignupIDScreen;
