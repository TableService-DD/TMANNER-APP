import { StyleSheet, SafeAreaView} from 'react-native';
import { View, Text } from 'react-native';

import Header from "../../components/Header";
import FormInput from '../../components/FormInput';

function StoreBank({navigation}) {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <Header 
                navigation={navigation}
                title="가게정보입력"
                targetScreen={'Main'} />

            <FormInput 
                navigation={navigation}
                GuideText="가게의 정산은행을\n입력해주세요."
                step="4"
                StepBack="/5"
                placeholder="은행 검색하기"
                buttonText="다음"
                TargetScreen={'StoreBankNumber'}
                isSecure={true}
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