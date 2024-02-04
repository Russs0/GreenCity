import React from 'react';
import {Text, TextInput} from "react-native";
import {Controller} from "react-hook-form";


const Input = ({placeholder,name,control,secureTextEntry=false,errors,rules= {}}) => {
    return (
        <Controller control={control}
                    name={name}
                    rules={rules}
                    render={
            ({field: {value, onChange}}) => (
                <>
                    <TextInput placeholder={placeholder}
                               onChangeText={onChange}
                               value={value} secureTextEntry={secureTextEntry} className={'w-full'}/>

                    {errors.title && <Text className={"text-red-900"}>{errors.title.message}</Text>}
                </>)
        }/>
    )
};

export default Input;
