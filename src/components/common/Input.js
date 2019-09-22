import React from 'react';
import {View, Text,TextInput, StyleSheet,Dimensions} from 'react-native';


var {height,width} = Dimensions.get('window');
const Input = ({lable, value, onChangeText,placeholder,secureTextEntry,placeholderTextColor}) =>{
    const {inputStyle, lableStyle,containerStyle} = styles;
    return(
    <View style= {containerStyle}>
        <Text style={lableStyle}>{lable}</Text>
        <TextInput 
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}
            value={value}
            onChangeText={onChangeText}
            style={inputStyle}
            placeholderTextColor={placeholderTextColor}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    inputStyle:{
        color:'#fff',
        backgroundColor:'#a7bad1',
        borderRadius:width/10,
        paddingRight:width/25,
        paddingLeft:width/30,
        fontSize: width/23,
        lineHeight: width/20,
        flex: 2,
    },
    lableStyle:{
        fontSize:width/20,
        paddingLeft:width/25,
        flex:1,
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
});

export {Input};