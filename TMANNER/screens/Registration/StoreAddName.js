import { StyleSheet, SafeAreaView} from 'react-native';
import { View, Text } from 'react-native';

import Header from "../../components/Header";
import FormInput from '../../components/FormInput';

function StoreInfoAdd({navigation}) {
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