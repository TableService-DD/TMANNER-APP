import React from "react";
import { StyleSheet, SafeAreaView,} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import menuData from '../assets/data/menu.json';
import Header from "../components/Header";
import TabNavigator from "../components/TabNavigator";

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Encountered two children with the same key']);


const Tab = createMaterialTopTabNavigator();

function SoldOutTabs({ navigation }) {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            {/* 상단 헤더  */}
            <Header navigation={navigation} title="메뉴 품절" />

            {/* 네비게이션바 */}
            <TabNavigator 
            categories={menuData.products}
            tabBarImageSource={require('../assets/source/editBtn.png')}
            detailPageRoute={'None'} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 20
    },

    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white', // 원하는 배경색으로 변경 가능
    },
});

export default SoldOutTabs;
