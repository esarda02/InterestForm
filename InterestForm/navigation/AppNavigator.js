import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { fetchConfig } from '../services/api';
import { TimeoutProvider } from '../context/TimeoutContext';
import FormPage from '../screens/FormPage';
import LoadingScreen from '../screens/LoadingScreen';
import ErrorScreen from '../screens/ErrorScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const configData = await fetchConfig();
        setConfig(configData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadConfig();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen error={error} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page0">
        {config.pages.map((page, index) => (
          <Stack.Screen
            key={index}
            name={`Page${index}`}
            options={{ title: `Page ${index + 1}` }}
          >
            {props => (
              <TimeoutProvider navigation={props.navigation} timeout={config.timeout}>
                <FormPage {...props} pageIndex={index} config={config} />
              </TimeoutProvider>
            )}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
