import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity
   } from 'react-native';
   import {connect} from 'react-redux';
import {Card,CardSection,Input,Button,Spinner} from './common';
import {emailChanged, passwordChanged,loginUser} from '../actions'; 
import {Actions} from 'react-native-router-flux';

import background from '../images/bg1.jpg';
import Emp from '../images/logo.png'; 

var {height,width} = Dimensions.get('window');


class Login extends Component{

  onEmailChange(text){
    this.props.emailChanged(text);
  }
  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  onButtonPress(){
    const {email,password} = this.props;
    this.props.loginUser({email,password});
  }

  renderError(){
    if(this.props.error){
        return(
            <View style={{backgroundColor: 'white'}}>
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
            </View>
        );
    }
  }

  renderButton(){
    if(this.props.loading){
        return <Spinner size='large'/>;
    }
    return(
        <Button onPress = {this.onButtonPress.bind(this)} >
            Login
        </Button>
    );
  }
    render(){
        return(
            <ImageBackground source={background} style={styles.bgc}>
              <Card>
                <CardSection style={styles.logo}>
                  <Image source={Emp} style={styles.emp}></Image>
                </CardSection>

                <CardSection>
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
                <TouchableOpacity onPress={()=>{Actions.forgot()}}  >
                      <View style={styles.forgotPass}>
                        <Text style={{textAlign:'right'}}>Forgot password</Text>
                      </View>
                </TouchableOpacity>

                    <View style={styles.loginButtonCenter}>
                      <View style={styles.loginButton}>
                        {this.renderButton()}
                      </View>
                      <TouchableOpacity onPress={()=>{Actions.signup()}}>
                      <View>
                        <Text>Don't have an acount?Sign Up Now</Text>
                      </View>
                      </TouchableOpacity>
                    </View>
                </CardSection>
              </Card>
           </ImageBackground>
            
    );
  }
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
  emailChanged,passwordChanged,loginUser
})(Login);

const styles = StyleSheet.create({
    
  bgc:{
      flex:1,
      justifyContent:'center',
      fontFamily: "Feather"
  },
  emp:{
    height:height/7,
    width:width/4,
    
  },
  logo:{
    justifyContent:'center'
  },
  forgotPass:{
    color:'grey',
    textAlign:'right',
    alignItems:'flex-end',
    paddingBottom:width/18,
    fontFamily: "Feather",

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
