import { StyleSheet, SafeAreaView} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from "../../components/Header";
import FormInput from '../../components/FormInput';
import { AddStore } from '../../api/store';

function StoreNumber({navigation}) {

    const saveStoreNumberToStorage = async (StoreNumber) => {
        try {
            //로컬스토리지에 user_StoreName key값으로 저장
            await AsyncStorage.setItem('StoreNumber', StoreNumber);
            console.log('저장된 StoreNumber', StoreNumber);
            navigation.navigate('StoreBank'); // Navigate to the next screen
            //API 연동
        } catch (e) {
            console.log(e);
            alert('Error saving StoreNumber to storage');
        }
    };

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <Header 
                navigation={navigation}
                title="가게정보입력"
                targetScreen={'Main'} />

            <FormInput 
                navigation={navigation}
                GuideText="가게의 사업자등록증 번호를\n입력해주세요."
                step="2"
                StepBack="/4"
                placeholder="사업자등록증 번호"
                buttonText="다음"
                TargetScreen={'StoreBank'}
                isSecure={true}
                onButtonPress={saveStoreNumberToStorage}
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


export default StoreNumber;