import React, {useState} from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet} from 'react-native';

//입력 받을 값 : GuideText, placeholder, step, buttonText, navigation

function FormInput({ navigation, GuideText, step, placeholder,
    buttonText, TargetScreen, isSecure=false, showButton =true}) {
    //입력 값, 일종의 유효성 검사 느낌

    const [inputValue, setInputValue] = useState('');
    const isInputEmpty = inputValue === '';
    return (
        <View style={styles.Container}>
            <View style={styles.TextContainer}>
            <Text style={styles.GuidText}>
                {GuideText.split('\\n').map((text, index) => {
                    return index === 0 ? text : [<Text key={index}>{'\n'}{text}</Text>]
                })}
            </Text>

                <View style={styles.StepContainer}>
                    <Text style={styles.StepFront}>{step}</Text>
                    <Text style={styles.StepBack}>/4</Text>
                </View>
            </View>
            <TextInput 
                style={styles.InputField} 
                placeholder={placeholder}
                secureTextEntry={isSecure} // Here
                onChangeText={text => setInputValue(text)} // Update state when text changes
            />
            {showButton && ( // Button will only be displayed if showButton is true
                <TouchableOpacity 
                style={[
                    styles.CompleteButton,  
                    isInputEmpty ? styles.DisabledButton : styles.EnabledButton
                ]}
                onPress={() => navigation.navigate({ name: TargetScreen })}
                >
                <Text style={styles.ButtonText}>{buttonText}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    
    Container: {
        width: '100%',
        alignItems: 'center',
        padding: 20,
    },
    TextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        fontSize: 16,
        marginBottom: 12,
    },
    GuidText: {
        fontSize: 16,
    },
    InputField: {
        width: '100%',
        height: 50,
        fontSize: 14,
        fontWeight: '500',
        padding: 18,
        paddingLeft: 16,
        marginTop: 10, // Added some margin for visual spacing
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#757575',
    },
    CompleteButton: {
        width: '100%',
        height: 50,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24, // Added some margin for visual spacing
    },
    ButtonText: {
        color: '#fff', // White text color
    },
    DisabledButton: {
        backgroundColor: '#D1D1D1',
      },
      EnabledButton: {
        backgroundColor: '#000',
      },
      StepContainer: {
        flexDirection: 'row',
      },
      StepFront: {
        color: '#000', // Black
      },
      StepBack: {
        color: '#949494', // Gray
      },
});

export default FormInput;
