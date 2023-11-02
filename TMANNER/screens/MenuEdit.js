import React from "react";
import { StyleSheet, SafeAreaView } from 'react-native';

import categories from '../assets/data/data';
import Header from "../components/Header";
import TabNavigator from "../components/TabNavigator";
import DetailMenuEdit from "./DetailMenuEdit";

function MenuEdit({ navigation }) {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            {/* 상단 헤더  */}
            <Header navigation={navigation} title="메뉴 수정" />

            {/* 네비게이션바 */}
            <TabNavigator 
            categories={categories}
            tabBarImageSource={require('../assets/source/editBtn.png')}
            detailPageRoute={DetailMenuEdit} />
        </SafeAreaView>
    );
}

// Your styles here

const styles = StyleSheet.create({
    container:{
        padding: 20
    },

    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white', // 원하는 배경색으로 변경 가능
    },
});

export default MenuEdit;