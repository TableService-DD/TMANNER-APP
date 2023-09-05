import { StyleSheet, View, Text, SafeAreaView, Image, 
    Dimensions , TouchableOpacity, TextInput, ScrollView, Switch } from 'react-native';

import categories from '../assets/data/data';
import Header from "../components/Header";
import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';

import ModalTab from '../components/ModaTab';

function DetailMenuAdd({ route, navigation  }) {
    const windowWidth = Dimensions.get('window').width;


    const [activeSpicyStep, setActiveSpicyStep] = useState(null);

    const handleSpicyButtonPress = (index) => {
        if (activeSpicyStep === index) {
            setActiveSpicyStep(null);  // 같은 버튼을 누를 경우 비활성화
        } else {
            setActiveSpicyStep(index);  // 다른 버튼을 누를 경우 해당 버튼 활성화
        }
    };

    const [isBestMenu, setIsBestMenu] = useState(false);  // 기본적으로 비활성 상태로 설정
    const [selectedRadio, setSelectedRadio] = useState(null); // null이 초기값입니다.
    const handleRadioPress = (value) => {
        // 이미 선택된 값과 동일한 버튼을 누른 경우 선택 해제, 그렇지 않은 경우 해당 값을 선택
        setSelectedRadio((prevValue) => (prevValue === value ? null : value));
    };
    
    const [modalVisible, setModalVisible] = useState(false); //모달 상태

    const [menuName, setMenuName] = useState('');
    const [menuPrice, setMenuPrice] = useState('');
    const [menuIntro, setMenuIntro] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);

    const isAllFieldsFilled = menuName && menuPrice && menuIntro && selectedCategory;
    const buttonColor = isAllFieldsFilled ? '#000' : '#D9D9D9';  // 입력 필드가 모두 채워지면 검은색, 아니면 회색

    const styles = StyleSheet.create({
        safeAreaContainer: {
            flex: 1,
            backgroundColor: 'white', // 원하는 배경색으로 변경 가능
        },
        container:{
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    
        deleteBtn: {
            marginRight: 22,
            marginTop: 50,
            width: 70,
            height: 35,
            fontWeight: 'bold',
            fontSize: 15,
            borderStyle: 'solid',  // 테두리 설정
            borderWidth: 1,  // 테두리 두께
            borderColor: '#757575',  // 테두리 색상
            padding: 5,  // 안쪽 패딩
            borderRadius: 5,  // 사각형 모서리 둥글게
            alignItems: 'center',  // 내부 텍스트를 가운데 정렬 (수평)
            justifyContent: 'center',  // 내부 텍스트를 가운데 정렬 (수직)
        },
    
        deleteText: {
            color: '#757575',  // 텍스트 색상
        },
        
        mainContainer: {
            flex: 1,
            padding: 20,
            marginTop: 15,
        },
        
        Topcontainer: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
    
        title: {
            fontSize: 20,
            fontWeight: '600',
        },
    
        editText: {
            color: '#000',
            fontWeight: 'bold',
            fontSize:16,
            marginRight: 5,
            textDecorationLine: 'underline',
        },
    
        middleContainer: {
            marginTop: 15,
            justifyContent: 'center',
            alignItems: 'center',
        },
        subText: {
            fontSize:12,
            color: '#757575',
            fontWeight: 500,
            marginTop: 8,
        },
        input: {
            height: 47,
            marginBottom: 12,
            paddingHorizontal: 15,
            fontSize: 14,
            backgroundColor:'#E7E7E7',
            borderRadius: 5,
            color: '#757575',
        },
        
        inputTitle: {
            fontSize: 16,
            fontWeight: '600',
            marginBottom: 6,
        },
        
        inputContainer:{
            marginTop:26,
        },
        inputLarge: {
            height: 80,
            marginBottom: 12,
            paddingHorizontal: 15,
            fontSize: 14,
            backgroundColor:'#E7E7E7',
            borderRadius: 5,
            color: '#757575',
            paddingTop: 10,  // 이 부분을 추가
        },inputTitleContainer:{
            flexDirection: 'row',
        },
    
        subinputTitle: {
            fontSize: 12,
            color: '#757575',
            marginLeft: 5,
        }, 
        
        categorySeparator: {
            height: 1,
            backgroundColor: '#D9D9D9',
            marginBottom: 16,
            marginTop: 34,
        },
    
        subTitle: {
            fontSize: 14,
            fontWeight: '600',
            marginBottom: 6,
            marginTop: 26,
        },
        
        spicyStepContainer:{
            flexDirection: 'row',
            paddingRight:8,
        },
        
        activeSpicyButton: {
            backgroundColor: 'black',  // 활성화된 버튼의 배경색
        },
    
        activeSpicyText: {
            color: 'white' // 활성화된 버튼의 글자색
        },
        
        spicyButton: {
            width: 60,
            height: 32,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 8, // 버튼 사이의 간격을 주기 위해
            flexShrink: 0,
            backgroundColor: '#fff', // 원하는 배경색으로 설정 가능
            borderWidth: 1, // 테두리 두께
            borderColor: '#D9D9D9', // 테두리 색상
            borderRadius: 4,
        },
        bestMenuContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 29,
        },printPos:{
            marginTop: 29,
        },
        radioContainer: {
            alignItems: 'flex-start',
            marginTop: 10,
        },
        radioButtonWrapper: {
            flexDirection: 'row', // 라디오 버튼과 글씨를 가로로 배열
            alignItems: 'center',
            marginBottom: 17, // 각 라디오 버튼 사이의 간격
        },
        radio: {
            width: 20,
            height: 20,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: '#D9D9D9',
            marginRight: 9, // 버튼과 글씨 사이의 간격
        },
        selectedRadio: {
            backgroundColor: '#fff',  // 배경색을 하얀색으로 설정
            borderWidth: 5,  // 테두리 두께를 5px로 설정
            borderColor: 'black',  // 테두리 색깔을 검정색으로 설정
        },
        
        radioText: {
            fontSize: 14,
            color: '#757575',
        },customButton: {
            display: 'flex',
            width: 350,
            padding: 16,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            backgroundColor: buttonColor,
            alignSelf: 'center', 
            marginBottom: 10,
            marginTop: 10,   
        },
        buttonText: {
            color: 'white', 
            fontSize: 16,   
        }
    });

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Header navigation={navigation} title="메뉴 등록" targetScreen="MenuEdit"/>
            </View>

            <ScrollView keyboardShouldPersistTaps ='always' style={{flex: 1}}>
                
                <View style={styles.mainContainer}>
                    <View style={styles.Topcontainer}>
                        <TouchableOpacity style={styles.editBtn} onPress={() => navigation.navigate('Main')}>
                            <Text style={styles.editText}>사진등록</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.middleContainer}>
                            <Image
                            style={{
                            width: windowWidth - 40,
                            height: (windowWidth - 40) * (350 / 350),
                            borderRadius: 10,
                            }}
                            source={require('../assets/source/imageAdd.png')} // 이미지 주소 입력
                        />
                    </View>
                    <Text style={styles.subText}>(*정방향 비율을 권장합니다.)</Text>

                    <View style={styles.bottomContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputTitle}>메뉴 이름</Text>
                            <TextInput 
                                style={styles.input} 
                                placeholder={"메뉴 이름을 입력해주세요"}
                                value={menuName}
                                onChangeText={text => setMenuName(text)}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.inputTitle}>메뉴 가격</Text>
                            <TextInput 
                                style={styles.input} 
                                placeholder={"메뉴 가격을 입력해주세요."}
                                value={menuPrice}
                                onChangeText={text => setMenuPrice(text)}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <View style={styles.inputTitleContainer}>
                                <Text style={styles.inputTitle}>메뉴 소개</Text>
                                <Text style={styles.subinputTitle}>(*40자 이내)</Text>
                            </View>
                            <TextInput 
                                style={styles.inputLarge}
                                placeholder={"메뉴 소개를 입력해주세요."}
                                maxLength={40}
                                multiline={true}
                                value={menuIntro}
                                onChangeText={text => setMenuIntro(text)}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.inputTitle}>카테고리 선택</Text>
                            <SelectList 
                                setSelected={val => setSelectedCategory(val)} 
                                data={categories.map(category => ({ key: category.id, value: category.name }))}
                                save="value"
                                placeholder={"카테고리를 선택해주세요."} // 플레이스 홀더를 선택된 카테고리 이름으로 설정합니다.
                                boxStyles={{borderRadius:0}}
                                dropdownStyles={{borderRadius:0}}
                                search={false} 
                            />
                        </View>

                        <View style={styles.categorySeparator} />

                        {/* 옵션 파트 */}
                        <View style={styles.inputContainer}>
                            <View style={styles.inputTitleContainer}>
                                <Text style={styles.inputTitle}>옵션</Text>
                                <Text style={styles.subinputTitle}>(*선택사항입니다.)</Text>
                            </View>

                            {/* 맵기 단계 설정 파트 */}
                            <Text style={styles.subTitle}>맵기 단계</Text>
                            <View style={styles.spicyStepContainer}>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                    {Array.from({ length: 6 }).map((_, index) => (
                                        <TouchableOpacity 
                                            key={index} 
                                            style={[
                                                styles.spicyButton,
                                                activeSpicyStep === index ? styles.activeSpicyButton : {}
                                            ]}
                                            onPress={() => handleSpicyButtonPress(index)}
                                        >
                                            <Text style={activeSpicyStep === index ? styles.activeSpicyText : {}}>
                                                {index}단계
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </View>

                            {/* 베스트 메뉴 등록 */}
                            <View style={styles.bestMenuContainer}>
                                <Text style={styles.inputTitle}>베스트 메뉴 등록</Text>
                                <Switch
                                    value={isBestMenu}
                                    onValueChange={value => setIsBestMenu(value)}
                                    trackColor={{ false: "#D9D9D9", true: "#FF6A00" }}  // 원하는 컬러로 변경 가능
                                    thumbColor={"#fff"}
                                />
                            </View>

                            {/* 프린트 위치 */}
                            <View style={styles.printPos}>
                                <Text style={styles.inputTitle}>프린트 위치</Text>
                            </View>

                            {/* 서빙/주방 선택 */}
                            <View style={styles.radioContainer}>
                                <View style={styles.radioButtonWrapper}>
                                    <TouchableOpacity style={styles.radioBtn} onPress={() => handleRadioPress('serving')}>
                                        <View style={[
                                            styles.radio,
                                            selectedRadio === 'serving' && styles.selectedRadio
                                        ]} />
                                    </TouchableOpacity>
                                    <Text style={styles.radioText}>서빙</Text>
                                </View>
                                
                                <View style={styles.radioButtonWrapper}>
                                    <TouchableOpacity style={styles.radioBtn} onPress={() => handleRadioPress('kitchen')}>
                                        <View style={[
                                            styles.radio,
                                            selectedRadio === 'kitchen' && styles.selectedRadio
                                        ]} />
                                    </TouchableOpacity>
                                    <Text style={styles.radioText}>주방</Text>
                                </View>       
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* 여기에 새로운 버튼 추가 */}
            <TouchableOpacity style={styles.customButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>메뉴등록 완료</Text>
            </TouchableOpacity>

            <ModalTab 
                isVisible={modalVisible} 
                onClose={() => setModalVisible(false)}
                onGo={() => {
                // 보러가기 버튼을 눌렀을 때 실행될 액션
                setModalVisible(false);
                navigation.navigate('Main');
                // 다른 화면으로 이동하거나, 원하는 기능 추가
                }}
                outputText={"사장님, 메뉴 등록이 완료 되었어요."}
                subText={"포스기의 새로고침 버튼을 누르시면 확인 가능합니다. \n앞으로도 많은 신메뉴 기대할게요!"}
            />
        </SafeAreaView>
    );
}

export default DetailMenuAdd;