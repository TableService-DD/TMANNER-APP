import { StyleSheet, SafeAreaView} from 'react-native';
import { View, Text } from 'react-native';

import Header from "../../components/Header";
import FormInput from '../../components/FormInput';

function StoreNumber({navigation}) {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <Header 
                navigation={navigation}
                title="가게정보입력"
                targetScreen={'Main'} />

            <FormInput 
                navigation={navigation}
                GuideText="가게의 사업자등록증 번호를\n입력해주세요."
                step="3"
                StepBack="/5"
                placeholder="사업자등록증 번호"
                buttonText="다음"
                TargetScreen={'StoreBank'}
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

export default StoreNumber;