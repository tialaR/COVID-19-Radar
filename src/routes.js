import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Main from './pages/Main';
// import NewsScreen from './pages/NewsScreen';
import { states } from './utils/arrays';
import { colors } from './utils/colors';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const statesAux = states.sort((a, b) => {
  return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
});

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName={statesAux[0].value}
      tabBarOptions={{
        scrollEnabled: true,
        labelStyle: { fontSize: 14, color: colors.white },
        indicatorStyle: { backgroundColor: colors.white },
        style: { backgroundColor: colors.black },
      }}>
      {statesAux.map((state, index) => (
        <Tab.Screen
          options={{
            tabBarOnPress: () => {
              console.warn('clicou na tab');
            },
          }}
          key={state.key}
          name={state.value}
          component={Main}
          initialParams={{ state: state.key, position: index }}
        />
      ))}
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: colors.white,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            backgroundColor: colors.black,
          },
        }}>
        <Stack.Screen
          name="Tabs"
          options={{
            title: 'COVID-19 Radar',
          }}
          component={Tabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
