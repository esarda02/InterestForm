import React, { createContext, useContext, useEffect, useRef } from 'react';
import { Alert } from 'react-native';

const TimeoutContext = createContext();

export const TimeoutProvider = ({ children, navigation, timeout }) => {
  const timeoutRef = useRef(null);

  useEffect(() => {
    resetTimeout();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      Alert.alert('Timeout', 'The form has timed out. Restarting...');
      navigation.navigate('Page0');
    }, timeout * 1000);
  };

  return (
    <TimeoutContext.Provider value={{ resetTimeout }}>
      {children}
    </TimeoutContext.Provider>
  );
};

export const useTimeout = () => useContext(TimeoutContext);
