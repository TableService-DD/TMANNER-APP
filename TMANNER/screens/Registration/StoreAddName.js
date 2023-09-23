import { StyleSheet, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from "../../components/Header";
import FormInput from '../../components/FormInput';

function StoreInfoAdd({navigation}) {
    //대표자명 localStg에 저장
    const saveNameToStorage = async (storeName) => {
        try {
            //로컬스토리지에 store_name key값으로 저장
            await AsyncStorage.setItem('store_name', storeName);
            console.log('저장된 StoreName', storeName);
            navigation.navigate('StoreNumber'); // Navigate to the next screen
        } catch (e) {
            alert('Error saving StoreName to storage');
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
                GuideText="가게의 대표자 이름을\n입력해주세요."
                step="1"
                StepBack="/4"
                placeholder="이름"
                buttonText="다음"
                TargetScreen={'StoreAddStoreName'}
                onButtonPress={saveNameToStorage}
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

export default StoreInfoAdd; 