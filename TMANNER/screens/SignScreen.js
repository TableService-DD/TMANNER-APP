import React from 'react';
import { View, SafeAreaView, StyleSheet,Text } from 'react-native';

import Header from '../components/Header';

function SignScreen({navigation}) {
    return (
        <SafeAreaView>
            <View>
                <Header navigation={navigation} title="회원가입" targetScreen="Home"/>
            </View>
            <View style={styles.Container}>
                <View style={styles.textContainer}>
                    <Text>로그인에 사용할{'\n'}아이디를 입력해주세요.</Text>
                    <Text>1/4</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    Container:{
        alignItems:'center',
        backgroundColor: 'yellow',
    },

    textContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between', // 이 속성을 추가함
        width: '100%', // 이 속성을 추가함
        paddingHorizontal: 137, // 이 속성을 추가함
    }

});

export default SignScreen;