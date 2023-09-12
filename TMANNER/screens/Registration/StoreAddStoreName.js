import { StyleSheet, SafeAreaView} from 'react-native';
import { View, Text } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from "../../components/Header";
import FormInput from '../../components/FormInput';

function StoreAddStoreName({navigation}) {

    const saveStoreNameToStorage = async (StoreName) => {
        try {
            //로컬스토리지에 user_StoreName key값으로 저장
            await AsyncStorage.setItem('StoreName', StoreName);
            console.log('저장된 StoreName', StoreName);
            navigation.navigate('StoreNumber'); // Navigate to the next screen
        } catch (e) {
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
                GuideText="가게의 상호명을\n이름을 입력해주세요."
                step="1"
                StepBack="/4"
                placeholder="상호명"
                buttonText="다음"
                TargetScreen={'StoreNumber'}
                onButtonPress={saveStoreNameToStorage}
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

export default StoreAddStoreName; 