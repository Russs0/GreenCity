import React from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import {Controller} from "react-hook-form";

const Input = ({
                   style,
                   placeholder,
                   name,
                   control,
                   secureTextEntry = false,
                   errors = {},
                   rules = {},
                   keyboardType,
                   onBlur,
                   multiline=false,
                    placeholderTextColor
               }) => {
    return (
        <Controller control={control}
                    name={name}
                    rules={rules}
                    render={
                        ({field: {value, onChange}}) => {

                            return (
                                <>

                                    <TextInput
                                        multiline={multiline}
                                        style={[styles.input, style, {borderColor: errors[name] ? '#ff3c3c' : '#ddd'}]}
                                        placeholder={placeholder}
                                        placeholderTextColor={Object.keys(errors).map(k => k.length).length > 0 ? '#ff3c3c' : "#8A8A8A"}
                                        value={value}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        secureTextEntry={secureTextEntry}
                                        keyboardType={keyboardType}
                                    />

                                </>)
                        }
                    }/>
    );
};
const styles = StyleSheet.create({
    input: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginBottom: 14,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
})
export default Input;
