import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';


// Import the screens
import Home from './screens/Home';
import Login from './screens/Login';
import Main from './screens/Main';
import SoldOut from './screens/SoldOut';
import MenuEdit from './screens/MenuEdit';
import Test from './screens/Test';
import Backup from './screens/Backup';
import DetailMenuEdit from './screens/DetailMenuEdit';
import DetailMenuAdd from './screens/DetailMenuAdd';

import SignupName from './screens/Registration/SignupName';
import SignupID from './screens/Registration/SignupID';
import SignupPW from './screens/Registration/SignupPW';
import SignupPWConfirm from './screens/Registration/SignupPWConfirm';
import UserVerification from './screens/Registration/UserVerification';
import StoreAddName from './screens/Registration/StoreAddName';
import StoreAddStoreName from './screens/Registration/StoreAddStoreName';
import StoreNumber from './screens/Registration/StoreNumber';
import StoreBank from './screens/Registration/StoreBank';
import StoreBankNumber from './screens/Registration/StoreBankNumber';

const Stack = createNativeStackNavigator();
LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate` with no listeners registered.']);


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/> */}
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="SoldOut" component={SoldOut}/>
        <Stack.Screen name="MenuEdit" component={MenuEdit}/>
        <Stack.Screen name="Test" component={Test}/>
        <Stack.Screen name="Backup" component={Backup}/>
        <Stack.Screen name="DetailMenuEdit" component={DetailMenuEdit}/>
        <Stack.Screen name="DetailMenuAdd" component={DetailMenuAdd}/>
        
        <Stack.Screen name="SignupName" component={SignupName} />
        <Stack.Screen name="SignupID" component={SignupID} />
        <Stack.Screen name="SignupPW" component={SignupPW} />
        <Stack.Screen name="SignupPWConfirm" component={SignupPWConfirm} />
        <Stack.Screen name="UserVerification" component={UserVerification} />
        <Stack.Screen name="StoreAddName" component={StoreAddName} />
        <Stack.Screen name="StoreAddStoreName" component={StoreAddStoreName} />
        <Stack.Screen name="StoreNumber" component={StoreNumber} />
        <Stack.Screen name="StoreBank" component={StoreBank} />
        <Stack.Screen name="StoreBankNumber" component={StoreBankNumber} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
