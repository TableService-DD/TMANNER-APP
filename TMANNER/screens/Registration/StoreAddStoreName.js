import { StyleSheet, SafeAreaView} from 'react-native';
import { View, Text } from 'react-native';

import Header from "../../components/Header";
import FormInput from '../../components/FormInput';

function StoreAddStoreName({navigation}) {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <Header 
                navigation={navigation}
                title="가게정보입력"
                targetScreen={'Main'} />

            <FormInput 
                navigation={navigation}
                GuideText="가게의 상호명을\n이름을 입력해주세요."
                step="2"
                StepBack="/5"
                placeholder="이름"
                buttonText="다음"
                TargetScreen={'StoreNumber'}
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