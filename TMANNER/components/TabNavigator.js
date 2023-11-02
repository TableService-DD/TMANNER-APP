import React, {useState} from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Switch } from 'react-native'; 

const Tab = createMaterialTopTabNavigator();

//이미지 소스랑 이동할 페이지를 인자로 받는다.
function DynamicScreenWrapper(tabBarImageSource, detailPageRoute) {
    return function WrappedDynamicScreen(props) {
      return <DynamicScreen {...props} tabBarImageSource={tabBarImageSource} detailPageRoute={detailPageRoute} />;
    }
  }


//실질적인 메뉴 리스트를 보여주는 함수
function DynamicScreen({ route, tabBarImageSource=false, navigation, detailPageRoute=false }) {

    const [menus, setMenus] = useState(route.params.content);  // 상태를 바로 categories로 초기화

    const toggleStatus = (categoryId, productId) => {
        const updatedMenus = menus.map(menu => {
            if (menu.categoryId === categoryId && menu.productId === productId) {
                return { ...menu, status: !menu.status }; // Toggle the status
            }
            return menu;  // Return unchanged menu item
        });

        setMenus(updatedMenus);  // Update the state
    };

    // 나머지 코드는 그대로...
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ padding: 20 }}>
                <Text style={styles.categoryTitle}>{route.name}</Text>
                <View style={styles.categorySeparator} />
                {menus.map(menuItem => {
                    if (!detailPageRoute) {
                        return (
                            //메뉴 리스트 개별 요소
                            <View key={menuItem.menuName} style={styles.menuContainer}>
                                <Image source={menuItem.image} style={{ width: 100, height: 100 }} />
                                <View style={styles.menuRightContainer}>
                                    <View style={styles.menuTextContainer}>
                                        <Text style={styles.menuName}>{menuItem.menuName}</Text>
                                        <Text style={styles.menuPrice}>{menuItem.price}</Text>
                                    </View>
                                    
                                    {tabBarImageSource ? 
                                        <Image source={tabBarImageSource} style={{ width: 22, height: 22}} />
                                        :
                                        <Switch
                                            value={menuItem.status}
                                            onValueChange={() => toggleStatus(menuItem.categoryId, menuItem.productId)}
                                            trackColor={{ false: "#D9D9D9", true: "#FF6A00" }}  // 원하는 컬러로 변경 가능
                                            thumbColor={"#fff"}
                                        />

                                    }
                                </View>    
                            </View>
                        );
                    }
                    else{
                        return (
                            <TouchableOpacity
                                key={menuItem.menuName}
                                onPress={() => navigation.navigate('DetailMenuEdit', { productId: menuItem.productId })                            }
                            >
                                <View style={styles.menuContainer}>
                                    <Image source={menuItem.image} style={{ width: 100, height: 100 }} />
                                    <View style={styles.menuTextContainer}>
                                        <Text style={styles.menuName}>{menuItem.menuName}</Text>
                                        <Text style={styles.menuPrice}>{menuItem.price}</Text>
                                    </View>
                                    <Image source={tabBarImageSource} style={{ width: 22, height: 22}} />
                                </View>
                            </TouchableOpacity>
                        );
                    }
                })}
            </View>
        </ScrollView>
    );
}



function TabNavigator({ categories, tabBarImageSource, detailPageRoute = 'DetailMenuEdit' }) {
  return (
    <Tab.Navigator 
        screenOptions={styles.tabBarScreenOption} 
        style={{ paddingTop: StatusBar.currentHeight }}>
      {categories.map((category) => (
        <Tab.Screen
          key={category.id}
          name={category.name}
          component={DynamicScreenWrapper(tabBarImageSource, detailPageRoute)}
          initialParams={{ content: category.content }}
          options={({ route, focused }) => ({
            tabBarLabel: ({ color, focused }) => (
              <Text style={{
                  fontSize: 18,
                  color: color,
                  fontWeight: focused ? 'bold' : 'normal'
              }}>
                  {route.name}
              </Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <Image 
                source={tabBarImageSource} 
                style={{ width: size, height: size, tintColor: color }} 
              />
            )
          })}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    tabBarScreenOption: {
        tabBarActiveTintColor: '#000',
        tabBarItemStyle: { 
            width: 80, 
            height: 40, 
            marginBottom: 20
        },
        tabBarScrollEnabled: true,
        tabBarLabelStyle: { fontSize: 18 },
        tabBarIndicatorStyle: {
            backgroundColor: 'black',
            width: '9%',
            height: '4%',
            left: '4%'
        },
    },
    categoryContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    menuContainer: {
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    menuTextContainer:{
        width: 180,
        marginRight:5,
        marginLeft:16,
        flexDirection:"column",
    },
    menuRightContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        },
    menuName: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 6,
    },
    menuPrice: {
        fontSize: 16,
        color: '#757575',
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
        marginTop: 12
    },
    categorySeparator: {
        height: 1,
        backgroundColor: '#D9D9D9',
        marginBottom: 16,
    },
});


export default TabNavigator;