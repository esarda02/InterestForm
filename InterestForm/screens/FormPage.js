import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import { useTimeout } from '../context/TimeoutContext';
import FormQuestion from '../components/FormQuestion';
import { validateForm } from '../utils/validation';

export default function FormPage({ pageIndex, navigation, config }) {
  const { resetTimeout } = useTimeout();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    resetTimeout();
    const loadFormData = async () => {
      const storedData = await AsyncStorage.getItem('formData');
      if (storedData) setFormData(JSON.parse(storedData));
    };
    loadFormData();
  }, []);

  const handleChange = (name, value, type) => {
    let parsedValue = value;
    if (type === 'number') {
      parsedValue = Number(value);
      if (isNaN(parsedValue)) {
        parsedValue = ''; // Reset to empty string if the value is not a valid number
      }
    }
    const newData = { ...formData, [name]: parsedValue };
    setFormData(newData);
    AsyncStorage.setItem('formData', JSON.stringify(newData));
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm(config.pages[pageIndex].questions, formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      if (pageIndex + 1 < config.pages.length) {
        navigation.navigate(`Page${pageIndex + 1}`);
      } else {
        try {
          await api.post('submit/', formData);
          Alert.alert('Form submitted successfully');
          AsyncStorage.removeItem('formData');
          navigation.navigate('Page0');
        } catch (error) {
          console.error('Error submitting form:', error);
          Alert.alert('Error', 'There was an error submitting the form');
        }
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {config.pages[pageIndex].questions.map((question, index) => (
        <FormQuestion
          key={index}
          question={question}
          value={formData[question.label]}
          onChange={handleChange}
          error={errors[question.label]}
        />
      ))}
      <Button mode="contained" onPress={handleSubmit} style={styles.element}>
        {pageIndex + 1 < config.pages.length ? 'Next' : 'Submit'}
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  element: {
    marginVertical: 10,
  },
});
