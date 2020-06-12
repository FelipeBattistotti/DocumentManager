import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Logon from './pages/Logon';
import Doc from './pages/Doc';
import DocDetail from './pages/DocDetail';

const AppStack = createStackNavigator ();

export default function Routes () {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Logon" component={Logon} />
                <AppStack.Screen name="Doc" component={Doc} />
                <AppStack.Screen name="DocDetail" component={DocDetail} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
