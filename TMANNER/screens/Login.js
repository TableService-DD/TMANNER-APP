import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { loginUser } from "../api/user";

function Login({ navigation }) {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setChecked] = useState(false);
    const [isInputFilled, setInputFilled] = useState(false);

    useEffect(() => {
        if(id.trim() && password.trim()) {
            setInputFilled(true);
        } else {
            setInputFilled(false);
        }
    }, [id, password]);

    // const handleLogin = async () => {
    //     const success = await loginUser({ user_id: id, user_pw: password });
    //     if (success) {
    //         navigation.navigate('Main');
    //     } else {
    //         // 실패 시 사용자에게 알림을 제공하는 코드 (예: alert 사용)
    //         alert('로그인 실패. 이메일 또는 비밀번호를 확인해주세요.');
    //     }
    // };

    //서버 다운 시 사용
    const handleLogin = async () => {
        navigation.navigate('Main');
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputcontainer}>
                <Text style={styles.title}>로그인</Text>

                <TextInput
                    style={styles.input}
                    placeholder="아이디"
                    onChangeText={setId}
                    value={id}
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="비밀번호"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
                <View>
                    <View style={styles.inputBottomContainer}>
                        <View style={styles.checkBoxContainer}>
                            <TouchableOpacity onPress={() => setChecked(!isChecked)}>
                                <MaterialIcons
                                    name={isChecked ? 'check-box' : 'check-box-outline-blank'}
                                    size={24}
                                    color="#000"
                                />
                            </TouchableOpacity>
                            <Text style={styles.checkboxText}>로그인 유지</Text>
                        </View>
                        <TouchableOpacity onPress={() => { /* 비밀번호 찾기 페이지로 이동 */ }}>
                            <View style={styles.forgotPasswordContainer}>
                                <Text>비밀번호 찾기</Text>
                                <MaterialIcons
                                    name="keyboard-arrow-right"
                                    size={24}
                                    color="#000"
                                / >
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity 
                        style={[styles.loginButton, isInputFilled ? { backgroundColor: '#000' } : { backgroundColor: '#D1D1D1' }]} 
                        onPress={handleLogin}
                    >
                        <Text style={styles.loginButtonText}>로그인하기</Text>
                    </TouchableOpacity>


                <View style={styles.signUpContainer}>
                    <Text>아직 띵동에 가입 안하셨나요?</Text>
                    <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignupName')}>
                        <Text style={styles.signUpButtonText}>회원가입 하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 22,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    inputcontainer: {
        flex: 1,
        marginTop: 120,
    },

    title: {
        fontSize: 30,
        marginBottom: 30,
        fontWeight: "bold",
        color: '#000',
    },

    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 15,
        fontSize: 14,
    },

    inputBottomContainer : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },

    checkBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    checkboxText: {
        marginLeft: 8,
        marginRight: 8,
    },

    forgotPasswordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    loginButton: {
        height: 50,
        backgroundColor: '#D1D1D1',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
        marginTop: 20,
    },

    loginButtonText: {
        color: '#fff',
        fontWeight: 'bold'
    },

    signUpButton: {
        width: '100%', // 이 줄 추가
        height: 50,
        paddingVertical:14,
        paddingHorizontal: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        marginTop: 10
    },

    signUpButtonText: {
        color: '#000',
        fontWeight: 'bold'
    },

    signUpContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200,
    },
});

export default Login;
