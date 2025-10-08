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
import Menu from './screens/Menu';
import SpinTheWheel from './screens/SpinTheWheel';
import QuizScreen from './screens/QuizScreen';
import MapScreen from './screens/MapScreen';
import MysteryMap from './screens/MysteryMap';  // Assuming you have this screen
import MysteryLetterScreen from './screens/MysteryLetterScreen';  // Assuming this exists
import SocialScreen from './screens/SocialScreen';  // Assuming this exists
import SOSScreen from './screens/SosScreen';  // Assuming this exists
import SettingsScreen from './screens/SettingsScreen';  // Assuming this exists
import LeaderboardScreen from './screens/LeaderboardScreen';  // Assuming this exists
import Profilescreen from './screens/ProfileScreen';
import MatchingScreen from './screens/MatchingScreen';
import AddPostScreen from './screens/AddPostScreen';
import ActivityScreen from './screens/ActivityScreen';
import LandscapeScreen from './screens/LandscapeScreen';
import { importPlacesToFirestore } from './utils/getUser';
import CalenderScreen from './screens/CalenderScreen';
import GuideHotel from './screens/GuideHotel';
import Hotel from './screens/Hotel';
import Guide from './screens/Guide';
import PostInstaScreen from './screens/PostInstaScreen';
import Instructions from './screens/Instructions';
import DetailScreen from './screens/PlaceDetails';

const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = useState<any>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    console.log('App.js mounted');
    importPlacesToFirestore()

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
            <Stack.Screen name="profile" component={Profilescreen} />  
            <Stack.Screen name="detail" component={DetailScreen} />  
            <Stack.Screen name="mysterymap" component={MysteryMap} />
            <Stack.Screen name="MysteryLetterScreen" component={MysteryLetterScreen} />
            <Stack.Screen name="Social" component={SocialScreen} />
            <Stack.Screen name="SOS" component={SOSScreen} />
            <Stack.Screen name="settings" component={SettingsScreen} />
            <Stack.Screen name="leaderboard" component={LeaderboardScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="quiz" component={QuizScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="SpinTheWheel" component={SpinTheWheel} />
            <Stack.Screen name="Maps" component={MapScreen} />
            <Stack.Screen name="Matching" component={MatchingScreen} />
            <Stack.Screen name="addpost" component={AddPostScreen} />
            <Stack.Screen name="ActivityScreen" component={ActivityScreen} />
            <Stack.Screen name="LandscapeScreen" component={LandscapeScreen} />
            <Stack.Screen name="CalenderScreen" component={CalenderScreen} />
            <Stack.Screen name="Hotel" component={Hotel} />
            <Stack.Screen name="Guide" component={Guide} />
            <Stack.Screen name="postinsta" component={PostInstaScreen} />
            <Stack.Screen name="Instructions" component={Instructions} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            initialRouteName="SignUp"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            {/* <Stack.Screen name="ActivityScreen" component={ActivityScreen} /> */}
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
