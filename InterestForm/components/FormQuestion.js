import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, RadioButton, Text } from 'react-native-paper';

export default function FormQuestion({ question, value, onChange, error }) {
  const handleChange = (value) => {
    onChange(question.label, value, question.type);
  };

  return (
    <View style={styles.element}>
      {question.type === 'text' || question.type === 'number' ? (
        <TextInput
          label={question.label}
          keyboardType={question.type === 'number' ? 'numeric' : 'default'}
          value={value?.toString() || ''}
          onChangeText={handleChange}
          error={!!error}
        />
      ) : question.type === 'select' ? (
        <View style={styles.radioGroup}>
          <Text>{question.label}</Text>
          <RadioButton.Group onValueChange={handleChange} value={value}>
            {question.options.map((option, i) => (
              <View key={i} style={styles.radioOption}>
                <RadioButton value={option} />
                <Text>{option}</Text>
              </View>
            ))}
          </RadioButton.Group>
          {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  element: {
    marginVertical: 10,
  },
  radioGroup: {
    marginVertical: 10,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },
});
