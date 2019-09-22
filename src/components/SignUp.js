import React,{Component} from 'react';
import {View,Text,TouchableWithoutFeedback,ImageBackground,StyleSheet,Dimensions} from 'react-native';
import {Card,CardSection,Input, Button,Spinner} from './common';
import background from '../images/bg1.jpg';
var {height,width} = Dimensions.get('window');
import {emailChanged, passwordChanged,createUser} from '../actions';
import {connect} from 'react-redux';

class SignUp extends Component{

    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    onButtonPress(){
      const {email,password} = this.props;
      this.props.createUser({email,password});
    }
    renderError(){
        if(this.props.error === 'Authentication Failed'){
            return(
                <View style={{backgroundColor: 'white'}}>
                    <Text style={{color:'#fff'}}>
                     
                    </Text>
                </View>
            );
        }
        else{
          <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
        }
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size='large'/>;
        }
        return(
            <Button onPress = {this.onButtonPress.bind(this)} >
                Sign Up
            </Button>
        );
    }

    render(){
        return(
            <ImageBackground source={background} style={styles.bgc}>
              <Card>
                <CardSection style={{marginTop:height/30}}>
                    <Input
                        lable = "Email"
                        placeholder = "email@gmail.com"
                        placeholderTextColor= "white"
                        onChangeText = {this.onEmailChange.bind(this)}
                        value ={this.props.email}
                      >
                    </Input>
                </CardSection> 
                
                <CardSection>
                    <Input
                      secureTextEntry
                      lable = "Password"
                      placeholder = "password" 
                      placeholderTextColor= "white" 
                      onChangeText={this.onPasswordChange.bind(this)}
                      value ={this.props.password}  
                    />
                </CardSection>
                <View style={{alignItems:'center'}}>{this.renderError()}</View>
                <CardSection style={{flexDirection:'column'}}>
                    <View style={styles.loginButtonCenter}>
                      <View style={styles.loginButton}>
                            {this.renderButton()}
                      </View>
                    </View>
                </CardSection>
              </Card>
           </ImageBackground>
        );
    };
}

const mapStateToProp = state => { 
    return{
        email:state.auth.email,
        password:state.auth.password,
        error:state.auth.error,
        loading:state.auth.loading,
    };
  };
  
  export default connect(mapStateToProp, {
    emailChanged,passwordChanged,createUser
  })(SignUp);

const styles = StyleSheet.create({
    
    bgc:{
        flex:1,
        justifyContent:'center',
        fontFamily: "Feather"
    },
    loginButton:{
      color:'#fff',
      backgroundColor:'#24538F',
      height:height/13,
      width:width/5,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:width/25,
      marginBottom:width/25,
      fontFamily: "Feather"
    },
    loginButtonCenter:{
      alignItems:'center',
    
    },
    errorTextStyle:{
      color:'red',
      fontFamily: "Feather"
    }
  });

