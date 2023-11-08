import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { navigationRef } from './src/utilities';


//screens
import { 
  // Home, 
  // ViewData, 
  // AddItem 
} from './src/screens';

import { Home } from './src/screens/Home';
import { ViewData } from './src/screens/ViewData';
import { AddItem } from './src/screens/AddItem';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoot() {
  return (
    <Drawer.Navigator
      initialRouteName="Drawer"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

const App  = ()=> {

    let INITIAL = 'Drawer';
    
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={INITIAL}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Drawer" component={DrawerRoot} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ViewData" component={ViewData} />
          <Stack.Screen name="AddItem" component={AddItem} />
        </Stack.Navigator>
      </NavigationContainer>
        </PersistGate>
      </Provider>
    )
}


export default App;

