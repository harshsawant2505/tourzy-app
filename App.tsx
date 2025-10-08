import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Firebase and authentication
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

// Import your screens
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';

import DetailScreen from './screens/PlaceDetails';
import PreferenceScreen from './screens/PreferenceScreen';

const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = useState<any>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    console.log('App.js mounted');
    

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('User:', user);
      setUser(user);
      if (initializing) {
        console.log('User:', user?.email);
        setInitializing(false);
      }
      console.log('User:', user?.email);
    });

    return unsubscribe;
  }, [initializing]);

  if (initializing) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('./assets/splash.png')}
          style={{ width: 340, height: 340, opacity: 1 }}
        />
      </View>
    ); // or a loading component
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {user ? (
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}>
          
            <Stack.Screen name="detail" component={DetailScreen} />  
          
            <Stack.Screen name="Home" component={HomeScreen} />
           <Stack.Screen name="preference" component={PreferenceScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            initialRouteName="SignUp"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="preference" component={PreferenceScreen} />
            <Stack.Screen name="detail" component={DetailScreen} />
            {/* <Stack.Screen name="ActivityScreen" component={ActivityScreen} /> */}
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
