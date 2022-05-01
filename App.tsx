import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Vehicle from './screens/Vehicle';
import * as Styles from './App.styles';
// import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Styles.TitleView>
        <Text style={{
          color: '#fff',
          fontSize: 22,
          fontWeight: '800',
        }}>
          Book a spaceship
        </Text>
      </Styles.TitleView>
      <Styles.ContentView>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Vehicle" component={Vehicle} />
        </Stack.Navigator>
      </Styles.ContentView>
      {/* <StatusBar style="auto" /> */}
    </NavigationContainer>
  );
}

export default App;
