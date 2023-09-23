import { StyleSheet, SafeAreaView} from 'react-native';
import { View, Text } from 'react-native';

import Header from "../../components/Header";
import FormInput from '../../components/FormInput';

import AsyncStorage from '@react-native-async-storage/async-storage';

function StoreBank({navigation}) {

    const saveStoreBankNameToStorage = async (StoreBankName) => {
        try {
            //로컬스토리지에 user_StoreName key값으로 저장
            await AsyncStorage.setItem('StoreBank', StoreBankName);
            console.log('저장된 StoreBankName', StoreBankName);
            navigation.navigate('StoreBankNumber'); // Navigate to the next screen
        } catch (e) {
            alert('Error saving StoreBank to storage');
        }
    }
    
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <Header 
                navigation={navigation}
                title="가게정보입력"
                targetScreen={'Main'} />

            <FormInput 
                navigation={navigation}
                GuideText="가게의 정산은행을\n입력해주세요."
                step="3"
                StepBack="/4"
                placeholder="은행 검색하기"
                buttonText="다음"
                TargetScreen={'StoreBankNumber'}
                isSecure={false}
                onButtonPress={saveStoreBankNameToStorage}
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

export default StoreBank;